import app from './app';
import connection from './connection';
import { Request, Response } from "express";

// const getActorById = async (id: string): Promise<any> => {
//     const result = await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//   `);

//     return result[0][0];
// };

// app.get("/users/:id", async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id;

//         console.log(await getActorById(id));

//         res.end();
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send("Unexpected error");
//     };
// });

// app.get("/users/:name", async (
//     req: Request,
//     res: Response
// ) => {
//     let errorCode = 500;
//     try {
//         const name = req.params.name;

//         const result = await connection.raw(`
//             SELECT *
//             FROM Actor
//             WHERE name = '${name}';
//         `);

//         res.status(200).send(result[0][0]);
//     } catch(error) {
//         res.status(errorCode).send({ message: error.message });
//     };
// });