  import { openPopup } from "./modal";
  import { picPopupEl, picText, popupPicture, cardTemplate } from "../utils/constants.js"


function toggleButton (evt) {
  evt.target.classList.toggle("element__button_active")
};

/** добавляем функцию, которая удаляет картинки */ 
export const deleteImg = function (element) {
  element.remove();
};

/** Добавляем функцию, которая будет открывать по клику попап для просмотра фотографий */
export const clickImage = function (data) {
  picPopupEl.src = data.link;
  picPopupEl.alt = data.name;
  picText.textContent = data.name;
  openPopup(popupPicture);
};

export const createCard = function (data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".element__picture");
  const cardText = cardElement.querySelector(".element__text");
  const likeButton = cardElement.querySelector(".element__button");
  const rubbishButton = cardElement.querySelector(".element__button-rubbish");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardText.textContent = data.name;

  cardImage.addEventListener("click", () => clickImage(data));

  /** Добавляем работу лайк */
  likeButton.addEventListener("click", toggleButton);

  /** Добавляем работу rubbish */
  rubbishButton.addEventListener("click", function () {
    deleteImg(cardElement);
  });
  return cardElement;
};



