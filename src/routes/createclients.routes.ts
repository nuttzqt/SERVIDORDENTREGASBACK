import { Router } from "express";
import { Createclientecontroller } from "../modules/clients/usecase/createclient/createclientcontroller";


const Createclientsrouter= Router()

const createclientecontroller= new Createclientecontroller()

Createclientsrouter.post('/', createclientecontroller.handle)

export {Createclientsrouter}

