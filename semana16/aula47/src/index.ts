import app from './app';
import connection from './connection';
import { Request, Response } from "express";

// Exercício 1

/*Letra a
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);

    return result[0][0];
};

app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        console.log(await getActorById(id));

        res.end();
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Unexpected error");
    };
});
*/

/* Letra b
app.get("/users/:name", async (
    req: Request,
    res: Response
) => {
    let errorCode = 500;
    try {
        const name = req.params.name;

        const result = await connection.raw(`
            SELECT *
            FROM Actor
            WHERE name = '${name}';
        `);

        res.status(200).send(result[0][0]);
    } catch(error) {
        res.status(errorCode).send({ message: error.message });
    };
});
*/

/* Letra c
const countActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) AS 'Número de atores/atrizes gênero ${gender}'
        FROM Actor
        WHERE gender = '${gender}';
    `)
  
      return result[0][0]
};

app.get("/users/search", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender as string;

        console.log(await countActorByGender(gender));

        res.end();
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Unexpected error");
    };
});
*/

// Exercício 2
// Letra a
/*const updateSalary = async (
    id: string,
    salary: number
) => {
    const result = await connection("Actor")
    .update({
        salary: salary
    })
    .where({
        "id": id
    });

    return result [0];
};

app.patch("/users/:id/update", async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id as string;
        const salary: number = Number(req.body.salary);

        await updateSalary(id, salary);

        res.end();
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Unexpected error");
    };
});
*/

// Letra b
/*const deleteActor = async (
    id: string
) => {
    const result = await connection
        .delete()
        .from("Actor")
        .where({ "id": id });
    
    return result[0];
};

app.delete("/users/:id/remove-user", async ( req: Request, res: Response ) => {
    try {
        const userId: string = req.params.id as string;

        await deleteActor(userId);

        res.end();
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Unexpected error");
    };
});
*/

// Letra c
/*const averageSalaryByGender = async (
    gender: string
) => {
    const result = await connection
        .select()
        .avg("salary")
        .from("Actor")
        .where({ "gender": gender });
    
    return result[0];
};

app.get("/users/average-salary/:gender", async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const gender = req.params.gender as string;

        console.log (await averageSalaryByGender(gender));

        res.send();
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Unexpected error");
    };
});
*/