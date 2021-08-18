import * as jwt from "jsonwebtoken"
import { authenticationData } from "../model/User"

export class TokenManager {
   generate = (
      payload: authenticationData
   ): string => {
      return jwt.sign(
         payload,
         process.env.JWT_KEY as string,
         {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as string
         }
      )
   }

   getData = (
      token: string
   ): authenticationData => {
      return jwt.verify(
         token,
         process.env.JWT_KEY as string
      ) as authenticationData
   }
}
