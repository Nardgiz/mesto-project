/** добавляем функцию, которая отвечает за открытие попап, отвечающего за редактирование профиля */
import { nameInput, jobInput, profileName, profileJob } from "../utils/constants";
const openPopup = (popup) => {
  popup.classList.add("popup_opened");
};

/** функция, которая выводит в попап, указанные имя и деятельность */
function addInfofromPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

/** добавляем функцию для закрытия попапа */
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
};

export { openPopup, addInfofromPopup, closePopup };
