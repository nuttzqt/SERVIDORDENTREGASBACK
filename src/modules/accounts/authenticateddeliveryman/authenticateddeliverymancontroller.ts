import { Request, Response } from "express";
import { Authenticateddeliverymansusecase } from "./authenticateddeliverymanusecase";

class Authenticateddeliverymancontroller{
    async handle(request:Request, response:Response){
        const {body}= request
        const authenticateddeliverymansusecase= new Authenticateddeliverymansusecase()
        const result= await authenticateddeliverymansusecase.execute(body)
        return response.json(result)
    }
}
export {Authenticateddeliverymancontroller}