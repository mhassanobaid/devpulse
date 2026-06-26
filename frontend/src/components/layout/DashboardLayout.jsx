import { useState, useEffect, Children } from 'react'
import { checkHealth } from "../../api/health"
import { getRepositories } from "../../api/repositories"
import "../../App.css";
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function DashboardLayout({ children }) {
  const [active, setActive] = useState("Dashboard");

  const renderRepos = ()=>{
    return repos.map(repo => (
      <div key={repo.id}>
        {repo.name}
      </div>
    ))
  }

  return (
    <>
      <div className="flex h-screen bg-slate-100">
        <Sidebar
          active={active}
          setActive={setActive} 
        />

        <div className="flex-1 flex flex-col min-w-0">

          <Navbar
            active={active} 
          />

          {children}     
        </div>
      </div>
    </>
  )
}

export default DashboardLayout;