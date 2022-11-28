import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';
import { Authenticatedclientsrouter } from './routes/autheticatedclients.routes';
import { Createclientsrouter } from './routes/createclients.routes';
import { Createdelivermanrouter } from "./routes/createdeliverman.routes";
import { Authenticateddeliverymanrouter } from "./routes/authenticateddeliveryman.routes";
import { Createdeliveriesrouter } from "./routes/createdeliveries.routes";
import { Findallavailablerouter } from "./routes/findallavailable.routes";
import { Updatedeliverymanrouter } from "./routes/updatedeliveryman.routes";
import { Findalldeliveriesrouter } from "./routes/findalldeliveries.routes";
import { Findalldeliverymandeliveriesrouter } from "./routes/findalldeliverymandeliveries.routes";
import { Updateenddaterouter } from "./routes/updateenddate.routes";

const app= express()
app.use(express.json())

app.use('/createclients', Createclientsrouter)
app.use("/authenticatedclients", Authenticatedclientsrouter)
app.use('/createdeliverman', Createdelivermanrouter)
app.use('/authenticateddelivery', Authenticateddeliverymanrouter)
app.use('/createdeliveries', Createdeliveriesrouter)
app.use('/delivery/available', Findallavailablerouter)
app.use('/delivery/updatedeliveryman/', Updatedeliverymanrouter)
app.use('/findalldeliveriesrouter', Findalldeliveriesrouter)
app.use('/finddeliveriesdeliveryman', Findalldeliverymandeliveriesrouter)
app.use('/updateenddate', Updateenddaterouter)

app.use((err:Error, request: Request, response: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return response.status(400).json({mesage:err.message})
    }
    return response.status(500).json({status:'error', message:"internal server error"})
})

app.listen(3600, ()=>{console.log('ola')})