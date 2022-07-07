import { useEffect, useState } from 'react';
import { Resource, ResourceType } from '../types';
import { SWAPI_URL } from '../utils/consts';

type ResourceOptions = {
  constructor: new (...args: any) => any
  id?: string | number
  wookiee?: boolean
}

type FetchResourceOptions = {
  type?: ResourceType
  id?: string | number
  wookiee?: boolean
}

const fetchResource = async <T>(options: FetchResourceOptions) => {
  const { type, id, wookiee } = options
  let url = SWAPI_URL
  if (type) url += `/${type}`
  if (type && id) url += `/${Number(id).toString()}`
  if (wookiee) url += '?format=wookiee'

  const response = await fetch(url)
  const json = await response.json()
  return json as T
}

export const useResource = <I, T extends Resource>(options: ResourceOptions): [T, boolean] => {
  const { constructor, id, wookiee } = options;
  const [loading, setLoading] = useState(false);
  const [resource, setResource] = useState<T>(new constructor());
  const type = resource.type
  useEffect(() => {
    let mounted = true;
    mounted && setLoading(true);

    fetchResource<I>({ type, id, wookiee })
      .then(resourceJson => new constructor(resourceJson))
      .then(mounted && setResource)
      .catch(() => mounted && setResource(new constructor()))
      .finally(() => mounted && setLoading(false));

    return () => { mounted = false };
  }, [constructor, type, id, wookiee]);

  return [resource, loading];
}