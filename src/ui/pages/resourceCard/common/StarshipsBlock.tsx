import { ResourceCardBlock, ResourceCardBlockProps } from "./ResourceCardBlock"

type StarshipsBlockProps = ResourceCardBlockProps & {
  starships?: string[]
}

export const StarshipsBlock = ({starships, title, ...props}: StarshipsBlockProps) => {
  return (
    <ResourceCardBlock
      title={title || 'Starships'}
    >
      {starships
        ? starships?.map((starship, index) => (
          <p key={index}><a href={`/resource/${starship?.substring(22) || ''}`}>{starship}</a></p>
        ))
        : <></>
    
    }
    </ResourceCardBlock>
  )
}