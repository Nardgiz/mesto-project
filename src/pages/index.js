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
  openPopupAvatarButton,
  avatarForm,
  avatarButtonSubmit,
} from "../utils/constants.js";

import { addInfofromPopup, openPopup, closePopup } from "../components/modal";
import { toggleButtonState } from "../components/validation.js";
import { setEventListers } from "../components/validation";
import { createAvatar, createCard, handleChangeLikeStatus, handleDeleteCard } from "../components/card.js";
import { getAllInfo, addCard, changeLikeStatus, editProfileAvatar } from "../components/api.js"


let userId = null;

getAllInfo().then(([cards, user]) => {
  profileName.textContent = user.name;
  profileJob.textContent = user.about;
  avatarImage.src = user.avatar
  userId = user._id;

  /**получаем от сервера карточки и вызываем на них метод рендера каждой */
  cards.reverse().forEach((card) => {
    renderCard(card, cardList, userId);
  });
});

editProfileAvatar(data).then((dataAvatar) => {
  createAvatar(dataAvatar)
})

/** открытие попапа аватара */
openPopupAvatarButton.addEventListener('click', () => {
  openPopup(popupProfile);
})

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
const renderCard = function (data, container, userId) {
  const card = createCard(data, userId, handleChangeLikeStatus, handleDeleteCard);
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
  addCard(newCard).then((data) => {
    renderCard(data, cardList, userId);
  })
  .catch(() => {
    console.log("Ошибка при добавлении карточки");
  })
  
  /** Добавляем кнопке сабмит еще функцию закрытия */
  closePopup(popupAddCard);
  /** добавляем очистку формы после отправки картинок */
  formElementImg.reset();
  toggleButtonState(imgButtonSubmit, false, validationConfig);
}

formElementImg.addEventListener("submit", formSubmitHandlerImg);

/** Обработчик «отправки» формы для аватара */
export function formSubmitHandlerAvatar(evt) {
  /** Эта строчка отменяет стандартную отправку формы.
   * Так мы можем определить свою логику отправки.
   * О том, как это делать, расскажем позже */
  evt.preventDefault();

  /**получение данных с сервера и работа с ними */
  editProfileAvatar(newAvatar).then((dataAvatar) => {
    createAvatar(dataAvatar)
  })
  /** Добавляем кнопке сабмит еще функцию закрытия */
  closePopup(popupAvatar);
  /** добавляем очистку формы после отправки картинок */
  avatarForm.reset();
  toggleButtonState(avatarButtonSubmit, false, validationConfig);
}
avatarButtonSubmit.addEventListener('click', formSubmitHandlerAvatar);


const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);
  Array.from(forms).forEach((formElement) => {
    setEventListers(formElement, config);
  });
};

enableValidation(validationConfig);
