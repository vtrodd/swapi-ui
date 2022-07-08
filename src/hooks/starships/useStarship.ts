import { Starship, IStarship } from "../../types"
import { useResource } from "../useResource"

export const useStarship = (id: string) => useResource<IStarship, Starship>({ constructor: Starship, id })