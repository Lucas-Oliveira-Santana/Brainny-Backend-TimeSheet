import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTimeSheetUseCase } from "./ListTimeSheetUseCase";



class ListTimeSheetController{
  async handle(req: Request, res: Response):Promise<Response>{

    const listTimeSheetUseCase = container.resolve(ListTimeSheetUseCase)

    const listTimeSheet = await listTimeSheetUseCase.execute()

    return res.status(200).json(listTimeSheet)
  }
}


export {ListTimeSheetController}