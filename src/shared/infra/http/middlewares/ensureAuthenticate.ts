import {NextFunction, Request, Response} from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
  sub: string;
}


export function ensureAuthenticate(req: Request, res: Response,next: NextFunction){

  const authToken = req.headers.authorization

  if(!authToken){
    return res.status(401).json({
      message:"Token is missing"
    })
  }

  const [,token] = authToken.split(" ")

  try {

    const {sub:user_id} = verify(token,"3d8ade1e-f157-4942-8ad2-dfc6ce9c55bf") as IPayload

    req.user = {
      id: user_id
    }

   return next()
  }catch(err){
    return res.status(401).json({
      message:"Token invalid"
    })
  }
  
}