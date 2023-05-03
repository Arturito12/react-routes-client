import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Dash" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> Dashboard</div>
          <nav>
            <Link to="/dashboard/profile/4036f6c4-589f-4a18-b694-5f885be9e11f"> Go to profile</Link>
            <Link to="/dashboard/main">Go to Main</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
