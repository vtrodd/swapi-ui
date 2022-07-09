import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'
import { ResourceType } from '../../../types'
import { FilmCard } from './films/FilmCard'
import { CharacterCard } from './people/CharacterCard'
import { PlanetCard } from './planets/PlanetCard'
import { SpeciesCard } from './species/SpeciesCard'
import { StarshipCard } from './starships/StarshipsCard'
import { VehicleCard } from './vehicles/VehicleCard'

type ResourceCardProps = {
  resourceType: ResourceType | undefined
  resourceId: string | undefined
}

export const ResourceCard = (props: ResourceCardProps) => {
  const { resourceType, resourceId } = props
  if (!resourceType || !resourceId) return <></>
  
  let card: JSX.Element
  switch (resourceType) {
    case 'films':
      card = <FilmCard filmId={resourceId} />
      break
    case 'people':
      card = <CharacterCard characterId={resourceId} />
      break
    case 'planets':
      card = <PlanetCard planetId={resourceId} />
      break
    case 'species':
      card = <SpeciesCard speciesId={resourceId} />
      break
    case 'starships':
      card = <StarshipCard starshipId={resourceId} />
      break
    case 'vehicles':
      card =  <VehicleCard vehicleId={resourceId} />
      break
  }

  return (
    <Container className='resource-card-container'>
      {card}
    </Container>
  )
}

export const ResourceCardRoute = () => {
  const { resourceType, resourceId } = useParams()
  return <ResourceCard resourceType={resourceType as ResourceType} resourceId={resourceId} />
}