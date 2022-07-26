/** добавляем функцию, которая отвечает за открытие попап, отвечающего за редактирование профиля */
import {
  nameInput,
  jobInput,
  profileName,
  profileJob,
} from "../utils/constants";



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



/** функция, которая выводит в попап, указанные имя и деятельность */
function addInfofromPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}



const closeByCross = () => {
  const allCrosses = document.querySelectorAll('.close-item');
  allCrosses.forEach((cross) => {
    cross.addEventListener('click', closePopup)
  })
}

export { openPopup, addInfofromPopup, closePopup, closeByCross };
