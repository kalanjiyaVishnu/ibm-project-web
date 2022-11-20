import { FC } from "react"

type IframeContainerProps = {
  link: string
  title?: string
  width?: string
  height?: string
}
export const IframeContainer: FC<IframeContainerProps> = ({
  link,
  title,
  width = "1080",
  height = "400",
}) => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      {title && <h1 className="text-2xl">{title}</h1>}
      <div className="rounded-md shadow-md border-2">
        <iframe
          src={link}
          width={width}
          height={height}
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  )
}
