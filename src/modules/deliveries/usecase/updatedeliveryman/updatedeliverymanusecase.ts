import {prisma} from '../../../../database/prismaclient'

interface IUpdatedeliveryman{
    id_delivery:string,
    id_deliveryman:string
}

class Updatedeliverymanusecase{
    async execute({id_delivery, id_deliveryman}:IUpdatedeliveryman){
        const result= await prisma.deliveries.update({
            where:{id:id_delivery},
            data:{id_deliveryman}
        })
        return result
    }
}
export {Updatedeliverymanusecase}