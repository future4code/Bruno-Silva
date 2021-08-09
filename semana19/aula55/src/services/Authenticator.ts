import { AuthenticationData } from "../types";
import dotenv from 'dotenv';
import * as jwt from "jsonwebtoken";

dotenv.config();

export class Authenticator {
    static generateToken(info: AuthenticationData): string{

        const token = jwt.sign(
            {id: info.id},
            process.env.JWT_KEY as string,
            {expiresIn: "1min"}
        )
        return token;
    };

    static getTokenData(token: string): AuthenticationData {

        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        );

        return payload as AuthenticationData;
    };
};