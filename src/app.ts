import "reflect-metadata" 
import "express-async-errors"
import express, { json } from "express"
import helmet from "helmet";
import { handleError } from "./middlewares/handleErrors.middleware";
import { carRouter } from "./routers/car.router";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/cars", carRouter)

app.use(handleError)
