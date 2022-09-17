import React from 'react'

function PopupWithForm({ children, name, title }) {
  return (
    <div className={`popup popup_type_${name}`}>
      <form
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