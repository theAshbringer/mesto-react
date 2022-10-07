import React, { useState } from 'react'
import PopupWithForm from './PopupWithForm'

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name,
      link
    });
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        value={link}
        onChange={(e) => setLink(e.target.value)}
        type="url"
        name="card-description"
        id="card-description"
        className="popup__field popup__field_type_card-link"
        placeholder="Ссылка на картинку"
        required=""
      />
      <span className="popup__input-error card-description-error" />
    </PopupWithForm>
  )
}

export default AddPlacePopup