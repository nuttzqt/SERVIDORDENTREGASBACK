import { Request, Response } from "express";
import { Updateenddateusecase } from "./updateenddateusecase";

class Updateenddatecontroller{
    async handle(request:Request, response:Response){
        const{id:id_delivery}= request.params
        const{id_deliveryman}= request
        const updateenddateusecase= new Updateenddateusecase()
        const update= await updateenddateusecase.execute({id_deliveryman, id_delivery})
        return response.json(update)
    }
}
export {Updateenddatecontroller}