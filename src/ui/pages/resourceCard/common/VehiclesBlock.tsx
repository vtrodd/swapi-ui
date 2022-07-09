import { ResourceCardBlock, ResourceCardBlockProps } from "./ResourceCardBlock"

type VehiclesBlockProps = ResourceCardBlockProps & {
  vehicles: string[]
}

export const VehiclesBlock = ({vehicles, title, ...props}: VehiclesBlockProps) => {
  return (
    <ResourceCardBlock
      {...props}
      title={title || 'Vehicles'}
    >
      {vehicles
        ? vehicles?.map((vehicle, index) => (
          <p key={index}><a href={`/resource/${vehicle?.substring(22) || ''}`}>{vehicle}</a></p>
        ))
        : <></>
      }
    </ResourceCardBlock>
  )
}