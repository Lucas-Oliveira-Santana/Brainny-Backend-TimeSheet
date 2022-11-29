import { Request, Response, Router } from "express";
import {CreateUserController} from "../../../../modules/Users/useCases/CreateUser/CreateUserController"
import {AuthenticateUserController} from "../../../../modules/Users/useCases/AuthenticateUser/AuthenticateUserController"
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { ensureAdmin } from "../middlewares/ensureAdmin";


const userRoutes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

userRoutes.post("/",createUserController.handle)
userRoutes.post("/login",authenticateUserController.handle)
userRoutes.post("/auth",ensureAuthenticate,ensureAdmin,(req: Request, res: Response) => {
 
  res.json({message:"You're authenticated and admin"})
})

export {userRoutes}