import { Request, Response } from "express";
import { Findalldeliveriesusecase } from "./findalldeliveriesusecase";

class Findalldeliveriescontroller{
    async handle(request:Request,response:Response){
        const{id_client}= request
        const findalldeliveriesusecase= new Findalldeliveriesusecase()
        const findall= await findalldeliveriesusecase.execute(id_client)
        return response.json(findall)
    }
}
export {Findalldeliveriescontroller}