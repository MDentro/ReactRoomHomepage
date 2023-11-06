import React from 'react'

import './App.css'
import SwiperElement from './components/swiperElement/SwiperElement'
import About from './components/about/About'
import Navigation from './components/navigation/Navigation'

function App() {
  return (
    <div className="page">
      <Navigation />
      <SwiperElement />
      <About />
    </div>
  )
}

export default App
