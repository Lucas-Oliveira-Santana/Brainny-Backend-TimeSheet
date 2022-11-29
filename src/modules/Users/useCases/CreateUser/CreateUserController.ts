import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController{
  async handle(req: Request, res: Response){

    const {email,password,isAdmin} = req.body;


    const createUserUseCase = container.resolve(CreateUserUseCase)

    const user = await createUserUseCase.execute({email,password,isAdmin})

    return res.status(201).json(user)
  }
}


export {CreateUserController}