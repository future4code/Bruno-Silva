import { AuthenticationData } from "../types";
import * as jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export class Authenticator {
    public static generateToken(info: AuthenticationData): string {
        const token = jwt.sign(
            { id: info.id, role: info.role },
            process.env.JWT_KEY as string,
            { expiresIn: "1h" }
        );

        return token;
    };

    public static getTokenData(token: string): AuthenticationData {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        );

        return payload as AuthenticationData;
    };
};