import { hash } from "bcrypt"
import { prisma } from "../../../../database/prismaclient"

interface ICreateclient{
    username:string,
    password:string
}

class Createclientusecase{
  
    async execute({username, password}:ICreateclient){
        const clientexist= await prisma.clients.findFirst({
            where:{username}
        })
        if(clientexist){throw new Error('ja existe esse cliente')}

        const hashpassword= await hash(password, 10);

        const client= await prisma.clients.create({
            data:{
                username,
                password:hashpassword }
        })
        return client
        
    }
}

export{Createclientusecase}