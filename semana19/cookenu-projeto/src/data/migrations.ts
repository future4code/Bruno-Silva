import connection from "./connection";
import users from './users.json';
import recipes from './recipes.json';
import { BaseDatabase } from "./BaseDatabase";

const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

class Migrations extends BaseDatabase {
    public static createTables = async (): Promise<void> => {
        await BaseDatabase.connection.raw(`
                CREATE TABLE IF NOT EXISTS User(
	                id VARCHAR(255) PRIMARY KEY NOT NULL,
                    name VARCHAR(50) NOT NULL,
                    email VARCHAR(255) UNIQUE NOT NULL,
                    password VARCHAR(255) NOT NULL,
                    role ENUM("ADMIN", "NORMAL") DEFAULT "NORMAL"
                );

                CREATE TABLE IF NOT EXISTS Recipe(
	                id VARCHAR(255) PRIMARY KEY NOT NULL,
                    title VARCHAR(50) NOT NULL,
                    description TEXT NOT NULL,
                    createdAt DATE NOT NULL,
	                creatorId VARCHAR(255) NOT NULL,
	                FOREIGN KEY (creatorId) REFERENCES User(id)
                );

                CREATE TABLE IF NOT EXISTS FollowUser_junction(
                    followerUserId VARCHAR(255) NOT NULL,
                    followedUserId VARCHAR(255) NOT NULL,
                    PRIMARY KEY (followerUserId, followedUserId),
                    FOREIGN KEY (followerUserId) REFERENCES User(id),
                    FOREIGN KEY (followedUserId) REFERENCES User(id)
                );
            `)
            .then(() => console.log("Tables created successfully!"))
            .catch(printError);
    };

    public static insertUsers = async (data: any):Promise<void> => {
        await BaseDatabase.connection("User")
            .insert(data)
            .then(() => console.log(`Users created successfully!`))
            .catch(printError);
    };

    public static insertRecipes = async (data: any):Promise<void> => {
        await BaseDatabase.connection("Recipe")
            .insert(data)
            .then(() => console.log(`Recipes created successfully!`))
            .catch(printError);
    };

    public static closeConnection():Promise<void> {
        return BaseDatabase.connection.destroy();
    }
};

const up = async() => {
    try {
        await Migrations.createTables();

        await Migrations.insertUsers(users);

        await Migrations.insertRecipes(recipes);
    } catch(error) {
        throw new Error(error.sqlMessage);
    } finally {
        Migrations.closeConnection();
    }
};

up().then(res => console.log("Fim de criaçao!")).catch(error => console.log(error));