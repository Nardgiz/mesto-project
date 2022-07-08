import './index.css';
import {
  initialCards,
  cardList,
  formElementImg,
  imgInputName,
  imgInputLink,
  profileJob,
  profileName,
  jobInput,
  nameInput,
  formEditProfile,
  picPopupClose,
  imgPopupClose,
  imgButtonSubmit,
  picPopupEl,
  addImg,
  popupButton,
  popupPicture,
  popupAddCard,
  popupButtonClose,
  popupProfile,
  validationConfig,
  submitButtonProfile,
} from "../utils/constants.js";

import { setEventListers } from "../components/validation";
import { overlay, closeByEscape, buttonDisable } from "../utils/utils.js";
import { createCard } from '../components/card.js';
import { addInfofromPopup, openPopup, closePopup } from '../components/modal';



/** добавляем свойство кнопке, которая должна открывать попап редактирования профиля */ 
popupButton.addEventListener("click", function () {
  openPopup(popupProfile);
  document.addEventListener("keydown", closeByEscape);
  document.addEventListener("mousedown", overlay);
  addInfofromPopup(popupProfile);
  buttonDisable(submitButtonProfile);
});
/** добавляем свойство кнопке, которая должна открывать попап добавления изображения */ 
addImg.addEventListener("click", function () {
  openPopup(popupAddCard);
  document.addEventListener("keydown", closeByEscape);
  document.addEventListener("mousedown", overlay);
  buttonDisable(imgButtonSubmit);
});

/** добавляем свойство кнопке, которая должна закрывать попап, отвечающий за редактирования профиля */
popupButtonClose.addEventListener("click", function () {
  closePopup(popupProfile);
  document.removeEventListener("keydown", closeByEscape);
  document.removeEventListener("click", overlay);
});
/** добавляем закрытие попап, который добавляет изображения */ 
imgPopupClose.addEventListener("click", function () {
  closePopup(popupAddCard);
  document.removeEventListener("keydown", closeByEscape);
  document.removeEventListener("click", overlay);
});
/** добавляем закрытие попап, который просматривает изображения */ 
picPopupClose.addEventListener("click", function () {
  closePopup(popupPicture);
  document.removeEventListener("keydown", closeByEscape);
  document.removeEventListener("click", overlay);
});
/** Прикрепляем обработчик к форме:
 * он будет следить за событием “submit” - «отправка» */ 
formEditProfile.addEventListener("submit", submitEditProfileForm);

/** добавляем свойство кнопке, которая должна открывать попап просмотра фото */ 
picPopupEl.addEventListener("click", function () {
  openPopup(picPopupEl);
  document.addEventListener("keydown", closeByEscape);
  document.addEventListener("click", overlay);
});

/** Обработчик «отправки» формы */ 
export function submitEditProfileForm(evt) {
  /** Эта строчка отменяет стандартную отправку формы.
   * Так мы можем определить свою логику отправки.
   * О том, как это делать, расскажем позже */ 
  evt.preventDefault();

  /** Получаем значения полей jobInput и nameInput из свойства value и передаем их в html */ 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  /** Добавляем кнопке сабмит еще функцию закрытия */ 
  closePopup(popupProfile);
  
}
/** функция, которая создает новую карточку */
export const renderCard = function (data, container) {
  const card = createCard(data);
  container.prepend(card);
};
/** Обработчик «отправки» формы для картинок */ 
export function formSubmitHandlerImg(evt) {
    /** Эта строчка отменяет стандартную отправку формы.
   * Так мы можем определить свою логику отправки.
   * О том, как это делать, расскажем позже */
  evt.preventDefault();
  /** Делаем объект, в котором указываем значения из массива name и link */ 
  const newCard = {
    name: imgInputName.value,
    link: imgInputLink.value,
  };
  /** Запускаем функцию рендеринга карточки, с введенными уже аргументами */
  renderCard(newCard, cardList);
  /** Добавляем кнопке сабмит еще функцию закрытия */
  closePopup(popupAddCard);
  /** добавляем очистку формы после отправки картинок */
  formElementImg.reset();

}

formElementImg.addEventListener("submit", formSubmitHandlerImg);

/** функция которая создает новую карточку из всех назначенных initialCards */
initialCards.forEach(function (item) {
  renderCard(item, cardList);
});


const enableValidation = ({ formSelector, ...rest }) => {
  const forms = document.querySelectorAll(formSelector);
  Array.from(forms).forEach((formElement) => {
    setEventListers(formElement, rest);
  });
};



enableValidation(validationConfig);
