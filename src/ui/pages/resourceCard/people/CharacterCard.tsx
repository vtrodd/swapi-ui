import { useCharacter } from '../../../../hooks'
import { FilmsBlock, MetadataBlock, StarshipsBlock, VehiclesBlock } from '../common'
import { IdentityBlock, VisualInformationBlock } from './blocks'

import './CharacterCard.scss'

export const CharacterCard = (props: { characterId: string }) => {
  const [character, characterLoading] = useCharacter(props.characterId)

  if (characterLoading)
    return <>Loading</>
  else
    return (
      <>
        <IdentityBlock {...character.props} />
        <VisualInformationBlock {...character.props} />
        <FilmsBlock {...character.props} />
        <StarshipsBlock {...character.props} />
        <VehiclesBlock {...character.props} />
        <MetadataBlock {...character.metadata} />
      </>
    )
}