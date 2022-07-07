import { Resource, IResource } from ".";

export interface IPlanet extends IResource {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[]
  films: string[]
}

export class Planet extends Resource<IPlanet> {
  constructor(props?: {[K in keyof IPlanet]: any}) {
    super(props)
    this.TYPE = 'planets'
  }
}