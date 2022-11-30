import "reflect-metadata"
import "express-async-errors"
import { AppError } from "../../errors/AppError";
import express, { NextFunction, Request, Response } from "express";
import { createConnection } from "typeorm";
import { userRoutes } from "./routes/users.routes";
import { timeSheetRoutes } from "./routes/timeSheet.routes";
import "../../container/index"
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";


const app = express();
app.use(express.json());

createConnection()

app.use("/users",userRoutes)
app.use("/timeSheet",ensureAuthenticate,timeSheetRoutes)


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