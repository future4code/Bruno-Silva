import { Request, Response } from 'express';
import signupBusiness from '../../business/user/signupBusiness';

const signupController = async (
    req: Request, 
    res: Response
):Promise<void> => {     
    try {
        const {email, name, password, role} = req.body;
        
        const token = await signupBusiness(name, email, password, role);

        res.status(200).send({ token });

    } catch (error) {
        res.status(400).send({ error: error.message });
    };
};

export default signupController;