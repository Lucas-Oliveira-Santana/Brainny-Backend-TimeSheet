import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ITimeSheetRepository } from "../../repositories/ITimeSheetRepository";
import { TimeSheet } from "../../infra/typeorm/entities/TimeSheet";

@injectable()
class StopWorkUseCase{
  constructor(
    @inject("TimeSheetRepository")
    private timeSheetRepository:ITimeSheetRepository){}

    async execute({user_id}): Promise<TimeSheet>{

      const userIsWorking = await this.timeSheetRepository.findOpenTimeSheetByUser(user_id)


      if(!userIsWorking){
        throw new AppError("User is not working")
      }

      const timeSheet = await this.timeSheetRepository.finish(user_id)

      return timeSheet
    }
}



export {StopWorkUseCase}