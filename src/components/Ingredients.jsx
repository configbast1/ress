import React, { useState } from 'react'
import './Ingredients.css'

const ingredientsList = [
  { id: 1, name: 'Яловичина (на кістці)', amount: '500 г' },
  { id: 2, name: 'Буряк', amount: '2 шт (великих)' },
  { id: 3, name: 'Капуста білокачанна', amount: '300 г' },
  { id: 4, name: 'Картопля', amount: '3 шт' },
  { id: 5, name: 'Морква', amount: '1 шт' },
  { id: 6, name: 'Цибуля', amount: '2 шт' },
  { id: 7, name: 'Томатна паста', amount: '2 ст. л.' },
  { id: 8, name: 'Квасоля (варена)', amount: '200 г' },
  { id: 9, name: 'Часник', amount: '3 зубчики' },
  { id: 10, name: 'Оцет (9%)', amount: '1 ст. л.' },
  { id: 11, name: 'Лавровий лист', amount: '2 шт' },
  { id: 12, name: 'Сметана для подачі', amount: 'за смаком' },
]

function Ingredients() {
  const [checked, setChecked] = useState([])

  const toggle = (id) => {
    setChecked(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const allDone = checked.length === ingredientsList.length

  return (
    <section className="ingredients">
      <h2 className="ingredients__title">🛒 Інгредієнти</h2>
      {allDone && (
        <div className="ingredients__ready">✅ Всі інгредієнти є — можна готувати!</div>
      )}
      <ul className="ingredients__list">
        {ingredientsList.map(item => (
          <li
            key={item.id}
            className={`ingredients__item ${checked.includes(item.id) ? 'ingredients__item--checked' : ''}`}
            onClick={() => toggle(item.id)}
          >
            <span className="ingredients__checkbox">
              {checked.includes(item.id) ? '✓' : ''}
            </span>
            <span className="ingredients__name">{item.name}</span>
            <span className="ingredients__amount">{item.amount}</span>
          </li>
        ))}
      </ul>
      <p className="ingredients__hint">* Натисніть на інгредієнт, щоб відмітити його наявність</p>
    </section>
  )
}

export default Ingredients
