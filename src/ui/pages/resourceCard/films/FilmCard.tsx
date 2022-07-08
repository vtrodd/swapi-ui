import { useFilm } from "../../../../hooks"

export const FilmCard = (props: { filmId: string }) => {
  const [film, loading] = useFilm(props.filmId)
  return (
    <div>
      {loading
        ? 'Loading'
        : film.iterableProps.map(prop => {
          return <p>{prop[0]}: {Array.isArray(prop[1]) ? 'Array' : prop[1]}</p>
        })
      }
    </div>
  )
}