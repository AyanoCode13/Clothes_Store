import { type Product } from "@prisma/client";
import { z } from "zod";

import {
    adminProcedure,
  createTRPCRouter,
} from "~/server/api/trpc";



export const productRouter = createTRPCRouter({
    create: adminProcedure
        .input(
            z.object({
                name: z.string().min(1),
                description: z.string(),
                thumbnail: z.string(),
                gallery: z.array(z.string()).optional(),
                price: z.number().min(0),
                stock: z.number().min(0),
                category: z.array(z.enum(["man","woman", "kid", "baby"])),
                subcategory: z.array(z.enum(["tops","bottoms", "shoes", "accessories", "bags", "hats","sale", "popular"])),
                sizes: z.array(z.enum(["XS", "S", "M", "L", "XL", "XXL"])),
                colors: z.array(z.string()),
                createdAt: z.date(),
                updatedAt: z.date() 
        }))
        .mutation(async ({ ctx, input }) => {
      
      
            return await ctx.db.product.create({
                data: {
                    name: input.name,
                    description: input.description,
                    thumbnail: input.thumbnail,
                    gallery: input.gallery,
                    price: input.price,
                    stock: input.stock,
                    category: input.category,
                    subcategory: input.subcategory,
                    sizes: input.sizes,
                    colors: input.colors,
                    createdAt: input.createdAt,
                    updatedAt: input.updatedAt
                }
            })
    
    }),
})