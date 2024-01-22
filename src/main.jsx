import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GeneralInformation from './components/GeneralInformation.jsx'
import EducationalExperience from './components/EducationalExperience.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GeneralInformation />
    <EducationalExperience/>
  </React.StrictMode>,
)
