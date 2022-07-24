
//Класс по работе с карточками
export default class Card {
  constructor(data, cardInfo, userId, {handleCardClick, handleLikeClick, handleDeleteIconClick}){
    this._cardElement=document.querySelector(data.templateSelector).content.querySelector(data.cardSelector).cloneNode(true);
    this._cardPictureElement=this._cardElement.querySelector(data.cardPictureSelector);
    this._cardTextElement=this._cardElement.querySelector(data.cardTextSelector);
    this._likeButtonElement=this._cardElement.querySelector(data.likeButtonSelector);
    this._likeButtonActiveClass=data.likeButtonActiveClass;
    this._likeCounterElement=this._cardElement.querySelector(data.likeCounterSelector);
    this._rubbishButtonElement=this._cardElement.querySelector(data.rubbishButtonSelector);
    this._userCardInfo=cardInfo;
    this._userId=userId;
    this._handleCardClick=handleCardClick;
    this._handleLikeClick=handleLikeClick;
    this._handleDeleteIconClick=handleDeleteIconClick;
  };

  /** функция, которая определяет, поставлен лайк или нет */
  _isLiked(){
    return Boolean(
      this._userCardInfo.likes.find((likeObj) => {
        return likeObj._id === this._userId;
      })
    );
  };

  /**обновление кол-ва лайков */
  updateLikesState(userCardInfo) {
    if (userCardInfo) {
      this._userCardInfo=userCardInfo;
    }
    this._likeCounterElement.textContent = this._userCardInfo.likes.length;
    if(this._isLiked()) {
      this._likeButtonElement.classList.add(this._likeButtonActiveClass);
    } else {
      this._likeButtonElement.classList.remove(this._likeButtonActiveClass);
    }
  };

  _setEventListeners(){
    this._cardPictureElement.addEventListener("click", () => this._handleCardClick(this._userCardInfo));
  
    this._likeButtonElement.addEventListener("click", () => this._handleLikeClick(this._userCardInfo._id, this._likeButtonElement.classList.contains(this._likeButtonActiveClass)));
  
    this._rubbishButtonElement.addEventListener("click", () => this._handleDeleteIconClick(this._cardElement, this._userCardInfo._id));

  };

  createCard(){
    this._cardPictureElement.src = this._userCardInfo.link;
    this._cardPictureElement.alt = this._userCardInfo.name;
    this._cardTextElement.textContent = this._userCardInfo.name;
    this.updateLikesState();
    if (this._userCardInfo.owner._id !== this._userId) {
      this._rubbishButtonElement.remove();
    }
    this._setEventListeners();
    return this._cardElement;
  };
};






/** функция, которая определяет, поставлен лайк или нет */
/* export const isLiked = (likesArray, userId) => {
  return Boolean(
    likesArray.find((likeObj) => {
      return likeObj._id === userId;
    })
  );
}; */


/**обновление кол-ва лайков */
/* const updateLikesState = (cardElement, likesArray, userId) => {
  const likeButton = cardElement.querySelector(".element__button");
  const likeAmount = cardElement.querySelector(".element__like-amount");

  likeAmount.textContent = likesArray.length;

  if(isLiked(likesArray, userId)) {
    likeButton.classList.add("element__button_active");
  } else {
    likeButton.classList.remove("element__button_active");
  }
}
 */


/* export const createCard = function (data, userId, handleChangeLikeStatus, handleDeleteCard) {
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

  // Добавляем работу rubbish
  rubbishButton.addEventListener("click", function () {
    handleDeleteCard(cardElement, data._id)
  });

  return cardElement;
} */


/* // функция удаления карточек 
const deleteImg = function (element) { 
  element.remove(); 
};


// функция удаления карточки 
const handleDeleteCard = (cardElement, cardId) => {
  removeCard(cardId)
  .then(() => {
    deleteImg(cardElement)
  })
  .catch((err) => {
    console.log(`Ошибка при удалении ${err.status}`)
  })
};


// функция, которая обновляет картинку аватара 
const createAvatar = function (dataAvatar) {
  avatarImage.src = dataAvatar.link;
  avatarImage.alt = dataAvatar.name;
}

// функция которая отслеживает постановку лайка
const handleChangeLikeStatus = (cardId, isLiked, cardElement, userId) => {
  changeLikeStatus(cardId, isLiked)
    .then((dataFromServer) => {
      updateLikesState(cardElement, dataFromServer.likes, userId)
    })
    .catch((err) => {
      console.log(`Ошибка работы лайк ${err.status}`)
    })
}

// открытие попапа для просмотра фотографий по клику на карточку 
export const clickImage = function (data) {
  picPopupEl.src = data.link;
  picPopupEl.alt = data.name;
  picText.textContent = data.name;
  openPopup(popupPicture);
}; */