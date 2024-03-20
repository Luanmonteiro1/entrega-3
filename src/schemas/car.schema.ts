import { z } from "zod";

const carSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45).min(2),
    description: z.string().nullish(),
    brand: z.string().min(1).max(45),
    year: z.number().positive(),
    km: z.number().positive()

})

const carCreateSchema = carSchema.omit({ id: true })


export { carSchema, carCreateSchema }