import { prisma } from "../../../../database/prismaclient";


class Findallavailableusecase{
    async execute(){
        const delivery= prisma.deliveries.findMany({
            where:{end_at:null, id_deliveryman:null}
        })
        return delivery
    }
}
export {Findallavailableusecase}


