import { Request, Response } from "express";
import connection from "../data/connection";
import getAddressInfo from "../services/getAddressInfo";
import { addressInfo, userAddress } from "../types";

export default async function createUserAddress(
   req: Request,
   res: Response
): Promise<void> {
   let errorCode: number = 400;

   try {
      const { zipcode, numberAdd, complement } = req.body;

      if (!zipcode || !numberAdd) {
         res.statusCode = 422;
         throw "'zipcode' e 'numberAdd' são obrigatórios";
      };

      const result: addressInfo | null = await getAddressInfo(zipcode);

      if (!result) {
         errorCode = 500;
         throw new Error("Ops! Ocorreu um erro inesperado :/");

      } else if (result) {
         const { street, neighbourhood, city, state } = result;
         
         const newUser: userAddress = { zipcode, street, numberAdd, complement, neighbourhood, city, state };

         await connection('UsersAddress')
            .insert(newUser);

         res.status(201).send("Endereço de usuário criado com sucesso!")
      }
   } catch (error) {
      if (typeof error === "string") {

         res.status(errorCode).send(error)
      } else {

         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Ocorreu um erro inesperado :/");
      };
   };
};