import { Router } from "express";
import { ensurealthenticatedeclient } from "../middlewares/ensurealthenticateclient";
import { Createdeliverycontroller } from "../modules/deliveries/usecase/createdelivery/createdeliverycontroller";

const Createdeliveriesrouter= Router()

const createdeliverycontroller= new Createdeliverycontroller()

Createdeliveriesrouter.post('/',ensurealthenticatedeclient, createdeliverycontroller.handle)

export {Createdeliveriesrouter}

