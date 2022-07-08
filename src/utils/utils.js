import { closePopup } from "../components/modal.js";

const closeByEscape = (evt) => {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  }
};

const overlay = (evt) => {
  const activePopup = document.querySelector('.popup_opened');
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("close-item")
  ) {
    closePopup(activePopup);
  }
};
/** функция, которая делает кнопку неактивной */
const buttonDisable = (button) => {
    button.classList.add('form__button_invalid');
    button.disabled = "disabled";
  };

export { buttonDisable, closeByEscape, overlay };