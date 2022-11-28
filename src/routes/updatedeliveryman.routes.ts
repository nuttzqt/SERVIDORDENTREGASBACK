import { Router } from "express";
import { ensurealthenticatededeliveryman } from "../middlewares/ensurealthenticatedeliveryman";
import { Updatedeliverymancontroller } from "../modules/deliveries/usecase/updatedeliveryman/updatedeliverymancontroller";

const Updatedeliverymanrouter= Router()

const updatedeliverymancontroller= new Updatedeliverymancontroller()

Updatedeliverymanrouter.put('/:id',ensurealthenticatededeliveryman, updatedeliverymancontroller.handle)

export{Updatedeliverymanrouter}