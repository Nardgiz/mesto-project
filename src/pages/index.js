import "./index.css";
import {
  popupApproveDeleteCard,
  apiRequestConfig,
  popupOpenedClass,
  buttonCloseClass,
  popupFormInputsSelectors,
  configUserInfo,
  configPopupImage,
  dataCard,
  formElementImg,
  formEditProfile,
  imgButtonSubmit,
  addImg,
  popupButton,
  popupAddCard,
  popupProfile,
  validationConfig,
  avatarForm,
  avatarButtonSubmit,
  popupAvatar,
  submitButtonProfile,
  avatarOpenButton,
} from "../utils/constants.js";

import {UserInfo} from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import {Api} from "../components/Api.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { loadSubmitButton } from "../utils/utils.js"
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithRequestApprove } from "../components/PopupWithRequestApprove.js";

export const api = new Api(apiRequestConfig);

const profileFormValidator = new FormValidator(validationConfig, formEditProfile);
profileFormValidator.enableValidation()
const cardFormValidator = new FormValidator(validationConfig, formElementImg);
cardFormValidator.enableValidation()
const avatarFormValidator = new FormValidator(validationConfig, avatarForm);
avatarFormValidator.enableValidation()

const userInfo = new UserInfo(configUserInfo);


let userId = null;
let cardList={};


/** Обработчик «отправки» формы редактироания профиля*/
const formPopupEdit = new PopupWithForm(".popup_profile", buttonCloseClass, popupOpenedClass, popupFormInputsSelectors, {submitEditProfileForm: (evt, [name, about]) => submitEditProfileForm(evt, [name, about])});
const formImageAdd = new PopupWithForm(".popup_img",buttonCloseClass, popupOpenedClass, popupFormInputsSelectors, {submitEditProfileForm: (evt, [name, link]) => formSubmitHandlerImg(evt, [name, link])});
const formAvatarAdd = new PopupWithForm(".popup_avatar",buttonCloseClass, popupOpenedClass, popupFormInputsSelectors, {submitEditProfileForm: (evt, [url]) => formSubmitHandlerAvatar(evt, [url])});
const popUpOpenImage= new PopupWithImage('.popup_pic',buttonCloseClass, popupOpenedClass, configPopupImage);
const deletePopup = new PopupWithRequestApprove('.popup_request-delete-card', buttonCloseClass, popupOpenedClass, '.form__button_request-delete-card',{clickApproveButton: (evt, inputData) => handleDeleteIconClick(evt, inputData)});


formPopupEdit.setEventListeners();
formImageAdd.setEventListeners();
formAvatarAdd.setEventListeners();
popUpOpenImage.setEventListeners();
deletePopup.setEventListeners();


// открытие попапа редактирования 
popupButton.addEventListener("click", function () {
  profileFormValidator.enableValidation()
  formPopupEdit.openPopup();
  formPopupEdit.setDefaultValues(userInfo.getUserInfo());
});


//Обработчик формы редактирования профиля
function submitEditProfileForm(evt, [name, about]) {
  evt.preventDefault();
  const newDataUser = {
    name: name,
    about: about,
  }
  loadSubmitButton(popupProfile, true);
  api.editProfileForm(newDataUser)
    .then((data) => {
      userInfo.setUserInfo(data.name, data.about)
      formPopupEdit.closePopup();  
    })
    .catch((err) => {
      console.log(`Ошибка загрузки данных ${err}`)
    })
    .finally(() => {
      loadSubmitButton(popupProfile, false);
    })
    ;
}

// открытие попапа для загрузки новых карточек 
addImg.addEventListener("click", function () {
  cardFormValidator.enableValidation();
  formImageAdd.openPopup();
});


//Обработчик формы отправки карточки
function formSubmitHandlerImg(evt, [name, link]) {
  evt.preventDefault();
  const newCard = {
    name: name,
    link: link,
  };
  loadSubmitButton(popupAddCard, true);
  api.addCard(newCard)
    .then((data) => {
      cardList.setRenderData([data]);
      cardList.renderItems(userId);
      formImageAdd.closePopup();
    })
    .catch((err) => {
      console.log(`Ошибка загрузки данных ${err.status}`)
    })
    .finally(() => {
      loadSubmitButton(popupAddCard, false);
    })  
    
}


// открытие попапа аватара 
avatarOpenButton.addEventListener("click", () => {
  avatarFormValidator.enableValidation();
  formAvatarAdd.openPopup();
});


//Обработчик формы редактирования аватара
function formSubmitHandlerAvatar(evt, [url]) {
  evt.preventDefault();
  const newAvatar = {
    avatar: url,
  }
  loadSubmitButton(popupAvatar, true);
  api.editProfileAvatar(newAvatar)
    .then((dataAvatar) => {
      userInfo.setUserAvatar(dataAvatar.avatar)
      formAvatarAdd.closePopup();
    })
    .catch((err) => {
      console.log(`Ошибка загрузки данных ${err.status}`)
    })
    .finally(() => {
      loadSubmitButton(popupAvatar, false);
    })  

  
};




/**получаем информацию о пользователи и о загруженных карточках */
api.getAllInfo().then(([cards, user]) => {
    userInfo.setUserInfo(user.name,user.about);
    userInfo.setUserAvatar(user.avatar);
    userId = user._id;
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
    handleDeleteIconClick: (cardElement, cardId)=>popupSubmitHandlerDelete(cardElement, cardId)
});
cardList.setItem(card.createCard());
};

//Обработчик попапа удаления карточки
function popupSubmitHandlerDelete(cardElement, cardId) {
  deletePopup.openPopup({cardElement:cardElement, cardId:cardId});
}



// функция удаления карточек 
const deleteImg = function (element) { 
  element.remove();
};


// функция запроса удаления карточки 
function handleDeleteIconClick(evt, dataInput){
  loadSubmitButton(popupApproveDeleteCard, true);
  api.removeCard(dataInput.cardId)
  .then(() => {
    deleteImg(dataInput.cardElement)
    deletePopup.closePopup();
  })
  .catch((err) => {
    console.log(`Ошибка при удалении ${err.status}`);
  })
  .finally(()=>loadSubmitButton(popupApproveDeleteCard, false))
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
  popUpOpenImage.setEventListeners();
  popUpOpenImage.openPopup(data);
};