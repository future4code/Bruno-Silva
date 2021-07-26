import connection from "./connection";
import users from "./users.json";

const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

const createTables = () => connection
   .raw(`
      CREATE TABLE IF NOT EXISTS aula49_exercicio(
         id INT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         type ENUM("Teacher", "Operations", "CX") NOT NULL DEFAULT "Teacher"
      );
   `)
   .then(() => { console.log("Tabela criada!") })
   .catch(printError);

const insertUsers = () => connection("aula49_exercicio")
   .insert(users)
   .then(() => { console.log("Usuários criados") })
   .catch(printError);

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .finally(closeConnection);