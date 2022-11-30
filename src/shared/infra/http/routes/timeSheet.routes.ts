import { Request, Response, Router } from "express";
import { ListTimeSheetController } from "../../../../modules/TimeSheet/useCases/ListTimeSheet/ListTimeSheetController";
import { StopWorkController } from "../../../../modules/TimeSheet/useCases/EndWork/StopWorkController";
import { StartWorkController } from "../../../../modules/TimeSheet/useCases/StartWork/StartWorkController";
import {ensureAdmin} from "../middlewares/ensureAdmin"



const timeSheetRoutes = Router()

const startWorkController = new StartWorkController()
const stopWorkController = new StopWorkController()
const listTimeSheetController = new ListTimeSheetController()

timeSheetRoutes.post("/start",startWorkController.handle)
timeSheetRoutes.post("/end",stopWorkController.handle)
timeSheetRoutes.get("/list", ensureAdmin ,listTimeSheetController.handle)


export {timeSheetRoutes}