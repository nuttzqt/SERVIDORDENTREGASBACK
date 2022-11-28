import { prisma } from "../../../database/prismaclient"
import {compare} from "bcrypt";
import {sign} from "jsonwebtoken";

interface IAutheticateddeliveryman{
    username:string,
    password:string 
}

class Authenticateddeliverymansusecase{
    async execute({username, password}:IAutheticateddeliveryman){
        const deliveryman= await prisma.deliveryman.findFirst({
            where:{username}
        })
        if(!deliveryman){throw new Error('username invalid')}

        const passwordmathc= await compare(password, deliveryman.password)
        if(!passwordmathc){throw new Error('username invalid')}

        const token= sign({username}, "vnddjks8654j", {
            subject: deliveryman.id,
            expiresIn:'3h'
        })
        return token
    }
}
export{Authenticateddeliverymansusecase}
