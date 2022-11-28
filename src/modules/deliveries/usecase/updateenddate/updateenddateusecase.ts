import { prisma } from "../../../../database/prismaclient"

interface IUpdateenddate{
    id_deliveryman:string,
    id_delivery:string
}
 
class Updateenddateusecase{
    async execute({id_delivery,id_deliveryman}:IUpdateenddate){
        const result= await prisma.deliveries.updateMany({
            where:{id:id_delivery, id_deliveryman},
            data:{
                end_at: new Date()
            }
        })
        return result
    }
}
export{Updateenddateusecase}