import { Resource, IResource } from '.'

export interface IFilm extends IResource {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
}

export class Film extends Resource<IFilm> {
  constructor(props?: {[K in keyof IFilm]: any}) {
    super(props)
    this.TYPE = 'films'
  }
}