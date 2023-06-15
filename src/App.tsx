import Card from './components/Card'
import { useFetchRepositories } from './hooks/useRepos'
import { useFavoriteReposStore } from './store/favoriteRepos'

const App = () => {
  const { data, isLoading } = useFetchRepositories()
  const { favoriteReposIds } = useFavoriteReposStore()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <ul>
        {data?.map((repo) => (
          <Card key={repo.id} repository={repo} isFavorite={favoriteReposIds.includes(repo.id)} />
        ))}
      </ul>
    </div>
  )
}
export default App
