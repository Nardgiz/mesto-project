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
  _checkLIkeStatus(){
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
    if(this._checkLIkeStatus()) {
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


