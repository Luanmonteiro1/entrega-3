import { carCreateSchema, carSchema } from "../schemas/car.schema";
import { z } from "zod";

type CarCreate = z.infer<typeof carCreateSchema>
type CarReturn = z.infer<typeof carSchema>

export { CarCreate, CarReturn }