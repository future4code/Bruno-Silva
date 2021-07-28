import connection from "./connection";
import usersAddress from "./usersAddress.json";

const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

const createTables = () => connection
   .raw(`

      CREATE TABLE IF NOT EXISTS UsersAddress (
         id INT PRIMARY KEY AUTO_INCREMENT,
         zipcode VARCHAR(255) NOT NULL,
         street VARCHAR(255) NOT NULL,
         numberAdd INT(11) NOT NULL,
         complement VARCHAR(255),
         neighbourhood VARCHAR(255) NOT NULL,
         city VARCHAR(255) NOT NULL,
         state VARCHAR(255) NOT NULL
      );
   `)
   .then(() => { console.log("Tabela criada") })
   .catch(printError);

const insertUsersAddress = () => connection("UsersAddress")
   .insert(usersAddress)
   .then(() => { console.log("Endereços de usuário criados!") })
   .catch(printError);

const closeConnection = () => { connection.destroy() };

createTables()
   .then(insertUsersAddress)
   .finally(closeConnection);