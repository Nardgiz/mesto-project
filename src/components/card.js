import { openPopup } from "./modal";

export class Card {
  constructor (selector, data, userId, {
    handleChangeLikeStatus,
    handleDeleteCard,
    likesArray}) {
    this._selector = selector;
    this._data = data;
    this._userId = userId;
    this._handleChangeLikeStatus = handleChangeLikeStatus;
    this._handleDeleteCard = handleDeleteCard;
    
    this._likesArray = likesArray;
  }

  /**получение образца карточки */
  _getCard() {
    return document
    .querySelector(this._selector)
    .content
    .querySelector(".element")
    .cloneNode(true);
  }
  
  /**создание новой карточки */
  createCard () {
    this._cardElement = this._getCard()
    /**поиск всех элементов новой карточки */
    const cardImage = this._cardElement.querySelector(".element__picture");
    const cardText = this._cardElement.querySelector(".element__text");
    const likeButton = this._cardElement.querySelector(".element__button");
    const rubbishButton = this._cardElement.querySelector(".element__button-rubbish");
   
    /**создание изображения и подписи для карточки */
    cardImage.src = this._data.link;
    cardImage.alt = this._data.name;
    cardText.textContent = this._data.name;
    this._isLiked()
    this._updateLikesState();


    /**вызов функции обновления лайков */
    this._updateLikesState(this._cardElement, this._data.likes, this._userId )


    /**отмета возможности удаления не своих карточек */
    if (this._data.owner._id !== this._userId) {
      rubbishButton.remove();
    }
  
    cardImage.addEventListener("click", () => this._clickImage(this._data));
  
    likeButton.addEventListener("click", () => {
      this._handleChangeLikeStatus(this._data._id, likeButton.classList.contains("element__button_active"), cardElement, userId);
    });
  
    /** Добавляем работу rubbish*/
    rubbishButton.addEventListener("click", function () {
      this._handleDeleteCard(this._cardElement, this._data._id)
    });
  
    /**возвращаем созданную карточку */
    return this._cardElement;
  }


  /** функция, которая определяет, поставлен лайк или нет */
  _isLiked(likesArray)  {
    return Boolean(
      likesArray.find((likeObj) => {
        return likeObj._id === this._userId;
      })
    );
  };
    
  /**обновление кол-ва лайков */
  _updateLikesState() {
    const likeButton = this._cardElement.querySelector(".element__button");
    const likeAmount = this._cardElement.querySelector(".element__like-amount");
    
    likeAmount.textContent = this._likesArray.length;
    
    if(isLiked(this._likesArray, this._userId)) {
      likeButton.classList.add("element__button_active");
    } else {
        likeButton.classList.remove("element__button_active");
      }
  }

  /** открытие попапа для просмотра фотографий по клику на карточку */
  _clickImage() {
    picPopupEl.src = this._data.link;
    picPopupEl.alt = this._data.name;
    picText.textContent = this._data.name;
    openPopup(popupPicture);
  };



  /** функция удаления карточек из разметки */ 
  deleteImg() { 
    this._cardElement.remove(); 
  };

}





/**функция, которая обновляет картинку аватара */
const createAvatar = function (dataAvatar) {
  avatarImage.src = dataAvatar.link;
  avatarImage.alt = dataAvatar.name;
}


