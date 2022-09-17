function App() {
  return (
    <>
      <header className="header">
        <a href="#" className="header__logo" />
      </header>
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
      <footer className="footer">
        <p className="footer__copyright">© 2022 Mesto Russia</p>
      </footer>
      <div className="popup popup_type_edit">
        <form
          name="edit-profile"
          className="edit-profile popup__container"
          noValidate=""
        >
          <h2 className="popup__title">Редактировать профиль</h2>
          <input
            type="text"
            name="profile-name"
            id="profile-name"
            className="popup__field popup__field_type_name"
            placeholder="Имя"
            defaultValue="Жак-Ив Кусто"
            required=""
            minLength={2}
            maxLength={40}
          />
          <span className="popup__input-error profile-name-error" />
          <input
            type="text"
            name="profile-description"
            id="profile-description"
            className="popup__field popup__field_type_description"
            placeholder="Описание"
            required=""
            minLength={2}
            maxLength={200}
          />
          <span className="popup__input-error profile-description-error" />
          <button className="popup__button" type="submit">
            Сохранить
          </button>
          <button
            className="close-btn popup__close"
            type="button"
            aria-label="Закрыть"
            title="Закрыть"
          />
        </form>
      </div>
      <div className="popup popup_type_add">
        <form name="add-card" className="add-card popup__container" noValidate="">
          <h2 className="popup__title">Новое место</h2>
          <input
            type="text"
            name="card-name"
            id="card-name"
            className="popup__field popup__field_type_card-name"
            placeholder="Название"
            required=""
            minLength={2}
            maxLength={30}
          />
          <span className="popup__input-error card-name-error" />
          <input
            type="url"
            name="card-description"
            id="card-description"
            className="popup__field popup__field_type_card-link"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span className="popup__input-error card-description-error" />
          <button className="popup__button" type="submit">
            Сохранить
          </button>
          <button
            className="close-btn popup__close"
            type="button"
            aria-label="Закрыть"
            title="Закрыть"
          />
        </form>
      </div>
      <div className="popup popup_type_avatar">
        <form
          name="edit-avatar"
          className="edit-avatar popup__container"
          noValidate=""
        >
          <h2 className="popup__title popup__title_type_avatar">Обновить аватар</h2>
          <input
            type="url"
            name="avatar-link"
            id="avatar-link"
            className="popup__field popup__field_type_card-link"
            placeholder="Ссылка на аватар"
            required=""
          />
          <span className="popup__input-error popup__input-error_type_avatar avatar-link-error" />
          <button className="popup__button" type="submit">
            Сохранить
          </button>
          <button
            className="close-btn popup__close"
            type="button"
            aria-label="Закрыть"
            title="Закрыть"
          />
        </form>
      </div>
      <div className="popup popup_type_img">
        <figure className="img-popup">
          <img
            src="<%=require('./images/dombay.png')%>"
            alt="Домбай"
            className="img-popup__image"
          />
          <figcaption className="img-popup__title" />
          <button
            className="close-btn popup__close"
            type="button"
            aria-label="Закрыть"
            title="Закрыть"
          />
        </figure>
      </div>
      <div className="popup popup_type_del">
        <form name="del-card" className="del-card popup__container">
          <h2 className="popup__title popup__title_type_del">Вы уверены?</h2>
          <button className="confirm-btn popup__button" type="submit">
            Да
          </button>
          <button
            className="close-btn popup__close"
            type="button"
            aria-label="Закрыть"
            title="Закрыть"
          />
        </form>
      </div>
      <template id="card-template" />
    </>
  );
}

export default App;
