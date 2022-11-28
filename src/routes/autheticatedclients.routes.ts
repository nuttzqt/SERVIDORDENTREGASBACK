import { Router } from "express";
import { Authenticatedclientscontroller } from "../modules/accounts/authenticatedclients/authenticatedclientscontroller";

const Authenticatedclientsrouter= Router()

const authenticatedclientscontroller= new Authenticatedclientscontroller()

Authenticatedclientsrouter.post('/',authenticatedclientscontroller.handle)

export {Authenticatedclientsrouter}