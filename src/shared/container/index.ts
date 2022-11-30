import "reflect-metadata"
import {IUsersRepository} from "../../modules/Users/repositories/IUserRepository"
import { container } from "tsyringe"
import { UsersRepository } from "../../modules/Users/infra/typeorm/repositories/UsersRepository"
import { ITimeSheetRepository } from "../../modules/TimeSheet/repositories/ITimeSheetRepository"
import { TimeSheetRepository } from "../../modules/TimeSheet/infra/typeorm/repositories/TimeSheetRepository"


container.registerSingleton<IUsersRepository>(
  "UserRepository",UsersRepository
)

container.registerSingleton<ITimeSheetRepository>(
  "TimeSheetRepository",TimeSheetRepository
)