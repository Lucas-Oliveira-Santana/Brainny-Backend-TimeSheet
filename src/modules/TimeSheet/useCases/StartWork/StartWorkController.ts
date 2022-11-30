import { Request, Response } from "express";
import { container } from "tsyringe";
import { StartWorkUseCase } from "./StartWorkUseCase";


class StartWorkController{
  async handle(req: Request, res: Response):Promise<Response>{
    const {id} = req.user

    const user_id = id

    const startWorkUseCase = container.resolve(StartWorkUseCase)


    const timeSheet = await startWorkUseCase.execute({user_id})

    return res.status(201).json(timeSheet)
  }
}


export {StartWorkController}