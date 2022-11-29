import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUserCase } from "./AuthenticateUserUseCase";


class AuthenticateUserController{
  async handle(req: Request, res: Response){

    const {email, password} = req.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUserCase)

    const token = await authenticateUserUseCase.execute({email,password})

    return res.json(token)
  }
}


export{AuthenticateUserController}