import React, { useState } from 'react'
import './RecipeInfo.css'

const BASE_PORTIONS = 6

function RecipeInfo() {
  const [portions, setPortions] = useState(BASE_PORTIONS)

  return (
    <section className="recipe-info">
      <div className="recipe-info__stats">
        <div className="recipe-info__stat">
          <span className="recipe-info__icon">⏱</span>
          <span className="recipe-info__label">Підготовка</span>
          <span className="recipe-info__value">20 хв</span>
        </div>
        <div className="recipe-info__stat">
          <span className="recipe-info__icon">🍳</span>
          <span className="recipe-info__label">Приготування</span>
          <span className="recipe-info__value">90 хв</span>
        </div>
        <div className="recipe-info__stat">
          <span className="recipe-info__icon">📊</span>
          <span className="recipe-info__label">Складність</span>
          <span className="recipe-info__value">Середня</span>
        </div>
        <div className="recipe-info__stat">
          <span className="recipe-info__icon">🔥</span>
          <span className="recipe-info__label">Калорії</span>
          <span className="recipe-info__value">~280 ккал</span>
        </div>
      </div>

      <div className="recipe-info__portions">
        <span className="recipe-info__portions-label">Кількість порцій:</span>
        <button
          className="recipe-info__btn"
          onClick={() => setPortions(p => Math.max(1, p - 1))}
        >−</button>
        <span className={`recipe-info__portions-count ${portions > BASE_PORTIONS ? 'recipe-info__portions-count--big' : ''}`}>
          {portions}
        </span>
        <button
          className="recipe-info__btn"
          onClick={() => setPortions(p => p + 1)}
        >+</button>
        {portions > BASE_PORTIONS && (
          <span className="recipe-info__tip">Велика компанія! 🎉</span>
        )}
      </div>

      <div className="recipe-info__about">
        <p>Борщ — це не просто суп. Це символ України, страва, яку готували ще наші прабабусі. Кожна родина має свій секретний рецепт, який передається з покоління в покоління.</p>
        <p>Справжній борщ повинен бути насиченого темно-червоного кольору, мати яскравий смак буряка з легкою кислинкою та аромат свіжої зелені. Подається зі сметаною та пампушками.</p>
        <p>Цей рецепт — класичний український борщ на м'ясному бульйоні з квасолею. Він ситний, ароматний і стає ще смачнішим на другий день після приготування.</p>
        <p>Секрет ідеального борщу — це правильно підготовлений буряк. Його потрібно тушкувати окремо з додаванням оцту або лимонного соку, щоб він зберіг свій колір і не розварився у бульйоні.</p>
      </div>
    </section>
  )
}

export default RecipeInfo
