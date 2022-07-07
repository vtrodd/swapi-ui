import { ISpecies, Species } from "../../types"
import { useResource } from "../useSingleResource"

const useSpecies = (id: string) => useResource<ISpecies, Species>({ constructor: Species, id })