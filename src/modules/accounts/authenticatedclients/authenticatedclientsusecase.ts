import { prisma } from "../../../database/prismaclient"
import {compare} from "bcrypt";
import {sign} from "jsonwebtoken";

interface IAutheticatedclients{
    username:string,
    password:string 
}

class Authenticatedclientsusecase{
    async execute({username, password}:IAutheticatedclients){
        const client= await prisma.clients.findFirst({
            where:{username}
        })
        if(!client){throw new Error('username invalid')}

        const passwordmathc= await compare(password, client.password)
        if(!passwordmathc){throw new Error('username invalid')}

        const token= sign({username}, "8441653b5b1ef8078b937d39f0374c95", {
            subject: client.id,
            expiresIn:'1d'
        })
        return token
    }
}
export{Authenticatedclientsusecase}