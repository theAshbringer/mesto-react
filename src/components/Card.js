import React from 'react'

function Card({ likes, name, link, owner, onCardClick }) {
  return (
    <li className="card" >
      <article className="card__container" onClick={() => onCardClick({ name, link })}>
        <h2 className="card__title">{name}</h2>
        <button className="card__onclick" type="button">
          <img
            src={link}
            alt={name}
            className="card__photo"
          />
        </button>
        <div className="card__like">
          <button
            className="like-btn card__like-btn"
            type="button"
            aria-label="Нравится"
            title="Нравится"
          />
          <p className="card__likes-number">{likes.length}</p>
        </div>
        <button
          className="delete-btn card__delete"
          type="button"
          aria-label="Удалить карточку"
          title="Удалить карточку"
        />
      </article>
    </li>
  )
}

export default Card