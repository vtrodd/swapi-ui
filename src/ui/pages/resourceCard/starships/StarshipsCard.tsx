import { useStarship } from "../../../../hooks"

export const StarshipCard = (props: { starshipId: string }) => {
  const [starship, loading] = useStarship(props.starshipId)
  return (
    <div>
      {loading
        ? 'Loading'
        : starship.iterableProps.map(prop => {
          return <p>{prop[0]}: {prop[1]}</p>
        })
      }
    </div>
  )
}