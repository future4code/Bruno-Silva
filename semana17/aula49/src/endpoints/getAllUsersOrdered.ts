import { Request, Response } from 'express';
import selectAllUsersOrdered from '../data/selectAllUsersOrdered';

export const getAllUsersOrdered = async(
   req: Request,
   res: Response
): Promise<void> =>{
   try {
      let sort: string = req.query.sort as string;
      let order: string = req.query.order as string;

      if (sort && order) {
         sort = sort.toLocaleLowerCase() === "name"? "name" : sort.toLocaleLowerCase() === "type"? "type" : "email";
         order = order.toLocaleUpperCase() === "DESC"? "DESC" : "ASC";
      } else if (sort && !order) {
         sort = sort.toLocaleLowerCase() === "name"? "name" : sort.toLocaleLowerCase() === "type"? "type" : "email";
         order = "ASC";
      } else if (!sort && order) {
         sort = "email";
         order = order.toLocaleUpperCase() === "DESC"? "DESC" : "ASC";
      } else if (!sort && !order) {
         sort = "email";
         order = "ASC";
      };

      const users = await selectAllUsersOrdered(sort, order);

      if(!users.length){
         res.statusCode = 500;
         throw new Error("Server error! Please, try later :(");
      };

      res.status(200).send(users);
      
   } catch (error) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
   };
};