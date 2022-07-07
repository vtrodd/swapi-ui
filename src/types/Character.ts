import { Resource, IResource } from '.'

export interface ICharacter extends IResource {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
}

export class Character extends Resource<ICharacter> {
  constructor(props?: {[K in keyof ICharacter]: any}) {
    super(props)
    this.TYPE = 'people'
  }
}