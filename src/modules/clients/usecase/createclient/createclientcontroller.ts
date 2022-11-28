import { Request, Response } from "express";
import { Createclientusecase } from "./createclientusecase";


class Createclientecontroller{
    async handle(request:Request,response:Response){
        const {body}= request
        const createclientusecase= new Createclientusecase()
        const result= await createclientusecase.execute(body)
        return response.json(result)
    }
}

export {Createclientecontroller}