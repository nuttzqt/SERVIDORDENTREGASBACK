import { Createdeliveriesusecase } from "./createdeliverysusecase"
import { Request, Response } from "express";

class Createdeliverycontroller{
    async handle(request:Request, response:Response){
        const{body}= request
        
        const createdeliveriesusecase=new Createdeliveriesusecase()
        const delivery= await createdeliveriesusecase.execute(body)
        return response.json(delivery)
    }
}
export {Createdeliverycontroller}