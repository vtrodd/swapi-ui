import { Resource, IResource } from '.'

export interface IVehicle extends IResource {
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
  vehicle_class: string
  pilots: string[]
  films: string[]
}

export class Vehicle extends Resource<IVehicle> {
  constructor(props?: {[K in keyof IVehicle]: any}) {
    super(props)
    this.TYPE = 'vehicles'
  }
}