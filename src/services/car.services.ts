import { carSchema } from "../schemas/car.schema";
import { prisma } from "../database/prisma";
import { CarCreate, CarReturn } from "../interfaces/car.interface";

export class carService {
    public create = async (cars: CarCreate): Promise<CarReturn> => {
        const car = await prisma.car.create({ data: cars })
        return car;
    }

    public read = async (): Promise<Array<CarReturn>> => {
        return carSchema.array().parse(await prisma.car.findMany());
      };

    public readId = async (carsId: number): Promise<Array<CarReturn>> => {
        const cars = await prisma.car.findFirst({where: {id: carsId}})
        return carSchema.array().parse(cars)
    }
}