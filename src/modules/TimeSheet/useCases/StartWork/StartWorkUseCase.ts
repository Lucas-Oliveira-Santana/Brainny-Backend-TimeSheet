import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { TimeSheet } from "../../infra/typeorm/entities/TimeSheet";
import { ITimeSheetRepository } from "../../repositories/ITimeSheetRepository";

@injectable()
class StartWorkUseCase{
  constructor(
  @inject("TimeSheetRepository")
  private timeSheetRepository:ITimeSheetRepository){}

  async execute({user_id}): Promise<TimeSheet>{
    const userAlreadyWorking = await this.timeSheetRepository.findOpenTimeSheetByUser(user_id)

    if(userAlreadyWorking){
      throw new AppError("User is already working, please check and end your working day!")
    }

    const timeSheet = await this.timeSheetRepository.create(user_id)


    return timeSheet
  }
}

export {StartWorkUseCase}