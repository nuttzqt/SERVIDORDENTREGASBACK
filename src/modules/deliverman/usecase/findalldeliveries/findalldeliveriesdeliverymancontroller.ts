import { Request, Response } from "express";
import { Findalldeliveriesdeliverymanusecase } from "./findalldeliveriesdeliverymanusecase";


class Findalldeliveriesdeliverymancontroller{
    async handle(request:Request,response:Response){
        const{id_deliveryman}= request
        const findalldeliveriesdeliverymanusecase= new Findalldeliveriesdeliverymanusecase()
        const findall= await findalldeliveriesdeliverymanusecase.execute(id_deliveryman)
        return response.json(findall)
    }
}
export {Findalldeliveriesdeliverymancontroller}