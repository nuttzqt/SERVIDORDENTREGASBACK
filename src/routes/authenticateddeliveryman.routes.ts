import { Router } from "express";
import { Authenticateddeliverymancontroller } from "../modules/accounts/authenticateddeliveryman/authenticateddeliverymancontroller";


const Authenticateddeliverymanrouter= Router()

const authenticateddeliverymancontroller= new Authenticateddeliverymancontroller()

Authenticateddeliverymanrouter.post("/", authenticateddeliverymancontroller.handle)

export {Authenticateddeliverymanrouter}