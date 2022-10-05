import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import api from '../utils/api';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({})
  const [currentUser, setCurrentUser] = useState({})

  const handleAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfileOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card)
    setIsImagePopupOpen(true)
  };

  const closeAllPopups = () => {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  };

  useEffect(() => {
    api.loadUserInfo()
      .then((user) => {
        setCurrentUser(user)
      })
      .catch((err) => {
        console.log('Не удалось загрузить данные профиля: ', err);
      })
  }, [])

  useEffect(() => {
    const handleCloseEscKey = (e) => {
      const escapeKey = 'Escape';
      if (e.key === escapeKey) {
        closeAllPopups();
      }
    };

    document.addEventListener('keydown', handleCloseEscKey)
    return () => {
      document.removeEventListener('keydown', handleCloseEscKey)
    }
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          isOpen={isEditProfileOpen}
          onClose={closeAllPopups}
        >
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
        <PopupWithForm
          name="add"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
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
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
          <input
            type="url"
            name="avatar-link"
            id="avatar-link"
            className="popup__field popup__field_type_card-link"
            placeholder="Ссылка на аватар"
            required=""
          />
          <span className="popup__input-error popup__input-error_type_avatar avatar-link-error" /></PopupWithForm>
        <PopupWithForm name="del" title="Вы уверены?" onClose={closeAllPopups}></PopupWithForm>
        <ImagePopup
          isOpen={isImagePopupOpen}
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
