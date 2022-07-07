import { Character, ICharacter } from "../../types";
import { useResource } from "../useSingleResource";

export const useCharacter = (id: string) => useResource<ICharacter, Character>({ constructor: Character, id })