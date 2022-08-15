//Конфиг для создания карточки
const dataCard = {
  templateSelector: '#element-template',
  cardSelector: '.element',
  cardPictureSelector: '.element__picture',
  cardTextSelector: '.element__text',
  likeButtonSelector: '.element__button',
  likeButtonActiveClass: 'element__button_active',
  likeCounterSelector: '.element__like-amount',
  rubbishButtonSelector: '.element__button-rubbish',
};


/** Находим форму для добавления картинок в DOM */
const formElementImg = document.querySelector(".form_img");
const imgInputName = formElementImg.querySelector("#img-name");
const imgInputLink = formElementImg.querySelector("#img-link");
const imgButtonSubmit = formElementImg.querySelector(".form__button_img");
const popupApproveDeleteCard=document.querySelector('.popup_request-delete-card');
const avatarImage = document.querySelector(".profile__avatar");
const avatarOpenButton = document.querySelector(".profile__avatar-button");
const avatarButtonSubmit = document.querySelector(".form__button_avatar");
const avatarForm = document.querySelector(".form_avatar");
const popupAvatar = document.querySelector(".popup_avatar");
const avatarInput = document.querySelector(".form__input_avatar");

 
/** ПОПАПЫ */
/** Находим попап редактирования профиля в DOM */
const popupProfile = document.querySelector(".popup_profile");
/** Находим кнопку, которая должна закрывать попап, отвечающий за редактирования профиля */
const popupButtonClose = document.querySelector(".close-item");
/** Находим попап для добавления изображений */
const popupAddCard = document.querySelector(".popup_img");
/** Находим попап для просмотра фото */
const popupPicture = document.querySelector(".popup_pic");
/** Находим кнопку которая открывает попап редактирования профиля */
const popupButton = document.querySelector(".profile__button-rectangle");
/** Находим кнопку, которая должна открывать попап добавления изображения */
const addImg = document.querySelector(".profile__button-pluss");
const submitButtonProfile = document.querySelector(".form__button");
/** попап просмотра фото */
const picPopupCont = popupPicture.querySelector(".popup__container_picture");
const picPopupEl = picPopupCont.querySelector(".popup__picture");
const picText = picPopupCont.querySelector(".popup__text");
/** кнопка закрытия попап, который добавляет изображения */
const imgPopupClose = document.querySelector(".close-item_img");
/** кнопка закрытия попап, который просматривает изображения */
const picPopupClose = document.querySelector(".close-item_pic");
/** находим форму редактирования профиля в DOM */
const formEditProfile = document.querySelector(".form");
const nameInput = formEditProfile.querySelector("#first-name");
const jobInput = formEditProfile.querySelector("#job");
/** Находим значения имя и занятия в html коде */
const profileName = document.querySelector(".profile__firstname");
const profileJob = document.querySelector(".profile__job");

const buttonCloseClass = 'close-item';
const popupOpenedClass = "popup_opened";


const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_invalid",
  inputErrorClass: "form__input_invalid",
  errorClass: "error",
};

const apiRequestConfig = {
  url: "https://mesto.nomoreparties.co/v1/plus-cohort-13",
  headers: {
    authorization: "d1d14902-c78a-4d00-aa9d-9b64f78ed110",
    "Content-type": "application/json"
  },
};

const configPopupImage = {
image:'.popup__picture',
text: '.popup__text'
}

const popupFormInputsSelectors ={
  form:'form',
  input:'form__input',
  submitButton: 'form__button'
}

const configUserInfo = {
  firstnameSelector: '.profile__firstname',
  jobAboutSelector: '.profile__job',
  avatarSelector:'.profile__avatar'
  }


export {
  popupApproveDeleteCard,
  apiRequestConfig,
  popupOpenedClass,
  buttonCloseClass,
  popupFormInputsSelectors,
  configUserInfo,
  configPopupImage,
  dataCard,
  avatarInput,
  popupAvatar,
  avatarOpenButton,
  avatarForm,
  avatarButtonSubmit,
  avatarImage,
  submitButtonProfile,
  validationConfig,
  formElementImg,
  imgInputName,
  imgInputLink,
  imgButtonSubmit,
  profileJob,
  profileName,
  jobInput,
  nameInput,
  formEditProfile,
  picPopupClose,
  imgPopupClose,
  picText,
  picPopupEl,
  picPopupCont,
  addImg,
  popupButton,
  popupPicture,
  popupAddCard,
  popupButtonClose,
  popupProfile,
};