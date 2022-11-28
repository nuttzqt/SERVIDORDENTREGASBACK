import {prisma} from '../../../../database/prismaclient'

interface ICreatedeliveries{
    item_name:string,
    id_client:string
}
class Createdeliveriesusecase{
    async execute({item_name, id_client}:ICreatedeliveries){
        const delivery= await prisma.deliveries.create({
            data:{item_name, id_client}
        })
        return delivery
    }
}
export {Createdeliveriesusecase}
