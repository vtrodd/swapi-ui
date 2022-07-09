import { ResourceCardBlock, ResourceCardBlockProps } from '../../common'

type VisualInformationBlockProps = ResourceCardBlockProps & {
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
}

export const VisualInformationBlock = ({height, mass, hair_color, skin_color, eye_color, ...props}: VisualInformationBlockProps) => {
  return (
    <ResourceCardBlock
      {...props}
      title={props.title || 'Visual Information'}
    >
      <p>Height: {height}</p>
      <p>Mass: {mass} kg</p>
      <p>Hair color: {hair_color}</p>
      <p>Skin color: {skin_color}</p>
      <p>Eye color: {eye_color}</p>
    </ResourceCardBlock>
  )
}