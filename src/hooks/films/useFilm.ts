import { Film, IFilm } from "../../types";
import { useResource } from "../useResource";

export const useFilm = (id: string) => useResource<IFilm, Film>({ constructor: Film, id })