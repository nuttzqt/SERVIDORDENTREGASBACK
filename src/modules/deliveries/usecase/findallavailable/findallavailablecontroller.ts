import { Request, Response } from "express";
import { Findallavailableusecase } from "./findallavailableusecase";

class Findallavailablecontroller{
    async handle(request:Request, response:Response){
        const findallavailableusecase= new Findallavailableusecase()
        const result= await findallavailableusecase.execute()
        return response.json(result)
    }
}
export {Findallavailablecontroller}