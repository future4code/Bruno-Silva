import { Request, Response } from 'express';
import selectUsersByName from '../data/selectUsersByName';

export const getUsersFilterByName = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const name: string = req.query.name as string || "%";

      const users = await selectUsersByName(name);

      if (!users.length) {
         res.statusCode = 404;
         throw new Error("No recipes found");
      }

      res.status(200).send(users);

   } catch (error) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
   };
};