import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import { carService } from "../services/car.services";


export class carController {
  private carService = new carService();

  public create = async (
    { body }: Request,
    res: Response
  ): Promise<Response> => {
    return res.status(201).json(await this.carService.create(body));
  };

  public read = async (_req: Request, res: Response): Promise<Response> => {
    const cars = await this.carService.read();
    return res.status(200).json(cars);
}

public readId = async (req: Request,res: Response) => {
  return res.status(200).json(await this.carService.readId(Number(res.locals.decoded.sub)))
}
}