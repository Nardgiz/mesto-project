/** добавляем функцию, которая отвечает за открытие попап, отвечающего за редактирование профиля */
import {
  nameInput,
  jobInput,
  profileName,
  profileJob,
} from "../utils/constants";

/**закрытие по esc и overlay */
const closeByEscape = (evt) => {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  }
};
/**закрытие по overlay */
const overlay = (evt) => {
  const activePopup = document.querySelector(".popup_opened");
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("close-item")
  ) {
    closePopup(activePopup);
  }
};

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
  popup.addEventListener("mousedown", overlay);
};

/** функция, которая выводит в попап, указанные имя и деятельность */
function addInfofromPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

//добавляем функцию для закрытия попапа
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
  popup.removeEventListener("mousedown", overlay);
};

export { openPopup, addInfofromPopup, closePopup };
