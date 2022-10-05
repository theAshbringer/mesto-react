import React, { useState, useEffect, useContext } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import Card from './Card'

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
  const [cards, setCards] = useState([]);
  const { name, about: description, avatar } = useContext(CurrentUserContext);

  useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log('Не удалось инициализировать карточки: ', err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar-container"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${avatar})` }}
        >
        </div>
        <div className="profile__info">
          <div className="profile__name-string">
            <h1 className="profile__name">{name}</h1>
            <button
              onClick={onEditProfile}
              className="edit-btn profile__edit-btn"
              type="button"
              aria-label="Редактировать профиль"
              title="Редактировать профиль"
            />
          </div>
          <p className="profile__description">{description}</p>
        </div>
        <button
          onClick={onAddPlace}
          className="add-btn profile__add-btn"
          type="button"
          aria-label="Добавить карточку"
          title="Добавить карточку"
        />
      </section>
      <section>
        <ul className="cards">
          {cards.map(({ likes, name, link, owner, _id }) => {
            return (
              <Card
                likes={likes}
                name={name}
                link={link}
                owner={owner}
                onCardClick={onCardClick}
                key={_id}
              />)
          })}
        </ul>
      </section>
    </main >
  )
}

export default Main