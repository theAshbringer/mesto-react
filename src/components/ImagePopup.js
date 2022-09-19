import React from 'react'

function ImagePopup() {
  return (
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
  )
}

export default ImagePopup