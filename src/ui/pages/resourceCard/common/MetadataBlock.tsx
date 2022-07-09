import { ResourceCardBlock, ResourceCardBlockProps } from "./ResourceCardBlock"

type MetadataBlockProps = ResourceCardBlockProps & {
  created: string
  edited: string
  url: string
}

export const MetadataBlock = ({created, edited, url, title, ...props}: MetadataBlockProps) => {
  return (
    <ResourceCardBlock
      {...props}
      title={title || 'Metadata'}
    >
      <p>Created: {created}</p>
      <p>Edited: {edited}</p>
      <p>URL: <a href={url}>{url}</a></p>
    </ResourceCardBlock>
  )
}