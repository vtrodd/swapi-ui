import { ResourceCardBlock, ResourceCardBlockProps } from '../../common'

type IdentityBlockProps = ResourceCardBlockProps & {
  name: string
  birth_year: string
  gender: string
  homeworld: string
  species: string[]
}

export const IdentityBlock = ({name, birth_year, gender, homeworld, species, ...props}: IdentityBlockProps) => {
  return (
    <ResourceCardBlock
      {...props}
      title={props.title || 'Identity'}
    >
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <p>Birth year: {birth_year}</p>
      <p>Homeworld: <a href={`/resource/${homeworld?.substring(22) || ''}`}>{homeworld}</a></p>
      <p>Species: {species?.length ? species : 'Unknown'}</p>
    </ResourceCardBlock>
  )
}