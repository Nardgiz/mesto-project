import { openPopup } from "./modal";
import {
  picPopupEl,
  picText,
  popupPicture,
  cardTemplate,
  cardList,
  avatarImage
} from "../utils/constants.js";
import { removeCard, changeLikeStatus } from "./api";

export { handleChangeLikeStatus, updateLikesState, handleDeleteCard, deleteImg, createAvatar };

/** открытие попапа для просмотра фотографий по клику на карточку */
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
/**обновление кол-ва лайков */
const updateLikesState = (cardElement, likesArray, userId) => {
  const likeButton = cardElement.querySelector(".element__button");
  const likeAmount = cardElement.querySelector(".element__like-amount");

  likeAmount.textContent = likesArray.length;

  if(isLiked(likesArray, userId)) {
    likeButton.classList.add("element__button_active");
  } else {
    likeButton.classList.remove("element__button_active");
  }
}
/**функция которая отслеживает постановку лайка */
const handleChangeLikeStatus = (cardId, isLiked, cardElement, userId) => {
  changeLikeStatus(cardId, isLiked)
    .then((dataFromServer) => {
      updateLikesState(cardElement, dataFromServer.likes, userId)
    })
    .catch((err) => {
      console.log(`Ошибка работы лайк ${err.status}`)
    })
}
/** функция удаления карточек */ 
const deleteImg = function (element) { 
  element.remove(); 
};
/**функция удаления карточки */
const handleDeleteCard = (cardElement, cardId) => {
  removeCard(cardId)
  .then(() => {
    deleteImg(cardElement)
  })
  .catch((err) => {
    console.log(`Ошибка при удалении ${err.status}`)
  })
};
/**функция, которая обновляет картинку аватара */
const createAvatar = function (dataAvatar) {
  avatarImage.src = dataAvatar.link;
  avatarImage.alt = dataAvatar.name;
}

export const createCard = function (data, userId, handleChangeLikeStatus, handleDeleteCard) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".element__picture");
  const cardText = cardElement.querySelector(".element__text");
  const likeButton = cardElement.querySelector(".element__button");
  const rubbishButton = cardElement.querySelector(".element__button-rubbish");
 
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardText.textContent = data.name;

  updateLikesState(cardElement, data.likes, userId )

  if (data.owner._id !== userId) {
    rubbishButton.remove();
  }

  cardImage.addEventListener("click", () => clickImage(data));

  likeButton.addEventListener("click", () => {
    handleChangeLikeStatus(data._id, likeButton.classList.contains("element__button_active"), cardElement, userId);
  });

  /** Добавляем работу rubbish*/
  rubbishButton.addEventListener("click", function () {
    handleDeleteCard(cardElement, data._id)
  });

  return cardElement;
}
