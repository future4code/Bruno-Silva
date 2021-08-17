import * as jwt from "jsonwebtoken"
import { authenticationData } from "../model/user"

export class TokenManager {
   generate = (
      payload: authenticationData
   ): string => {
      return jwt.sign(
         payload,
         process.env.JWT_KEY!,
         {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN!
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
