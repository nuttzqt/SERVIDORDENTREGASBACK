import { prisma } from "../../../../database/prismaclient";


class Findalldeliveriesusecase{
    async execute(id_client:string){
        const deliveries= await prisma.deliveries.findMany({
            where:{id_client}
        })
        return deliveries
    }
}
export {Findalldeliveriesusecase}