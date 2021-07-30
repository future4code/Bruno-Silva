import { Request, Response } from 'express';
import moment from 'moment';
import insertStudent from '../data/insertStudent';
import insertNewHobbies from '../data/insertNewHobbies';
import insertHobbiesStudentDependencies from '../data/insertHobbiesStudentDependencies';
import selectHobbiesId from '../data/selectHobbiesId';
import selectStudentId from '../data/selectStudentId';
import { student, hobby, dependencies } from '../types';

const createStudent = async (
    req: Request,
    res: Response
): Promise<void> => {
    let errorCode: number = 400;
    const regExValidateEmail: RegExp = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

    try {
        const { name, email, birthDate, hobbies } = req.body;
        let modifyBirthDateFormat: string = "";

        if (!name || !email || !birthDate) {
            errorCode = 422;
            throw new Error("One or more fields are empty! Please, fill 'name', 'email' and 'birthDate' to proceed");
        };

        if (!regExValidateEmail.test(email)) {
            errorCode = 422;
            throw new Error("Insert a valid e-mail, such as: 'xxxx@yyyyy.zzz.www");
        };

        if (hobbies) {
            for (let hobby of hobbies) {
                if (!hobby.description){
                    errorCode = 422;
                    throw new Error("Each 'hobby' must received only a 'description' property! Please, check input´s values");
                };
            };
        };

        if (birthDate && typeof birthDate === "string") {
            modifyBirthDateFormat = moment(birthDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
        };

        const result: student | null = await insertStudent(name, email, modifyBirthDateFormat);

        if (!result) {
            errorCode = 500;
            throw new Error("An error occurred! Please, try again!");
        };

        if (hobbies !== undefined) {
            await insertNewHobbies(hobbies);

            const studentCreated: student[] | undefined = await selectStudentId(email);

            if (studentCreated !== undefined) {
                const studentId: number = studentCreated[0].id;
                const hobbiesWithId: hobby[] = await selectHobbiesId(hobbies);

                await insertHobbiesStudentDependencies(hobbiesWithId, studentId);
            } else {
                errorCode = 500;
                throw new Error("An error occurred! Please, try again!");
            };
        };

        res.status(201).send({ message: "Student created successfully!" });
    } catch (error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};

export default createStudent;