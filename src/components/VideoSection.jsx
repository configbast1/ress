import React from 'react'
import './VideoSection.css'

function VideoSection() {
  return (
    <section className="video">
      <h2 className="video__title">🎬 Відео-рецепт</h2>
      <p className="video__desc">Дивіться покроковий відео-рецепт борщу від Євгена Клопотенка</p>
      <div className="video__wrapper">
        <iframe
          className="video__frame"
          src="https://www.youtube.com/embed/P9-QqBiSLiA"
          title="Борщ Рецепт"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="video__footer">
        <p>Смачного! Нехай ваш борщ буде найсмачнішим! 🍲</p>
      </div>
    </section>
  )
}

export default VideoSection
