import { Request, Response } from 'express';
import insertTeacherInClass from '../data/classData/insertTeacherInClass';
import { classTeachDependencies } from '../types';

const createTeacherInClass = async(
    req: Request,
    res: Response
): Promise<void> => {
    let errorCode: number = 400;

    try {
        const { classId, teacherId } = req.body;

        if (!classId || !teacherId) {
            errorCode = 422;
            throw new Error("One or more fields aren´t filled! Please, check if 'classId' and 'teacherId' input´s exist");
        }

        if (typeof classId !== "number" || typeof teacherId !== "number") {
            errorCode = 422;
            throw new Error("'classId' and 'teacherId' should be a number type! Please, check input´s values");
        };

        const result: classTeachDependencies | undefined = await insertTeacherInClass(classId, teacherId);

        if(!result) {
            if (result === undefined) {
                errorCode = 422;
                throw new Error("'classId' and/or 'teacherId' doesn´t exist! Please, check input´s values");
            } else if (result === false) {
                errorCode = 422;
                throw new Error("Teacher already exist in some class! Please, try another teacher");
            }; 
        };

        res.status(201).send("Teacher associated to class successfully!");
    } catch(error) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message });
    }
};

export default createTeacherInClass;