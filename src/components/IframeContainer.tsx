import { FC } from "react"

type IframeContainerProps = {
  link: string
  title?: string
  width?: string
  height?: string
}
export const IframeContainer: FC<IframeContainerProps> = ({
  link,
  width = "1080",
  height = "400",
}) => {
  return (
    <div>
      <iframe
        src={link}
        width={width}
        height={height}
        allow="encrypted-media"
      ></iframe>
    </div>
  )
}
