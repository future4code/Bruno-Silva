import connection from "./connection";

export default async function selectAllUsers(
    size: number,
    offset: number
):Promise<any> {
    const result = await connection('aula49_exercicio')
        .limit(size)
        .offset(offset);

    return result;
};