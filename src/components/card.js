import { openPopup } from "./modal";
import {
  picPopupEl,
  picText,
  popupPicture,
  cardTemplate,
} from "../utils/constants.js";

function toggleButton(evt) {
  evt.target.classList.toggle("element__button_active");
}

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

/** функция, которая определяет, поставлен лайк или нет */
export const isLiked = (likesArray, userId) => {
  return Boolean(
    likesArray.find((likeObj) => {
      return likeObj._id === userId;
    })
  );
};

export const createCard = function (dataCard, userId, handleChangeLikeStatus) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".element__picture");
  const cardText = cardElement.querySelector(".element__text");
  const likeButton = cardElement.querySelector(".element__button");
  const rubbishButton = cardElement.querySelector(".element__button-rubbish");

  cardImage.src = dataCard.link;
  cardImage.alt = dataCard.name;
  cardText.textContent = dataCard.name;

  if (dataCard.owner._id !== dataFromServer._id) {
    rubbishButton.remove();
  }

  cardImage.addEventListener("click", () => clickImage(data));

  /** Добавляем работу лайк */
  likeButton.addEventListener("click", () => {
    handleChangeLikeStatus(dataCard._id, isLiked());
  });

  /** Добавляем работу rubbish */
  rubbishButton.addEventListener("click", function () {
    deleteImg(cardElement);
  });
  return cardElement;
};
