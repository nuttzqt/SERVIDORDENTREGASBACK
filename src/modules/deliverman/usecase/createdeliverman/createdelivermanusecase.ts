import { hash } from "bcrypt"
import { prisma } from "../../../../database/prismaclient";


interface ICreatedeliverman{
    username: string,
    password: string
}

class Createdelivermanusecase{
    async execute({username, password}:ICreatedeliverman){
        const delivermanexist= await prisma.deliveryman.findFirst({
            where:{username}
        })
        if(delivermanexist){throw new Error('deliverman ja existe esse cliente')}

        const hashpassword= await hash(password, 10);

        const deliverman= await prisma.deliveryman.create({
            data:{
                username,
                password:hashpassword }
        })
        return deliverman
    }
}
export {Createdelivermanusecase}