import { Router } from "express";
import { carController } from "../controllers/car.controller";


export const carRouter = Router();
const controller = new carController();

carRouter.post("/", controller.create);

carRouter.get("/", controller.read)

carRouter.get("/:id", controller.readId)


