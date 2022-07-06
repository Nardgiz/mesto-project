
import { clickImage, deleteImg } from './modal.js';


  // Находим карточки
  export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ];
  
  //находим в html секцию с разметкой для карточек
  export const cardList = document.querySelector(".elements");
  export const cardTemplate = document
  .querySelector("#element-template")
  .content.querySelector(".element");
  // Находим форму для добавления картинок в DOM
  export const formElementImg = document.querySelector(".form_img");
  export const imgInputName = formElementImg.querySelector("#img-name");
  export const imgInputLink = formElementImg.querySelector("#img-link");
  export const imgButtonSubmit = formElementImg.querySelector(".form__button_img");


export const createCard = function (data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".element__picture");
  const cardText = cardElement.querySelector(".element__text");
  const likeButton = cardElement.querySelector(".element__button");
  const rubbishButton = cardElement.querySelector(".element__button-rubbish");

  cardImage.src = data.link;
  cardText.textContent = data.name;

  cardImage.addEventListener("click", () => clickImage(data));

  //Добавляем работу лайк
  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__button_active");
  });

  //Добавляем работу rubbish
  rubbishButton.addEventListener("click", function () {
    deleteImg(cardElement);
  });
  return cardElement;
};

export const renderCard = function (data, container) {
  const card = createCard(data);
  container.prepend(card);
};

