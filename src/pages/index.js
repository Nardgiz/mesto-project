import "./index.css";
import {
  initialCards,
  cardList,
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
} from "../utils/constants.js";

import { addInfofromPopup, openPopup, closePopup, closeByCross } from "../components/modal";
import { toggleButtonState } from "../components/validation.js";
import { setEventListers } from "../components/validation";
import {
  createAvatar,
  createCard,
  handleChangeLikeStatus,
  handleDeleteCard,
} from "../components/card.js";
import {
  getAllInfo,
  addCard,
  changeLikeStatus,
  editProfileAvatar,
  getProfileInfo,
  editProfileForm,
  removeCard
} from "../components/api.js";

import { loadSubmitButton } from "../utils/utils.js"

let userId = null;

/** функция, которая создает новую карточку */
function renderCard(data, container, userId) {
  const card = createCard(
    data,
    userId,
    handleChangeLikeStatus,
    handleDeleteCard
  );
  container.prepend(card);
};

/**получаем информацию о пользователи и о загруженных карточках */
getAllInfo().then(([cards, user]) => {
  setUserInfo({
    userName: user.name,
    userDescription: user.about,
    userAvatar: user.avatar
  })
  userId = user._id;
  /**получаем от сервера карточки и вызываем на них метод рендера каждой */
  cards.reverse().forEach((card) => {
    renderCard(card, cardList, userId);
  });
});
/** открытие попапа аватара */
avatarOpenButton.addEventListener("click", () => {
  openPopup(popupAvatar);
});

/** открытие попапа редактирования */
popupButton.addEventListener("click", function () {
  openPopup(popupProfile);
  addInfofromPopup(popupProfile);
});
/** закрытие попап редактирования профиля */
popupButtonClose.addEventListener("click", function () {
  closePopup(popupProfile);
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
export function submitEditProfileForm(evt) {
  evt.preventDefault();
  const newDataUser = {
    name: nameInput.value,
    about: jobInput.value,
  }
  loadSubmitButton(popupProfile, true);
  editProfileForm(newDataUser)
    .then((data) => {
      setUserInfo({
        userName: data.name,
        userDescription: data.about,
      })
      closePopup(popupProfile);  
    })
    .catch((err) => {
      console.log(`Ошибка загрузки данных ${err}`)
    })
    .finally(() => {
      loadSubmitButton(popupProfile, false);
    })
    toggleButtonState(submitButtonProfile, false, validationConfig);
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
  addCard(newCard)
    .then((data) => {
      renderCard(data, cardList, userId);
      closePopup(popupAddCard);
      formElementImg.reset();
    })
    .catch((err) => {
      console.log(`Ошибка загрузки данных ${err.status}`)
    })
    .finally(() => {
      loadSubmitButton(popupAddCard, false);
    })  
  toggleButtonState(imgButtonSubmit, false, validationConfig);
}
formElementImg.addEventListener("submit", formSubmitHandlerImg);

/** Обработчик «отправки» формы для аватара */
export function formSubmitHandlerAvatar(evt) {
  evt.preventDefault();
  const newAvatar = {
    avatar: avatarInput.value,
  }
  loadSubmitButton(popupAvatar, true);
  editProfileAvatar(newAvatar)
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

  toggleButtonState(avatarButtonSubmit, false, validationConfig);
};
avatarButtonSubmit.addEventListener("click", formSubmitHandlerAvatar);

/**проверка инпутов форм на валидность */
const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);
  Array.from(forms).forEach((formElement) => {
    setEventListers(formElement, config);
  })
}
enableValidation(validationConfig);
