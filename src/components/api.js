const config = {
  url: "https://nomoreparties.co/v1/plus-cohort-13",
  headers: {
    autorisation: "d1d14902-c78a-4d00-aa9d-9b64f78ed110",
    "Content-type": "application/json",
  },
};

const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res);
};
/** 3.загрузка инфо о пользователе с сервера */
function getProfileInfo() {
  return fetch(`${config.url}/users/me`, {
    method: "GET",
    headers: {
        autorisation: "d1d14902-c78a-4d00-aa9d-9b64f78ed110",
        "Content-type": "application/json",
    }
  }).then(onResponse);
}
/** 4.загрузка карточек с сервера */
function getAllCards() {
  return fetch(`${config.url}/cards`, {
    method: "GET",
    headers: {
        autorisation: "d1d14902-c78a-4d00-aa9d-9b64f78ed110",
        "Content-type": "application/json",
    }
  }).then(onResponse);
}
/** 5.редактирование рофиля */
function editProfileForm(dataId) {
    return fetch(`${config.url}/users/me`, {
      method: "PATCH",
      headers: {
        autorisation: "d1d14902-c78a-4d00-aa9d-9b64f78ed110",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: '',
        about: ''
      }),
    }).then(onResponse);
  }

function getAllInfo() {
  return Promise.all([getAllCards(), getProfileInfo()]);
}
/** 6.добавление новой карточки */
function addCard(data) {
  return fetch(`${config.url}/cards`, {
    method: "POST",
    headers: {
        autorisation: "d1d14902-c78a-4d00-aa9d-9b64f78ed110",
        "Content-type": "application/json",
    },
    body: JSON.stringify({
        name: '',
        link: ''
    }),
  }).then(onResponse);
}
/** 7.отображение количества лайков */

/** 8.удаление карточки */
function removeCard(dataId) {
  return fetch(`${config.url}/cards/${dataId}`, {
    method: "DELETE",
    headers: {
        autorisation: "d1d14902-c78a-4d00-aa9d-9b64f78ed110",
        "Content-type": "application/json",
    }
  }).then(onResponse);
}
/** 9.постановка или удаление лайка */
function changeLikeStatus(dataId, isLiked) {
    return fetch(`${config.url}/cards/likes/${dataId}`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: {
          autorisation: "d1d14902-c78a-4d00-aa9d-9b64f78ed110",
          "Content-type": "application/json",
      }
    }).then(onResponse);
  }

/** 10.обновление аватара пользователя */

export {
  changeLikeStatus,
  editProfileForm,
  removeCard,
  addCard,
  getAllInfo,
  getAllCards,
  getProfileInfo,
};
