import React from 'react'
import "./Card.css"

function Card({ title, image }) {
  return (
    <div className="card">
      <div className="img-box">
        <img src={image} alt={title} />
      </div>
      <h1>{title}</h1>
    </div>
  )
}

export default Card