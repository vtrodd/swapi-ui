import { useCharacter } from '../../../../hooks'

export const CharacterCard = (props: { characterId: string }) => {
  const [character, loading] = useCharacter(props.characterId)
  return (
    <div>
      {loading
        ? 'Loading'
        : character.iterableProps.map(prop => {
          return <p>{prop[0]}: {prop[1]}</p>
        })
      }
    </div>
  )
}