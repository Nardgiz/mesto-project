
import './pages/index.css';
import { formElementImg, renderCard, cardList, initialCards, imgInputName, imgInputLink } from './components/card.js';
import { popupButton, submitEditProfileForm, openPopup, addInfofromPopup, closePopup, popupProfile, popupAddCard, popupPicture, formEditProfile, picPopupClose, imgPopupClose, popupButtonClose, addImg, picPopupEl } from './components/modal.js';
import { setEventListers } from './components/validation';
import { getAllInfo } from './components/api';


getAllInfo()
.then([cards,  ])


export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_invalid',
  inputErrorClass: 'form__input_invalid',
  errorClass: 'error'
}; 

formElementImg.addEventListener("submit", formSubmitHandlerImg);
  
// добавляем свойство кнопке, которая должна открывать попап редактирования профиля
popupButton.addEventListener("click", function () {
  openPopup(popupProfile);
  addInfofromPopup(popupProfile);
});
// добавляем свойство кнопке, которая должна открывать попап добавления изображения
addImg.addEventListener("click", function () {
  openPopup(popupAddCard);
});

//добавляем свойство кнопке, которая должна закрывать попап, отвечающий за редактирования профиля
popupButtonClose.addEventListener("click", function () {
  closePopup(popupProfile);
});
// добавляем закрытие попап, который добавляет изображения
imgPopupClose.addEventListener("click", function () {
  closePopup(popupAddCard);
});
// добавляем закрытие попап, который просматривает изображения
picPopupClose.addEventListener("click", function () {
  closePopup(popupPicture);
});
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditProfile.addEventListener("submit", submitEditProfileForm);

// добавляем свойство кнопке, которая должна открывать попап просмотра фото
picPopupEl.addEventListener("click", function () {
  openPopup(picPopupEl);
});





// Обработчик «отправки» формы для картинок
export function formSubmitHandlerImg(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  // Делаем объект, в котором указываем значения из массива name и link
  const newCard = {
    name: imgInputName.value,
    link: imgInputLink.value,
  };
  imgInputName.value = "";
  imgInputLink.value = "";
  // Запускаем функцию рендеринга карточки, с введенными уже аргументами
  renderCard(newCard, cardList);
  // Добавляем кнопке сабмит еще функцию закрытия
  closePopup(popupAddCard);
}

getAllCards()
  .then((cardsDataFromServer) => {
    cardsDataFromServer.forEach(function (item) {
      renderCard(item, cardList);
    });

  })



const enableValidation = ({formSelector, ...rest}) => {
  const forms = document.querySelectorAll(formSelector);
  Array.from(forms).forEach(formElement => {
      setEventListers(formElement, rest) 
  })
}

const {inputSelector, ...rest} = validationConfig;
console.log(rest);


enableValidation(validationConfig);

