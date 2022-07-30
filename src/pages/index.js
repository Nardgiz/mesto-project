import "./index.css";
import {
  dataCard,
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
  avatarForm,
  avatarInput,
  avatarButtonSubmit,
  avatarImage,
  popupAvatar,
  setUserInfo,
  submitButtonProfile,
  avatarOpenButton,
  picText
} from "../utils/constants.js";

import { addInfofromPopup } from "../components/modal.js";
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import {Api, config} from "../components/Api.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";


const profileFormValidator = new FormValidator(validationConfig, formEditProfile);
const cardFormValidator = new FormValidator(validationConfig, formElementImg);
const avatarFormValidator = new FormValidator(validationConfig, avatarForm);

import { loadSubmitButton } from "../utils/utils.js"
import { FormValidator } from "../components/FormValidator.js";
export const api = new Api(config);

let userId = null;
let cardList={};


/** открытие попапа аватара */
avatarOpenButton.addEventListener("click", () => {
  openPopup(popupAvatar);
});

/** открытие попапа редактирования */
popupButton.addEventListener("click", function () {
  formPopupEdit.openPopup(popupProfile);
  addInfofromPopup(popupProfile);
});
/** закрытие попап редактирования профиля */
popupButtonClose.addEventListener("click", function () {
  formPopupEdit.closePopup(popupProfile);
});

/** открытие попапа для загрузки новых карточек */
addImg.addEventListener("click", function () {
  openPopup(popupAddCard);
});
/** закрытие попап загрузки новых карточек */
imgPopupClose.addEventListener("click", function () {
  closePopup(popupAddCard);
});

/** добавляем открытие попап просмотра карточек */
formEditProfile.addEventListener("submit", submitEditProfileForm);
picPopupEl.addEventListener("click", function () {
  openPopup(picPopupEl);
});

/** Обработчик «отправки» формы редактироания профиля*/
const formPopupEdit = new PopupWithForm(".popup_profile", {submitEditProfileForm: (evt) => submitEditProfileForm(evt)})
function submitEditProfileForm(evt) {
  evt.preventDefault();
  const newDataUser = {
    name: nameInput.value,
    about: jobInput.value,
  }
  loadSubmitButton(popupProfile, true);
  api.editProfileForm(newDataUser)
    .then((data) => {
      setUserInfo({
        userName: data.name,
        userDescription: data.about,
      })
      formPopupEdit.closePopup(popupProfile);  
    })
    .catch((err) => {
      console.log(`Ошибка загрузки данных ${err}`)
    })
    .finally(() => {
      loadSubmitButton(popupProfile, false);
    })
    profileFormValidator.toggleButtonState(submitButtonProfile, false, validationConfig);
}
submitButtonProfile.addEventListener("submit", submitEditProfileForm);

/** Обработчик «отправки» формы добавления карточек */
export function formSubmitHandlerImg(evt) {
  evt.preventDefault();
  const newCard = {
    name: imgInputName.value,
    link: imgInputLink.value,
  };
  loadSubmitButton(popupAddCard, true);
  api.addCard(newCard)
    .then((data) => {
      cardList.setRenderData([data]);
      cardList.renderItems(userId);
  

      closePopup(popupAddCard);
      formElementImg.reset();
    })
    .catch((err) => {
      console.log(`Ошибка загрузки данных ${err.status}`)
    })
    .finally(() => {
      loadSubmitButton(popupAddCard, false);
    })  
    cardFormValidator._toggleButtonState(imgButtonSubmit, false, validationConfig);
}
formElementImg.addEventListener("submit", formSubmitHandlerImg);

/** Обработчик «отправки» формы для аватара */
export function formSubmitHandlerAvatar(evt) {
  evt.preventDefault();
  const newAvatar = {
    avatar: avatarInput.value,
  }
  loadSubmitButton(popupAvatar, true);
  api.editProfileAvatar(newAvatar)
    .then((dataAvatar) => {
      setUserInfo({
        userAvatar: dataAvatar.avatar
      })
      closePopup(popupAvatar);
      avatarForm.reset();
    })
    .catch((err) => {
      console.log(`Ошибка загрузки данных ${err.status}`)
    })
    .finally(() => {
      loadSubmitButton(popupAvatar, false);
    })  

    avatarFormValidator._toggleButtonState(avatarButtonSubmit, false, validationConfig);
};
avatarButtonSubmit.addEventListener("click", formSubmitHandlerAvatar);



/**функция, которая обновляет картинку аватара */
const createAvatar = function (dataAvatar) {
  avatarImage.src = dataAvatar.link;
  avatarImage.alt = dataAvatar.name;
}



/**получаем информацию о пользователи и о загруженных карточках */
api.getAllInfo().then(([cards, user]) => {
  setUserInfo({
    userName: user.name,
    userDescription: user.about,
    userAvatar: user.avatar
  })
  userId = user._id;
  /**получаем от сервера карточки и вызываем на них метод рендера каждой */
  cards.reverse();
  cardList = new Section({data:cards, renderer:(dataitem, userId) => renderCard(dataitem, userId)}, '.elements');
  cardList.renderItems(userId);
});



// функция, которая создает новую карточку на освное класса Card
function renderCard(dataitem, userId) {
  const card = new Card (
    dataCard,
    dataitem,
    userId,{
    handleCardClick: (data)=> handleCardClick(data),
    handleLikeClick: (cardId, isLiked)=> handleLikeClick(cardId, isLiked, card),
    handleDeleteIconClick: (cardElement, cardId)=>handleDeleteIconClick(cardElement, cardId)
});
cardList.setItem(card.createCard());
};

// функция удаления карточек 
const deleteImg = function (element) { 
  element.remove();
};


// функция запроса удаления карточки 
const handleDeleteIconClick = (cardElement, cardId) => {
  api.removeCard(cardId)
  .then(() => {
    deleteImg(cardElement)
  })
  .catch((err) => {
    console.log(`Ошибка при удалении ${err.status}`)
  })
};


// функция отвечает за постановку лайка 
const handleLikeClick = (cardId, isLiked, card) => {
  api.changeLikeStatus(cardId, isLiked)
    .then((dataFromServer) => {
      card.updateLikesState(dataFromServer);
    })
    .catch((err) => {
      console.log(`Ошибка работы лайк ${err.status}`)
    })
}

// открытие попапа для просмотра фотографий по клику на карточку 
const handleCardClick =(data)=>{
  picPopupEl.src = data.link;
  picPopupEl.alt = data.name;
  picText.textContent = data.name;
  openPopup(popupPicture);
};