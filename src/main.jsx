import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { HeroesApp } from './HeroesApp'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <HeroesApp />
    </Router>
  </React.StrictMode>
)
