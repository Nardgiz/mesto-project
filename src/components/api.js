const config = {
  url: "https://mesto.nomoreparties.co/v1/plus-cohort-13",
  headers: {
    authorization: "d1d14902-c78a-4d00-aa9d-9b64f78ed110",
    "Content-type": "application/json"
  },
};
/** функция по проверке промисов */
const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res);
};
/** 3.загрузка инфо о пользователе с сервера */
function getProfileInfo() {
  return fetch(`${config.url}/users/me`, {
    method: "GET",
    headers: config.headers
  }).then((res) => onResponse(res));;
}
/** 4.загрузка карточек с сервера */
function getAllCards() {
  return fetch(`${config.url}/cards`, {
    method: "GET",
    headers: config.headers
  }).then((res) => onResponse(res));;
}

function getAllInfo() {
  return Promise.all([getAllCards(), getProfileInfo()]);
}

/** 5.редактирование рофиля */
function editProfileForm(data) {
    return fetch(`${config.url}/users/me`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify(data),
    }).then((res) => onResponse(res));;
  }

/** 6.добавление новой карточки */
function addCard(data) {
  return fetch(`${config.url}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(data),
  }).then((res) => onResponse(res));;
}

/** 8.удаление карточки */
function removeCard(cardId) {
  return fetch(`${config.url}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers
  }).then((res) => onResponse(res));;
}
/** 9.постановка или удаление лайка */
function changeLikeStatus(dataId, isLike) {
    return fetch(`${config.url}/cards/likes/${dataId}`, {
      method: isLike ? "DELETE" : "PUT",
      headers: config.headers
    }).then((res) => onResponse(res));;
  }
/** 10.обновление аватара пользователя */
function editProfileAvatar(data) {
  return fetch(`${config.url}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(data)
  }).then((res) => onResponse(res));;
}

export {
  changeLikeStatus,
  editProfileForm,
  removeCard,
  addCard,
  getAllInfo,
  getAllCards,
  getProfileInfo,
  editProfileAvatar
};
