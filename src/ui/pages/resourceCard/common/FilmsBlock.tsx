import { ResourceCardBlock, ResourceCardBlockProps } from "./ResourceCardBlock"

type FilmsBlockProps = ResourceCardBlockProps & {
  films: string[]
}

export const FilmsBlock = ({films, title, ...props}: FilmsBlockProps) => {
  return (
    <ResourceCardBlock
      {...props}
      title={title || "Films"}
    >
      {films
        ? films?.map((film, index) => (
          <p key={index}><a href={`/resource/${film?.substring(22) || ''}`}>{film}</a></p>
        ))
        : <></>
      }
    </ResourceCardBlock>
  )
}