import { Request, Response } from "express";
import { Updatedeliverymanusecase } from "./updatedeliverymanusecase";


class Updatedeliverymancontroller{
    async handle(request:Request, response:Response){
        const {id_deliveryman}= request;
        const {id: id_delivery}= request.params;
        const updatedeliverymanusecase= new Updatedeliverymanusecase()
        const deliveryman= await updatedeliverymanusecase.execute({id_deliveryman, id_delivery})
        return response.json(deliveryman)
    }
}
export {Updatedeliverymancontroller}