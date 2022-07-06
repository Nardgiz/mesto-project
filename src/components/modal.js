// добавляем функцию, которая отвечает за открытие попап, отвечающего за редактирование профиля

import { overlay, closeByEscape } from './utils.js';

  // Находим попап редактирования профиля в DOM
  export const popupProfile = document.querySelector(".popup");
  //Находим кнопку, которая должна закрывать попап, отвечающий за редактирования профиля
  export const popupButtonClose = document.querySelector(".close-item");
  // Находим попап для добавления изображений
  export const popupAddCard = document.querySelector(".popup_img");
  // Находим попап для просмотра фото
  export const popupPicture = document.querySelector(".popup_pic");
  //Находим кнопку которая открывает попап редактирования профиля
  export const popupButton = document.querySelector(".profile__button-rectangle");
  // Находим кнопку, которая должна открывать попап добавления изображения
  export const addImg = document.querySelector(".profile__button-pluss");
  // попап просмотра фото
  export const picPopupCont = popupPicture.querySelector(".popup__container_picture");
  export const picPopupEl = picPopupCont.querySelector(".popup__picture");
  export const picText = picPopupCont.querySelector(".popup__text");
  // кнопка закрытия попап, который добавляет изображения
  export const imgPopupClose = document.querySelector(".close-item_img");
  // кнопка закрытия попап, который просматривает изображения
  export const picPopupClose = document.querySelector(".close-item_pic");
  // Находим форму редактирования профиля в DOM
  export const formEditProfile = document.querySelector(".form");
  export const nameInput = formEditProfile.querySelector("#first-name");
  export const jobInput = formEditProfile.querySelector("#job");  
  // Находим значения имя и занятия в html коде
  export const profileName = document.querySelector(".profile__firstname");
  export const profileJob = document.querySelector(".profile__job");


  export const openPopup = (popup) => {
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEscape);
    popup.addEventListener('click', overlay); 
  };

  // добавляем функцию, которая удаляет картинки
  export const deleteImg = function (element) {
    element.remove();
  };
  
  // функция, которая выводит в попап, указанные имя и деятельность
  export function addInfofromPopup () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  }
 
    //добавляем функцию для закрытия попапа
  export const closePopup = (popup) => {
    popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', closeByEscape);
    popup.removeEventListener('click', overlay);
  };
    
  // Обработчик «отправки» формы
  export function submitEditProfileForm(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
  
    // Получаем значения полей jobInput и nameInput из свойства value и передаем их в html
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
  
    // Добавляем кнопке сабмит еще функцию закрытия
    closePopup(popupProfile);
  }
    
  //Добавляем функцию, которая будет открывать по клику попап для просмотра фотографий
  export const clickImage = function (data) {
    picPopupEl.src = data.link;
    picText.textContent = data.name;
    openPopup(popupPicture);
  };

  
 



  


