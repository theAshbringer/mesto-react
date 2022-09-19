import React, { useState, useEffect } from 'react'
import api from '../utils/api';

const Main = ({ onEditProfile, onAddPlace, onEditAvatar }) => {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('')

  useEffect(() => {
    api.loadUserInfo().then(({ name, about, avatar }) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    });
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
        <ul className="cards" />
      </section>
    </main>
  )
}

export default Main