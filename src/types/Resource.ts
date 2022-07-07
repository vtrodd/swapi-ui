import { ResourceType } from "./ResourceType"

export interface IResource {
  created: string
  edited: string
  url: string
}

export class Resource<T = IResource> implements IResource {
  props: T
  created = ''
  edited = ''
  url = ''
  protected TYPE: ResourceType = 'films'

  constructor(props?: {[Key in keyof IResource]: any}) {
    const { created, edited, url, ...otherProps } = props || {}
    Object.assign(this, { created, edited, url })
    this.props = otherProps as T
  }

  get type() {
    return this.TYPE
  }
}