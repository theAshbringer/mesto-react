import React from 'react'

function ImagePopup({ isOpen, card, onClose }) {
  const className = `popup popup_type_img ${isOpen && 'popup_opened'}`;

  return (
    <div className={className}>
      <figure className="img-popup">
        <img
          src={card.link}
          alt={card.name}
          className="img-popup__image"
        />
        <figcaption className="img-popup__title">{card.name}</figcaption>
        <button
          onClick={onClose}
          className="close-btn popup__close"
          type="button"
          aria-label="Закрыть"
          title="Закрыть"
        />
      </figure>
    </div>
  )
}

export default ImagePopup