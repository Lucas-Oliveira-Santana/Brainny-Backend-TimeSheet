import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { hash } from "bcryptjs";
import { User } from "../../infra/typeorm/entities/User";




@injectable()
class CreateUserUseCase{
  constructor(
    @inject("UserRepository")
    private userRepository:IUsersRepository
    ){}

    async execute({ email,password,isAdmin}: ICreateUserDTO): Promise<User>{
    const userAlreadyExists = await this.userRepository.findByEmail(email)

    if(userAlreadyExists){
      throw new AppError("User already exists")
    }

    const passwordHash = await hash(password,8)

    const user = await this.userRepository.create({
      email,password:passwordHash,isAdmin
    })

    return user

  }
}

export {CreateUserUseCase}