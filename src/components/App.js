import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm name="edit" title="Редактировать профиль">
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
      </PopupWithForm>
      <PopupWithForm name="add" title="Новое место">
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
      </PopupWithForm>
      <PopupWithForm name="avatar" title="Обновить аватар">
          <input
            type="url"
            name="avatar-link"
            id="avatar-link"
            className="popup__field popup__field_type_card-link"
            placeholder="Ссылка на аватар"
            required=""
          />
        <span className="popup__input-error popup__input-error_type_avatar avatar-link-error" /></PopupWithForm>
      <PopupWithForm name="del" title="Вы уверены?"></PopupWithForm>
      <ImagePopup />
    </div>
  );
}

export default App;
