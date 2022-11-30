import { ICreateTimeSheet } from "../dtos/ICreateTimeSheet"
import { TimeSheet } from "../infra/typeorm/entities/TimeSheet"


interface ITimeSheetRepository{
  findOpenTimeSheetByUser(user_id:string): Promise<TimeSheet>
  create(user_id:string):Promise<TimeSheet>
  finish(user_id:string)
  findById(id:string): Promise<TimeSheet>
  ListTimeSheets(): Promise<TimeSheet[]>
}


export {ITimeSheetRepository}