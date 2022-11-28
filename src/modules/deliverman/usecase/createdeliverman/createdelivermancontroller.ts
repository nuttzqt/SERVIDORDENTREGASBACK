import { Request, Response } from "express";
import { Createdelivermanusecase } from "./createdelivermanusecase";

class Createdelivermancontroller{
    async handle(request:Request, response:Response){
        const {body}= request
        const createdelivermanusecase= new Createdelivermanusecase()

        const result= await createdelivermanusecase.execute(body)
        return response.json(result)
    }
}
export {Createdelivermancontroller}