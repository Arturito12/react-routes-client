import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Main" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> This is profile</div>
          <div id="username"> {user}</div>
          <nav>
            <Link to="/dashboard/main"> Go to Main</Link>
            <Link to="/dashboard">Go to Root</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
