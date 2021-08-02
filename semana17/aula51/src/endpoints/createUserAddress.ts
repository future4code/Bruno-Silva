import { Request, Response } from "express";
import connection from "../data/connection";
import getAddressInfo from "../services/getAddressInfo";
import transporter from "../services/mailTransporter";
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

      if (result) {
         const { street, neighbourhood, city, state } = result;

         if (!street || !neighbourhood || !city || !state) {
            errorCode = 422;
            throw new Error(`Zipcode doesn´t exist! Please, check again!`);
         };
         
         const newUser: userAddress = { zipcode, street, numberAdd, complement, neighbourhood, city, state };

         await connection('UsersAddress')
            .insert(newUser);
   
         process.env.NODEMAILER_USER ? await transporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: `<g6e8k2i3m1o7e5d9@labenualunos.slack.com>`,
            subject: "Desafio-Aula51",
            text: `
               O objeto utilizado foi:

               await transporter.sendMail({;
                  from: email_do_usuario,
                  to: email_labenu,
                  subject: "Desafio-Aula51",
                  text: texto digitado
               })
            `
         }) : null;

         res.status(201).send("Endereço de usuário criado com sucesso!");
      }
   } catch (error) {
      res.status(errorCode).send({ message: error.sqlMessage || error.message });
   };
};