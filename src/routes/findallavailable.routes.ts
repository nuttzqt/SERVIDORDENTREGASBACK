import { Router } from "express";
import { Findallavailablecontroller } from "../modules/deliveries/usecase/findallavailable/findallavailablecontroller";
import { ensurealthenticatededeliveryman } from "../middlewares/ensurealthenticatedeliveryman";
const Findallavailablerouter=Router()

const findallavailablecontroller = new Findallavailablecontroller()

Findallavailablerouter.get('/',ensurealthenticatededeliveryman, findallavailablecontroller.handle)

export{Findallavailablerouter}