import { inject, injectable } from "tsyringe";
import { ITimeSheetRepository } from "../../repositories/ITimeSheetRepository";

@injectable()
class ListTimeSheetUseCase{
  constructor(
    @inject("TimeSheetRepository")
    private timeSheetRepository:ITimeSheetRepository){}
    async execute(){
    const registers = await this.timeSheetRepository.ListTimeSheets()

    return registers
  }
}

export {ListTimeSheetUseCase}