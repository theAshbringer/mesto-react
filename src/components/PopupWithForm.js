import React from 'react'

function PopupWithForm({ children, name, title, isOpen, onClose }) {
  const popupClass = `popup popup_type_${name} ${isOpen && 'popup_opened'}`

  return (
    <div className={popupClass} onClick={onClose}>
      <form
        onClick={(e) => { e.stopPropagation() }}
        name={name}
        className="popup__container"
        noValidate=""
      >
        <h2 className="popup__title">{title}</h2>
        {children}
        <button className="popup__button" type="submit">
          {name !== "del" ? "Сохранить" : "Да"}
        </button>
        <button
          onClick={onClose}
          className="close-btn popup__close"
          type="button"
          aria-label="Закрыть"
          title="Закрыть"
        />
      </form>
    </div>
  )
}

export default PopupWithForm