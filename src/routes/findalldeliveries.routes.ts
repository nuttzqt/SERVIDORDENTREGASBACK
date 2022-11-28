import { Router } from "express";
import { ensurealthenticatedeclient } from "../middlewares/ensurealthenticateclient";
import { Findalldeliveriescontroller } from "../modules/clients/usecase/deliveries/findalldeliveriescontroller";

const Findalldeliveriesrouter= Router()

const findalldeliveriescontroller= new Findalldeliveriescontroller()

Findalldeliveriesrouter.get('/',ensurealthenticatedeclient, findalldeliveriescontroller.handle)

export{Findalldeliveriesrouter}