/**закрытие по esc и overlay */
import { closePopup } from "../components/modal";

const closeByEscape = (evt) => {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  }
};

const overlay = (evt) => {
  const activePopup = document.querySelector(".popup_opened");
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("close-item")
  ) {
    closePopup(activePopup);
  }
};

export { closeByEscape, overlay };
