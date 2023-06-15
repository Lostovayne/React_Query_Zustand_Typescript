import { Repository } from '../hooks/types'
import { useFavoriteReposStore } from '../store/favoriteRepos'

type CardProps = {
  repository: Repository
  isFavorite: boolean
}

const Card = ({ repository, isFavorite }: CardProps) => {
  const addFavoriteRepo = useFavoriteReposStore((state) => state.addFavoriteRepo)
  const removeFavoriteRepo = useFavoriteReposStore((state) => state.removeFavoriteRepo)

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id)
    } else {
      addFavoriteRepo(repository.id)
    }
  }

  return (
    <li>
      {repository.name} <button onClick={toggleFavorite}>{isFavorite ? 'dislike' : 'like'}</button>
    </li>
  )
}
export default Card
