import { useSpecies } from "../../../../hooks"

export const SpeciesCard = (props: { speciesId: string }) => {
  const [species, loading] = useSpecies(props.speciesId)
  return (
    <div>
      {loading
        ? 'Loading'
        : species.iterableProps.map(prop => {
          return <p>{prop[0]}: {prop[1]}</p>
        })
      }
    </div>
  )
}