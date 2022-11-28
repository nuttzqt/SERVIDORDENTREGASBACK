import { NextFunction } from "express";
import { Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Ipayload{
    sub:string
}

export async function ensurealthenticatededeliveryman(request:Request, response:Response, next:NextFunction) {
    const authheader= request.headers.authorization;
    if(!authheader){return response.status(401).json({message:'token missing'});}

    const [, token]= authheader.split(" ")

    try{
        const {sub}= verify(token, 'vnddjks8654j') as Ipayload
        request.id_deliveryman= sub
        
        return next()
    }catch(err){
        return response.status(401).json({
            message:'token invalid'
        })
    }
} 