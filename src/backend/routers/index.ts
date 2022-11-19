import * as trpc from "@trpc/server"
import * as z from "zod"

export const appRouter = trpc
  .router()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      }
    },
  })
  .query("graphs", {
    input: z
      .object({
        limit: z.number().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      const configs = [
        "https://eu2.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2FQuantity%252C%2BSales%2Band%2BProfit%2Bby%2BSegment&action=view&mode=dashboard&subView=model000001848c07ed56_00000000",
      ]
      return {
        graphs: configs.slice(0, input?.limit ?? configs.length),
      }
    },
  })

export type AppRouter = typeof appRouter
