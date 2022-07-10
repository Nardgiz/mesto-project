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

import { addInfofromPopup, openPopup, closePopup, closeByCross } from "../components/modal";
import { toggleButtonState } from "../components/validation.js";
import { setEventListers } from "../components/validation";
import { createCard } from "../components/card.js";

/** добавляем свойство кнопке, которая должна открывать попап редактирования профиля */
popupButton.addEventListener("click", function () {
  openPopup(popupProfile);
  addInfofromPopup(popupProfile);
});
/** добавляем свойство кнопке, которая должна открывать попап добавления изображения */
addImg.addEventListener("click", function () {
  openPopup(popupAddCard);
});
/** добавляем свойство кнопке, которая должна закрывать попап, отвечающий за редактирования профиля */
popupButtonClose.addEventListener("click", closeByCross);
/** добавляем закрытие попап, который добавляет изображения */
imgPopupClose.addEventListener("click", closeByCross);
/** добавляем закрытие попап, который просматривает изображения */
picPopupClose.addEventListener("click", closeByCross);
/** Прикрепляем обработчик к форме:
 * он будет следить за событием “submit” - «отправка» */
formEditProfile.addEventListener("submit", submitEditProfileForm);
/** добавляем свойство кнопке, которая должна открывать попап просмотра фото */
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
  toggleButtonState(imgButtonSubmit, false, validationConfig);
}

formElementImg.addEventListener("submit", formSubmitHandlerImg);

/** функция которая создает новую карточку из всех назначенных initialCards */
initialCards.forEach(function (item) {
  renderCard(item, cardList);
});

const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);
  Array.from(forms).forEach((formElement) => {
    setEventListers(formElement, config);
  });
};

enableValidation(validationConfig);
