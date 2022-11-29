import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IRequest{
  email:string;
  password:string;
}

@injectable()
class AuthenticateUserUserCase{

  constructor(
    @inject("UserRepository")
    private usersRepository:IUsersRepository
  ){}

  async execute({ email, password }:IRequest){
    const userExists = await this.usersRepository.findByEmail(email)

    if(!userExists){
      throw new AppError("Email or password incorrect")
    }

    const passwordMatch = await compare(password, userExists.password)

    if(!passwordMatch){
      throw new AppError("Email or password incorrect")
    }

    const token = sign({},"3d8ade1e-f157-4942-8ad2-dfc6ce9c55bf",{
      subject:userExists.id
    })


    return {token}
  }

}

export{AuthenticateUserUserCase}