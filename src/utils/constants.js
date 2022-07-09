
/** находим в html секцию с разметкой для карточек */
const cardList = document.querySelector(".elements");
const cardTemplate = document
  .querySelector("#element-template")
  .content.querySelector(".element");
/** Находим форму для добавления картинок в DOM */ 
const formElementImg = document.querySelector(".form_img");
const imgInputName = formElementImg.querySelector("#img-name");
const imgInputLink = formElementImg.querySelector("#img-link");
const imgButtonSubmit = formElementImg.querySelector(".form__button_img");

/** ПОПАПЫ */
/** Находим попап редактирования профиля в DOM */ 
const popupProfile = document.querySelector(".popup");
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
const submitButtonProfile = document.querySelector(".form__button")
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

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_invalid",
  inputErrorClass: "form__input_invalid",
  errorClass: "error",
};
const { inputSelector, ...rest } = validationConfig;

export {
  submitButtonProfile,
  validationConfig,
  cardList,
  cardTemplate,
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
