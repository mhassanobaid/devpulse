import {
  useEffect,
  useState,
} from "react";
import { checkHealth } from "../api/health"
import { getRepositories } from "../api/repositories"
import { getStats } from "../api/stats";
import { getActivities } from "../api/activities";

import DashboardLayout from
"../components/layout/DashboardLayout";


function Dashboard() {

  const [repositories, setRepositories] = useState([]);
  const [stats, setStats] = useState(null);
  const [activities, setActivities] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{

    async function loadDashboard(){

      try{

        const [repositoriesData, statsData, activitiesData] = await Promise.all([ getRepositories(), getStats(), getActivities() ]);

        setRepositories(repositoriesData);
        setStats(statsData);
        setActivities(activitiesData);

      } catch(err) {
        setError(err.message);
      } finally{
        setLoading(false);
      }

    }

    loadDashboard();''

  }, [])

  // if(loading) {
  //   return <h2>Loading Dashboard</h2>
  // }

  // if(error) {
  //   return <h2>Loading {error}</h2>
  // }

  return ( 
    <DashboardLayout>
      <main
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          py-4
          sm:px-6
          sm:py-6
          lg:px-8
          lg:py-8
          space-y-8
        "
      >
        {/* Stats */}
        <section>
          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="font-semibold mb-4">
              Statistics
            </h2>

            <pre>
              {JSON.stringify(stats, null, 2)}
            </pre>

          </div>
        </section>

        {/* Bottom Section */}
        <section
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-3
            lg:gap-8
          "
        >
          <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="font-semibold mb-4">
              Repositories
            </h2>

            {repositories.map(repo => (

              <div key={repo.id}>
                {repo.name}
              </div>

            ))}

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="font-semibold mb-4">
              Activities
            </h2>

            {activities.map(activity => (

              <div
                key={activity.id}
                className="mb-4 border-b pb-2"
              >

                <div>{activity.repository}</div>

                <div>{activity.description}</div>

              </div>

            ))}

          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}

export default Dashboard;
