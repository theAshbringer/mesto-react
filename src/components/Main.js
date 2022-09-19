import React, { useState, useEffect } from 'react'
import api from '../utils/api';

const Main = ({ onEditProfile, onAddPlace, onEditAvatar }) => {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.loadUserInfo().then(({ name, about, avatar, _id }) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    });
    api.getInitialCards().then((cards) => {
      setCards(cards);
    })
  });

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar-container"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}
        >
        </div>
        <div className="profile__info">
          <div className="profile__name-string">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={onEditProfile}
              className="edit-btn profile__edit-btn"
              type="button"
              aria-label="Редактировать профиль"
              title="Редактировать профиль"
            />
          </div>
          <p className="profile__description">{userDescription}</p>
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
            return <li className="card" key={_id}>
              <article className="card__container">
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
          })}
        </ul>
      </section>
    </main >
  )
}

export default Main