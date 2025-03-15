import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import RestrictionWindowSize from './components/RestrictionWindowSize/RestrictionWindowSize'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RestrictionWindowSize>
      <App />
    </RestrictionWindowSize>
  </React.StrictMode>
)
