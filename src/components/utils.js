import { closePopup } from './modal.js'

export const closeByEscape = (evt) => {
    if (evt.key === 'Escape') {
      const activePopup = document.querySelector('.popup_opened');
      if (activePopup) {
        closePopup(activePopup);
      } 
    }  
}

export const overlay = (evt) => {
  const activePopup = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup')) {
    closePopup(activePopup)
  }
}
