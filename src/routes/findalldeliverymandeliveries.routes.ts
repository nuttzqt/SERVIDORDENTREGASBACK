import { Router } from "express";
import { ensurealthenticatededeliveryman } from "../middlewares/ensurealthenticatedeliveryman";
import { Findalldeliveriesdeliverymancontroller } from "../modules/deliverman/usecase/findalldeliveries/findalldeliveriesdeliverymancontroller";

const Findalldeliverymandeliveriesrouter= Router()

const findalldeliveriesdeliverymancontroller= new Findalldeliveriesdeliverymancontroller()

Findalldeliverymandeliveriesrouter.get('/',ensurealthenticatededeliveryman, findalldeliveriesdeliverymancontroller.handle)

export {Findalldeliverymandeliveriesrouter}
