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
        {
          src: "https://eu2.ca.analytics.ibm.com/bi/?perspective=explore&amp;pathRef=.my_folders%2Fdcasd%2FNew%2Bexploration&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;subView=model000001848f389ca9_00000004",
          label: "something",
          tag: "",
        },
        {
          src: "https://eu2.ca.analytics.ibm.com/bi/?perspective=explore&amp;pathRef=.my_folders%2Fdcasd%2FNew%2Bexploration&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;subView=model000001848f391f82_00000004",
          label: "something",
          tag: "",
        },
        {
          src: "https://eu2.ca.analytics.ibm.com/bi/?perspective=explore&amp;pathRef=.my_folders%2Fdcasd%2FNew%2Bexplorationn&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;subView=model000001848f43e9d2_00000004",
          label: "something",
          tag: "",
        },
      ]
      return {
        graphs: configs.slice(0, input?.limit ?? configs.length),
      }
    },
  })

export type AppRouter = typeof appRouter
