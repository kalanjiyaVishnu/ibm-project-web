import type { NextPage } from "next"
import { trpc } from "../utils/trpc"

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "bob" }])
  if (!data && isLoading) {
    return <div>Loading </div>
  }
  if (data) {
    return <div>{data.greeting}</div>
  }
  return <div className="p-8">Home </div>
}

export default Home
