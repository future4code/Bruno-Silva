import { UserDatabase } from "../../data/UserDatabase";
import { User } from "../../entities/User";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";

const signupBusiness = async(
    name: string,
    email: string,
    password: string,
    role: string
):Promise<string> => {

    try{

        if(!name || !email || !password || !role){
            throw new Error("Please fill all the fields");
        }

        if(email.indexOf("@") === -1){
            throw new Error("Invalid Email");
        }

        if(password.length < 6){
            throw new Error("Password must have at least 6 characters");
        }

        const id = IdGenerator.generateId();
        const hashPassword = await HashManager.generateHash(password);
        const newUser: User = new User(id, name, email, hashPassword, role)
        await UserDatabase.createUser(newUser);
        const token = Authenticator.generateToken({id, role});
        
        return token;

    }catch(error){
        throw new Error( error.message || "Error creating  Please check your system administrator.");
    };
};

export default signupBusiness;