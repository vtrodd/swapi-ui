import { IPlanet, Planet } from "../../types"
import { useResource } from "../useResource"

export const usePlanet = (id: string) => useResource<IPlanet, Planet>({ constructor: Planet, id })