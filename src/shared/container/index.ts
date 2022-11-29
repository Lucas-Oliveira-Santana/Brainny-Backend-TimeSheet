import "reflect-metadata"
import {IUsersRepository} from "../../modules/Users/repositories/IUserRepository"
import { container } from "tsyringe"
import { UsersRepository } from "../../modules/Users/infra/typeorm/repositories/UsersRepository"


container.registerSingleton<IUsersRepository>(
  "UserRepository",UsersRepository
)