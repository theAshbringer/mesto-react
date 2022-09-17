import React from 'react'

const Main = ({ onEditProfile, onAddPlace, onEditAvatar }) => {

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img
            src="<%=require('./images/avatar.png')%>"
            alt="Аватар"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <div className="profile__name-string">
            <h1 className="profile__name">Имя</h1>
            <button
              onClick={onEditProfile}
              className="edit-btn profile__edit-btn"
              type="button"
              aria-label="Редактировать профиль"
              title="Редактировать профиль"
            />
          </div>
          <p className="profile__description">Описание</p>
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