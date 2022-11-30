import { Request, Response } from "express";
import { container } from "tsyringe";
import { StopWorkUseCase } from "./StopWorkUseCase";


class StopWorkController{
  async handle(req: Request, res: Response):Promise<Response>{
    const {id} = req.user

    const user_id = id

    const stopWorkUseCase = container.resolve(StopWorkUseCase)


    const timeSheet = await stopWorkUseCase.execute({user_id})

    return res.status(201).json(timeSheet)
  }
}


export {StopWorkController}