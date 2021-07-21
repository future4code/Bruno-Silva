### Exercício 1
a) A resposta direta do raw na variável `result` será um objeto de informações armazenados na tabela `Actor`. Nota-se que nesta resposta, dados do sistema SQL, que não os construídos pelo backender e também não desejados, são recebidos. Para evitar esse processo, pegamos como resposta o `result[0]`.

b) A função selecionada foi:
```
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
```