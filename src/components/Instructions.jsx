import React from 'react'
import './Instructions.css'

const steps = [
  {
    num: 1,
    title: 'Варимо бульйон',
    text: 'М\'ясо залити холодною водою (2.5 л), довести до кипіння, зняти піну. Додати цибулину, лавровий лист, чорний перець. Варити на малому вогні 1.5 години до м\'якості м\'яса.',
  },
  {
    num: 2,
    title: 'Тушкуємо буряк',
    text: 'Буряк натерти на великій тертці. На сковороді розігріти олію, додати буряк, томатну пасту та 1 ст. л. оцту. Тушкувати 15 хвилин на середньому вогні. Оцет зберігає насичений червоний колір.',
  },
  {
    num: 3,
    title: 'Смажимо зажарку',
    text: 'Моркву натерти, цибулю нарізати кубиками. Обсмажити цибулю до золотистості, додати моркву, смажити ще 5 хвилин.',
  },
  {
    num: 4,
    title: 'Збираємо борщ',
    text: 'М\'ясо дістати, відокремити від кістки, нарізати. В бульйон додати картоплю, варити 10 хвилин. Додати капусту, квасолю, буряк, зажарку та м\'ясо.',
  },
  {
    num: 5,
    title: 'Фінальний штрих',
    text: 'Варити ще 10-15 хвилин. За 2 хвилини до готовності додати видавлений часник і зелень. Дати настоятися під кришкою 15 хвилин. Подавати зі сметаною та пампушками.',
  },
]

function Instructions() {
  return (
    <section className="instructions">
      <h2 className="instructions__title">👨‍🍳 Приготування</h2>
      <div className="instructions__list">
        {steps.map(step => (
          <div key={step.num} className="instructions__step">
            <div className="instructions__num">{step.num}</div>
            <div className="instructions__content">
              <h3 className="instructions__step-title">{step.title}</h3>
              <p className="instructions__step-text">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Instructions
