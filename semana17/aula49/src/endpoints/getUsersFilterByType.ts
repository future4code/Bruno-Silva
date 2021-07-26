import { Request, Response } from 'express';
import selectUsersByType from '../data/selectUsersByType';

export const getUsersFilterByType = async(req: Request,res: Response): Promise<void> =>{
   try {
      const type: string = req.params.type as string;

      const users = await selectUsersByType(type);

      if(!users.length){
         res.statusCode = 404;
         throw new Error("No recipes found");
      }

      res.status(200).send(users);
      
   } catch (error) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
   };
};