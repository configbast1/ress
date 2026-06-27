import React from 'react'
import RecipeHeader from './components/RecipeHeader'
import RecipeInfo from './components/RecipeInfo'
import Ingredients from './components/Ingredients'
import Instructions from './components/Instructions'
import VideoSection from './components/VideoSection'
import './index.css'

function App() {
  return (
    <div className="app">
      <RecipeHeader />
      <div className="container">
        <RecipeInfo />
        <Ingredients />
        <Instructions />
        <VideoSection />
      </div>
    </div>
  )
}

export default App
