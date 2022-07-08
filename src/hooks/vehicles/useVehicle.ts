import { Vehicle, IVehicle } from "../../types"
import { useResource } from "../useResource"

export const useVehicle = (id: string) => useResource<IVehicle, Vehicle>({ constructor: Vehicle, id })