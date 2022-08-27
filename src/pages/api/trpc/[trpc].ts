import { appRouter } from './../../../backend/routers/index';
import * as trpcNext from "@trpc/server/adapters/next"

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
})
