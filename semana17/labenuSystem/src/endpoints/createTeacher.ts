import { Request, Response } from 'express';
import moment from 'moment';
import selectTeacherId from '../data/teacherData/selectTeacherId';
import selectSpecialtiesId from '../data/teacherData/selectSpecialtiesId';
import insertTeacher from '../data/teacherData/insertTeacher';
import insertSpecialtiesTeacherDependencies from '../data/teacherData/insertSpecialtiesTeacherDependencies';
import { teacher, specialty } from '../types';

const createTeacher = async (
    req: Request,
    res: Response
): Promise<void> => {
    let errorCode: number = 400;
    const regExValidateEmail: RegExp = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

    try {
        const { name, email, birthDate, specialties } = req.body;
        let modifyBirthDateFormat: string = "";

        if (!name || !email || !birthDate) {
            errorCode = 422;
            throw new Error("One or more fields are empty! Please, fill 'name', 'email' and 'birthDate' to proceed");
        };

        if (!regExValidateEmail.test(email)) {
            errorCode = 422;
            throw new Error("Insert a valid e-mail, such as: 'xxxx@yyyyy.zzz.www");
        };

        if (specialties) {
            for (let specialty of specialties) {
                if (!specialty.description){
                    errorCode = 422;
                    throw new Error("Each 'specialty' must received only a 'description' property! Please, check input´s values");
                } else if (
                    specialty.description !== "Backend" &&
                    specialty.description !== "CSS" &&
                    specialty.description !== "Programação Orientada a Objetos" &&
                    specialty.description !== "React" &&
                    specialty.description !== "Redux" &&
                    specialty.description !== "Testes" &&
                    specialty.description !== "Typescript"
                ) {
                    errorCode = 422;
                    throw new Error (`'Specialties' only received 'Backend', 'CSS', 'Programação Orientada a Objetos',
                     'React', 'Redux', 'Testes' or 'Typescript' as value! Please, check input´s values`);
                };
            };
        };

        if (birthDate && typeof birthDate === "string") {
            modifyBirthDateFormat = moment(birthDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
        };

        const result: teacher | null = await insertTeacher(name, email, modifyBirthDateFormat);

        if (!result) {
            errorCode = 500;
            throw new Error("An error occurred! Please, try again!");
        };

        if (specialties !== undefined) {
            const teacherCreated: teacher[] | undefined = await selectTeacherId(email);

            if (teacherCreated !== undefined) {
                const teacherId: number = teacherCreated[0].id;
                const specialtiesWithId: specialty[] = await selectSpecialtiesId(specialties);

                await insertSpecialtiesTeacherDependencies(specialtiesWithId, teacherId);
            } else {
                errorCode = 500;
                throw new Error("An error occurred! Please, try again!");
            };
        };

        res.status(201).send({ message: "Teacher created successfully!" });
    } catch (error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    };
};

export default createTeacher;