import { BaseDatabase } from "./data/BaseDatabase";
import participants from './participants.json';

const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

class Migrations extends BaseDatabase {
    public static createTables = async (): Promise<void> => {
        await BaseDatabase.connection.raw(`
        CREATE TABLE IF NOT EXISTS Participant (
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            firstName VARCHAR(60) NOT NULL,
            lastName VARCHAR(60) NOT NULL,
            participation FLOAT NOT NULL
        );
        `)
            .then(() => console.log("Table created successfully!"))
            .catch(printError);
    };

    public static insertParticipant = async (data: any): Promise<void> => {
        await BaseDatabase.connection("Participant")
            .insert(participants)
            .then(() => console.log(`Participants created successfully!`))
            .catch(printError);
    };

    public static closeConnection(): Promise<void> {
        return BaseDatabase.connection.destroy();
    };
};

const up = async () => {
    try {
        await Migrations.createTables();

        await Migrations.insertParticipant(participants);

    } catch (error: any) {
        throw new Error(error.sqlMessage);
    } finally {
        Migrations.closeConnection();
    }
};

up().then(res => console.log("Ending migrations!")).catch(error => console.log(error));