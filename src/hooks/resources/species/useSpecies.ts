import { ISpecies, Species } from "../../../types"
import { useResource } from "../useResource"

export const useSpecies = (id: string) => useResource<ISpecies, Species>({ constructor: Species, id })