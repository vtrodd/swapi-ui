import { ResourceType } from "./ResourceType"

export interface IResource {
  created: string
  edited: string
  url: string
}

export class Resource<T = IResource> {
  metadata: IResource
  props: T
  protected TYPE: ResourceType = 'films'

  constructor(props?: {[Key in keyof IResource]: any}) {
    const { created, edited, url, ...otherProps } = props || {}
    this.metadata = { created, edited, url }
    this.props = otherProps as T
  }

  get type() {
    return this.TYPE
  }

  get iterableProps() {
    return Object.entries({...this.props})
  }
}