import { useState, useEffect } from 'react'
import { checkHealth } from "./api/health"
import { getRepositories } from "./api/repositories"
import './App.css'

function App() {
  const [healthy, setHealthy] = useState(false)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        const data = await checkHealth()

        if (data.status === "ok") {
          setHealthy(true);
        }
      } catch (error) {
        console.error("Health check failed:", error)
      }
    }

    load();
}, []);

  useEffect(() => {
    async function load() {
      try {
        const data = await getRepositories()

        setRepos(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    load();
}, []);

  const renderRepos = ()=>{
    return repos.map(repo => (
      <div key={repo.id}>
        {repo.name}
      </div>
    ))
  }

  return (
    <>
      <div>{healthy ? "Backend Healthy" : "CHECKING ..."}</div>

      {loading && <div>Loading Repos. ...</div>}

      {error && <div>Error: {error}</div>}

      {!loading && !error && repos.length === 0 && (
        <div>No Repos. Found</div>
      )}

      {!loading && !error && repos.length > 0 && (
        <div>
          <div>Check out repos. below</div>
          {renderRepos()}
        </div>
      )}

    </>
  )
}

export default App
