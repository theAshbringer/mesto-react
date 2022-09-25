import React, { useState, useEffect } from 'react'
import api from '../utils/api';
import Card from './Card'

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.loadUserInfo()
      .then(({ name, about, avatar, _id }) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
      })
      .catch((err) => {
        console.log('Не удалось загрузить данные профиля: ', err);
      });
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
              <Card
                likes={likes}
                name={name}
                link={link}
                owner={owner}
                onCardClick={onCardClick}
              />
            </li>
          })}
        </ul>
      </section>
    </main >
  )
}

export default Main