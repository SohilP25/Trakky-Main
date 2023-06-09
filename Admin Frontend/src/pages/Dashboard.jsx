import React from 'react'
import { SpaData } from '../data/mockData.js'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard__container'>
      <div className="spa_data_labels">
        <div className="data__container">
          <p>No of Spa</p>
          <h1>{SpaData.length}</h1>
        </div>

        <div className="data__container">
          <p>No of Daily Logs</p>
          <h1>10</h1>
        </div>

        <div className="data__container">
          <p>No of Weekly Logs</p>
          <h1>70</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard