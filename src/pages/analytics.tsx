import Banner from "../components/Banner"
import { IframeContainer } from "../components/IframeContainer"
import { trpc } from "../utils/trpc"

export default function Analytics() {
  const { data } = trpc.useQuery(["graphs", { limit: 5 }])
  return (
    <div className="flex flex-col gap-4">
      <Banner
        title="Sales analytics"
        subtitle="Sales analytics"
        tag="Learn More!"
      ></Banner>
      {data?.graphs.map(({ src, label }) => (
        <div className="w-2/3 mx-auto mb-10 shadow-sm" key={src}>
          <IframeContainer link={src} width="100%" height="600" title={label} />
        </div>
      ))}
    </div>
  )
}
