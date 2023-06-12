import React from 'react'
import { SpaData, CitiesData, InquiryData } from '../data/mockData.js'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard__container'>
      <div className="spa_data_labels">
        <div className="data__container">
          <p>No of Spas</p>
          <h1>{SpaData.length}</h1>
        </div>

        <div className="data__container">
          <p>No of Cities Covered</p>
          <h1>{CitiesData.length}</h1>
        </div>

        <div className="data__container">
          <p>Inquiries</p>
          <h1>{InquiryData.length}</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard