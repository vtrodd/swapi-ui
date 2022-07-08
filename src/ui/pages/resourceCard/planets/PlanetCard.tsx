import { usePlanet } from "../../../../hooks"

export const PlanetCard = (props: { planetId: string }) => {
  const [planet, loading] = usePlanet(props.planetId)
  return (
    <div>
      {loading
        ? 'Loading'
        : planet.iterableProps.map(prop => {
          return <p>{prop[0]}: {prop[1]}</p>
        })
      }
    </div>
  )
}