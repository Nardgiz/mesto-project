import "./index.css";
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

import { addInfofromPopup, openPopup, closePopup } from "../components/modal";
import { toggleButtonState } from "../components/validation.js";
import { setEventListers } from "../components/validation";
<<<<<<< HEAD
import { overlay, closeByEscape, buttonDisable } from "../utils/utils.js";
import { createCard } from "../components/card.js";
import { addInfofromPopup, openPopup, closePopup } from "../components/modal";
import { changeLikeStatus, getAllCards, getProfileInfo } from "../components/api";
import { container } from "webpack";


export let userId = null;

/** функция, которая проставляет лайки */
const handleChangeLikeStatus = (cardId, isLiked) => {
  changeLikeStatus(cardId, isLiked)
  .then(())
}

/** общая функция, которая создает новую карточку */
export const renderCard = (card, container, userId) => {
  const card = createCard(data, userId, handleChangeLikeStatus);
  container.prepend(card);
};

/** getProfileInfo().then((user) => {
  profileName.textContent = user.name;
  profileJob.textContent = user.about;
});
/** предметная функция, которая работает с данными с сервера и создает новую карточку 
getAllCards().then((cards) => {
  cards.forEach((card) => {
      renderCard(card, cardList);
    });
});*/
||||||| 8e7ebba
import { overlay, closeByEscape, buttonDisable } from "../utils/utils.js";
import { createCard } from '../components/card.js';
import { addInfofromPopup, openPopup, closePopup } from '../components/modal';
=======
import { createCard } from "../components/card.js";
>>>>>>> main

<<<<<<< HEAD


getAllInfo().then(([cards, user]) => {
  profileName.textContent = user.name;
  profileJob.textContent = user.about;
  userId = user._id;

  cards.reverse().forEach((card) => {
    renderCard(card, cardList, userId);
  });
});


/** добавляем свойство кнопке, которая должна открывать попап редактирования профиля */
||||||| 8e7ebba


/** добавляем свойство кнопке, которая должна открывать попап редактирования профиля */ 
=======
/** добавляем свойство кнопке, которая должна открывать попап редактирования профиля */
>>>>>>> main
popupButton.addEventListener("click", function () {
  openPopup(popupProfile);
  addInfofromPopup(popupProfile);
});
/** добавляем свойство кнопке, которая должна открывать попап добавления изображения */
addImg.addEventListener("click", function () {
  openPopup(popupAddCard);
});
/** добавляем свойство кнопке, которая должна закрывать попап, отвечающий за редактирования профиля */
popupButtonClose.addEventListener("click", function () {
  closePopup(popupProfile);
});
/** добавляем закрытие попап, который добавляет изображения */
imgPopupClose.addEventListener("click", function () {
  closePopup(popupAddCard);
});
/** добавляем закрытие попап, который просматривает изображения */
picPopupClose.addEventListener("click", function () {
  closePopup(popupPicture);
});
/** Прикрепляем обработчик к форме:
 * он будет следить за событием “submit” - «отправка» */
formEditProfile.addEventListener("submit", submitEditProfileForm);
<<<<<<< HEAD

/** добавляем свойство кнопке, которая должна открывать попап просмотра фото */
||||||| 8e7ebba

/** добавляем свойство кнопке, которая должна открывать попап просмотра фото */ 
=======
/** добавляем свойство кнопке, которая должна открывать попап просмотра фото */
>>>>>>> main
picPopupEl.addEventListener("click", function () {
  openPopup(picPopupEl);
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
<<<<<<< HEAD

/** Обработчик «отправки» формы для картинок */
||||||| 8e7ebba
/** функция, которая создает новую карточку */
export const renderCard = function (data, container) {
  const card = createCard(data);
  container.prepend(card);
};
/** Обработчик «отправки» формы для картинок */ 
=======
/** функция, которая создает новую карточку */
export const renderCard = function (data, container) {
  const card = createCard(data);
  container.prepend(card);
};
/** Обработчик «отправки» формы для картинок */
>>>>>>> main
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
  renderCard(newCard, cardList, userId);
  /** Добавляем кнопке сабмит еще функцию закрытия */
  closePopup(popupAddCard);
  /** добавляем очистку формы после отправки картинок */
  formElementImg.reset();
<<<<<<< HEAD
||||||| 8e7ebba

=======
  toggleButtonState(imgButtonSubmit, false, validationConfig);
>>>>>>> main
}

formElementImg.addEventListener("submit", formSubmitHandlerImg);


const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);
  Array.from(forms).forEach((formElement) => {
    setEventListers(formElement, config);
  });
};

enableValidation(validationConfig);
