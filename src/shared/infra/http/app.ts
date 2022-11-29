import "reflect-metadata"
import "express-async-errors"
import express, { NextFunction, Request, Response } from "express";
import { createConnection } from "typeorm";
import { AppError } from "../../errors/AppError";
import { userRoutes } from "./routes/users.routes";
import "../../container/index"


const app = express();
app.use(express.json());

createConnection()

app.use("/users",userRoutes)


app.use((err:Error, request:Request, response:Response,next:NextFunction)=>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }
    
    return response.status(500).json({
        status:"error",
        message:`Internal server error - ${err.message}`
    })
  })

export {app}