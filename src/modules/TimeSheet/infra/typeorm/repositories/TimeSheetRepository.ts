import { ITimeSheetRepository } from "../../../repositories/ITimeSheetRepository";
import { TimeSheet } from "../entities/TimeSheet";
import { getRepository, Repository } from "typeorm";


class TimeSheetRepository implements ITimeSheetRepository{
  private repository: Repository<TimeSheet>

  constructor(){
    this.repository = getRepository(TimeSheet)
  }


  async findOpenTimeSheetByUser(user_id: string): Promise<TimeSheet> {
    const openByUser = await this.repository.findOne({
      where: {user_id, end_hour:null}
    })

    return openByUser
  }

  async findById(id: string): Promise<TimeSheet> {
    const timeSheet = await this.repository.findOne({id})

    return timeSheet
  }

  async create(user_id: string): Promise<TimeSheet>{

    const now = new Date().toLocaleTimeString();
    
    const timeSheet = this.repository.create({user_id,start_hour:now})

    await this.repository.save(timeSheet)

    return timeSheet
  }

  async finish(user_id: string) {
    const now = new Date().toLocaleTimeString() 

    await this.repository
      .createQueryBuilder()
      .update(TimeSheet)
      .set({end_hour:now})
      .where("user_id = :user_id", {user_id})
      .execute();


    const result = {user_id,now}

    return result
  }
  
  async ListTimeSheets(): Promise<TimeSheet[]> {
    const timeSheetList = await this.repository.find()

    return timeSheetList
  }
}


export {TimeSheetRepository}