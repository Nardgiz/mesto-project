
// добавляем функцию, которая отвечает за открытие попап, отвечающего за редактирование профиля
const openPopup = function (popup) {
    popup.classList.add('popup_opened');
}
// добавляем функцию, которая удаляет картинки
const deleteImg = function (element) {
  element.remove();
}

// Находим попап редактирования профиля в DOM
const popupProfile = document.querySelector('.popup');
// Находим попап для добавления изображений
const imgPopup = document.querySelector('.popup_img');
// Находим попап для просмотра фото
const picPopup = document.querySelector('.popup_pic');

// функция, которая выводит в попап, указанные имя и деятельность
function addInfofromPopup(popup){
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
// добавляем свойство кнопке, которая должна открывать попап редактирования профиля
const popupButton = document.querySelector('.profile__button-rectangle');
popupButton.addEventListener('click', function(){
  openPopup(popupProfile);
  addInfofromPopup(popupProfile);
});
// добавляем свойство кнопке, которая должна открывать попап добавления изображения
const addImg = document.querySelector('.profile__button-pluss')
addImg.addEventListener('click', function(){
  openPopup(imgPopup);
});
// добавляем свойство кнопке, которая должна открывать попап просмотра фото
const picPopupCont = picPopup.querySelector('.popup__container_picture');
const picPopupEl = picPopupCont.querySelector('.popup__picture');
const picText = picPopupCont.querySelector('.popup__text');
picPopupEl.addEventListener('click', function(){
  openPopup(picPopupEl);
});

//добавляем функцию для закрытия попапа
const closePopup = function (popup) {
    popup.classList.remove('popup_opened');
}

//добавляем свойство кнопке, которая должна закрывать попап, отвечающий за редактирования профиля
const popupButtonClose = document.querySelector('.close-item');
popupButtonClose.addEventListener('click', function(){
  closePopup(popupProfile);
});
// добавляем закрытие попап, который добавляет изображения
const imgPopupClose = document.querySelector('.close-item_img');
imgPopupClose.addEventListener('click', function(){
  closePopup(imgPopup);
});
// добавляем закрытие попап, который просматривает изображения
const picPopupClose = document.querySelector('.close-item_pic');
picPopupClose.addEventListener('click', function(){
  closePopup(picPopup);
});

// Находим форму редактирования профиля в DOM
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('#first-name');
const jobInput = formElement.querySelector('#job');

// Находим значения имя и занятия в html коде
const profileName = document.querySelector('.profile__firstname');
const profileJob = document.querySelector('.profile__job');

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получаем значения полей jobInput и nameInput из свойства value и передаем их в html
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    // Добавляем кнопке сабмит еще функцию закрытия
    closePopup(popupProfile)
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 


// Работаем с добавлением карточек
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  //Добавляем функцию, которая будет открывать по клику попап для просмотра фотографий
  const clickImage = function(data) {
    picPopupEl.src = data.link;
    picText.textContent = data.name;
    openPopup(picPopup);
  }

 //находим в html секцию с разметкой для карточек
  const cardList = document.querySelector('.elements');
  const cardTemplate = document.querySelector('#element-template').content.querySelector('.element');
  // Находим форму для добавления картинок в DOM
  const formElementImg = document.querySelector('.form_img');
  const imgInputName = formElementImg.querySelector('#img-name');
  const imgInputLink = formElementImg.querySelector('#img-link');
  const imgButtonSubmit = formElementImg.querySelector('.form__button_img')

  const createCard = function(data){
      const cardElement = cardTemplate.cloneNode(true);
      const cardImage = cardElement.querySelector('.element__picture');
      const cardText = cardElement.querySelector('.element__text');
      const likeButton = cardElement.querySelector('.element__button');
      const rubbishButton = cardElement.querySelector('.element__button-rubbish');

      cardImage.src = data.link;
      cardText.textContent = data.name;
      
      cardImage.addEventListener('click', () => clickImage(data));
      
      //Добавляем работу лайк
      likeButton.addEventListener('click', function(evt){
        evt.target.classList.toggle('element__button_active');
      })

      //Добавляем работу rubbish
      rubbishButton.addEventListener('click', function(){
        deleteImg(cardElement);
      })
      return cardElement;
      
  }

  const renderCard = function(data, container) {
    const card = createCard(data);
    container.prepend(card);
  }
  
  initialCards.forEach(function(item){
    renderCard(item, cardList);
  })

// Обработчик «отправки» формы
  function formSubmitHandlerImg (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получаем значения полей jobInput  =и nameInput из свойства value и передаем их в html
    imgInputLink.value = cardImage.src;
     imgInputName.value = cardText.textContent;
    // Добавляем кнопке сабмит еще функцию закрытия
    
    closePopup(imgPopup)
};
imgButtonSubmit.addEventListener('submit', formSubmitHandlerImg);

formElementImg.addEventListener('submit', function(){
  imgInputLink.value = cardImage.src;
  imgInputName.value = cardText.textContent;
});
