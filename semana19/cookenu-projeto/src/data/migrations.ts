import connection from "./connection";
import users from './users.json';
import recipes from './recipes.json';

const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

const createTables = () => connection
    .raw(`
        CREATE TABLE IF NOT EXISTS User_projeto19(
	        id VARCHAR(255) PRIMARY KEY NOT NULL,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            role ENUM("ADMIN", "NORMAL") DEFAULT "NORMAL"
        );

        CREATE TABLE IF NOT EXISTS Recipe_projeto19(
	        id VARCHAR(255) PRIMARY KEY NOT NULL,
            title VARCHAR(50) NOT NULL,
            description TEXT NOT NULL,
            createdAt DATE NOT NULL,
	        creatorId VARCHAR(255) NOT NULL,
	        FOREIGN KEY (creatorId) REFERENCES User_projeto19(id)
        );
    `)
    .then(() => console.log("Tables created successfully!"))
    .catch(printError);

const insertUsers = () => connection("User_projeto19")
    .insert(users)
    .then(() => console.log("Users created successfully!"))
    .catch(printError);

const insertRecipes = () => connection("Recipe_projeto19")
    .insert(recipes)
    .then(() => console.log("Recipes created successfully!"))
    .catch(printError);

const closeConnection = () => { connection.destroy()};

createTables()
    .then(insertUsers)
    .then(insertRecipes)
    .finally(closeConnection);