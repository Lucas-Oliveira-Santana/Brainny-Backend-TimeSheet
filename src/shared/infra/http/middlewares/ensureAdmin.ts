import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepository } from "../../../../modules/Users/infra/typeorm/repositories/UsersRepository";


async function ensureAdmin(req: Request, res: Response,next: NextFunction) {
  const { id }= req.user;

  const usersRepository = new UsersRepository()

  const user = await usersRepository.findById(id)
  
  if(!user.isAdmin){
    throw new AppError(`User '${user.email}' is not a admin`, 401)
  }

  return next()
}

export {ensureAdmin}