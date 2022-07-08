import { useVehicle } from "../../../../hooks"

export const VehicleCard = (props: { vehicleId: string }) => {
  const [vehicle, loading] = useVehicle(props.vehicleId)
  return (
    <div>
      {loading
        ? 'Loading'
        : vehicle.iterableProps.map(prop => {
          return <p>{prop[0]}: {prop[1]}</p>
        })
      }
    </div>
  )
}