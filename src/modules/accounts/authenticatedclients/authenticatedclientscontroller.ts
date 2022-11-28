import { Request, Response } from "express";
import { Authenticatedclientsusecase } from "./authenticatedclientsusecase";

class Authenticatedclientscontroller{
    async handle(request:Request, response:Response){
        const {username, password}= request.body
        const authenticatedclientsusecase= new Authenticatedclientsusecase()
        const result= await authenticatedclientsusecase.execute({username, password})
        return response.json(result)
    }
}
export {Authenticatedclientscontroller}