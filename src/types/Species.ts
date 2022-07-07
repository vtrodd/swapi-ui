import { Resource, IResource } from ".";

export interface ISpecies extends IResource {
  name: string
  classification: string
  designation: string
  average_height: string
  skin_colors: string
  hair_colors: string
  eye_colors: string
  average_lifespan: string
  homeworld: string
  language: string
  people: string[]
  films: string[]
  starships: []
}

export class Species extends Resource<ISpecies> {
  constructor(props?: {[K in keyof ISpecies]: any}) {
    super(props)
    this.TYPE = 'species'
  }
}