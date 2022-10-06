import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import api from '../utils/api';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({})
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([]);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log('Не удалось обработать лайк'));
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id,)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch(err => console.log('Не удалось удалить карточку'));
  }

  useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log('Не удалось инициализировать карточки: ', err);
      });
  }, []);

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

  const handleUpdateUser = (user) => {
    api.updateUserInfo(user)
      .then((newUser) => {
        setCurrentUser(newUser)
        closeAllPopups();
      })
      .catch((err) => {
        console.log('Не удалось обновить профиль: ', err);
      })
  }

  const handleUpdateAvatar = (avatar) => {
    api.updateAvatar(avatar)
      .then((newUser) => {
        setCurrentUser({ ...currentUser, avatar: newUser.avatar })
        closeAllPopups();
      })
      .catch((err) => {
        console.log('Не удалось обновить аватар: ', err);
      })
  }

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
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfileOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
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
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
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
