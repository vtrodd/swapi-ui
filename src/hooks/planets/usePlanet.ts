import { IPlanet, Planet } from "../../types"
import { useResource } from "../useSingleResource"

const usePlanet = (id: string) => useResource<IPlanet, Planet>({ constructor: Planet, id })