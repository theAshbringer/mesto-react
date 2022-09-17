import React from 'react'

const Main = () => {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
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
              className="edit-btn profile__edit-btn"
              type="button"
              aria-label="Редактировать профиль"
              title="Редактировать профиль"
            />
          </div>
          <p className="profile__description">Описание</p>
        </div>
        <button
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