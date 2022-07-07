import { Resource, IResource } from '.'


export interface IStarship extends IResource {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: string[]
  films: string[]
}

export class Starship extends Resource<IStarship> {
  constructor(props?: {[K in keyof IStarship]: any}) {
    super(props)
    this.TYPE = 'starships'
  }
}