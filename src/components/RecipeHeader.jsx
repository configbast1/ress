import React from 'react'
import './RecipeHeader.css'

function RecipeHeader() {
  return (
    <header className="recipe-header">
      <img
        className="recipe-header__image"
        src="https://images.unsplash.com/photo-1547592180-85f173990554?w=860&q=80"
        alt="Борщ Український"
      />
      <div className="recipe-header__overlay">
        <span className="recipe-header__category">🇺🇦 Українська кухня</span>
        <h1 className="recipe-header__title">Борщ Український</h1>
        <p className="recipe-header__subtitle">
          Найсмачніша страва, яка зігріває душу і серце
        </p>
      </div>
    </header>
  )
}

export default RecipeHeader
