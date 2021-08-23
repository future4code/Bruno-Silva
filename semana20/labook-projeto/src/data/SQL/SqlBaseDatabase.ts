import knex from 'knex'
import Knex from 'knex'
import dotenv from 'dotenv';

dotenv.config();

export abstract class SqlBaseDatabase {
    private static connection: Knex | null;

    protected getConnection(): Knex {
        if (!SqlBaseDatabase.connection) {
            SqlBaseDatabase.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: Number(process.env.DB_PORT || "3306"),
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_SCHEMA,
                    multipleStatements: true
                }
            });
        };

        return SqlBaseDatabase.connection;
    };
};