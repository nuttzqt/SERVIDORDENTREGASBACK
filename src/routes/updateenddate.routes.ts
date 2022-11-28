import { Router } from "express";
import { ensurealthenticatededeliveryman } from "../middlewares/ensurealthenticatedeliveryman";
import { Updateenddatecontroller } from "../modules/deliveries/usecase/updateenddate/updateenddatecontroller";

const Updateenddaterouter= Router()

const updateenddatecontroller= new Updateenddatecontroller()

Updateenddaterouter.put('/:id',ensurealthenticatededeliveryman, updateenddatecontroller.handle)

export {Updateenddaterouter}