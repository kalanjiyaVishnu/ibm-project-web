import Banner from "../components/Banner"
import { IframeContainer } from "../components/IframeContainer"
import { trpc } from "../utils/trpc"

export default function Analytics() {
  const { data, isLoading } = trpc.useQuery(["graphs", { limit: 5 }])
  return (
    <div className="flex flex-col gap-4">
      <Banner
        title="Sales analytics"
        subtitle="Sales analytics"
        tag="Learn More!"
      ></Banner>
      {data?.graphs.map(({ src, label }) => (
        <div className="w-2/3 mx-auto mb-10 shadow-sm">
          <IframeContainer
            link={`https://eu2.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FDash%2BBoard%2BFinal&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model000001848c07ed56_00000000`}
            width="100%"
            height="600"
            title={label}
          />
        </div>
      ))}
    </div>
  )
}
