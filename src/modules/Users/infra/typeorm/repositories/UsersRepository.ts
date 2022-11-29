import { ICreateUserDTO } from "src/modules/Users/dtos/ICreateUserDTO";
import { getRepository, Repository } from "typeorm";
import {IUsersRepository} from "../../../repositories/IUserRepository"
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository{

  private repository: Repository<User>;

  constructor(){
    this.repository = getRepository(User)
  }
 

  async create({ email, password, isAdmin }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({ email, password, isAdmin})
    
    await this.repository.save(user)

    return user

  }
  async findByEmail(email: string): Promise<User> {

    const user = this.repository.findOne({ email })

    return user
  }

  async findById(id: string): Promise<User> {
    const user = this.repository.findOne({ id })

    return user
  }
}

export{UsersRepository}