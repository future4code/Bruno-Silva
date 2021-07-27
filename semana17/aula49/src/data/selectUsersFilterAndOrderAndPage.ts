import connection from "./connection";

export default async function selectUsersFilterAndOrderAndPage(
    name: string,
    type: string,
    sort: string,
    order: string,
    offset: number,
    size: number
): Promise<any> {
    const result = await connection('aula49_exercicio')
        .where("name", "LIKE", `%${name}%`)
        .andWhere("type", "LIKE", `%${type}%`)
        .orderBy(sort, order)
        .limit(size)
        .offset(offset);

    return result;
};