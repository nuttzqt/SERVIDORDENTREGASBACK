import { Router } from "express";
//import { ensurealthenticatedeliveryman } from "../middlewares/ensurealthenticatedeliveryman";
import { Createdelivermancontroller } from "../modules/deliverman/usecase/createdeliverman/createdelivermancontroller";


const Createdelivermanrouter= Router()

const createdelivermancontroller= new Createdelivermancontroller()

Createdelivermanrouter.post('/', createdelivermancontroller.handle)

export {Createdelivermanrouter}