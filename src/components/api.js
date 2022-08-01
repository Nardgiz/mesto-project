
export class Api {
/** функция по проверке промисов */
#onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res);
};
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

/** 3.загрузка инфо о пользователе с сервера */
getProfileInfo() {
  return fetch(`${this._url}/users/me`, {
    method: "GET",
    headers: this._headers
  })
  .then((res) => this.#onResponse(res));;
}
/** 4.загрузка карточек с сервера */
getAllCards() {
  return fetch(`${this._url}/cards`, {
    method: "GET",
    headers: this._headers
  })
  .then((res) => this.#onResponse(res));;
}
getAllInfo() {
  return Promise.all([this.getAllCards(), this.getProfileInfo()]);
}

/** 5.редактирование рофиля */
editProfileForm(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    })
    .then((res) => this.#onResponse(res));;
  }

/** 6.добавление новой карточки */
addCard(data) {
  return fetch(`${this._url}/cards`, {
    method: "POST",
    headers: this._headers,
    body: JSON.stringify(data),
  })
  .then((res) => this.#onResponse(res));;
}

/** 8.удаление карточки */
removeCard(cardId) {
  return fetch(`${this._url}/cards/${cardId}`, {
    method: "DELETE",
    headers: this._headers
  })
  .then((res) => this.#onResponse(res));;
}
/** 9.постановка или удаление лайка */
changeLikeStatus(dataId, isLike) {
    return fetch(`${this._url}/cards/likes/${dataId}`, {
      method: isLike ? "DELETE" : "PUT",
      headers: this._headers
    })
    .then((res) => this.#onResponse(res));;
  }
/** 10.обновление аватара пользователя */
editProfileAvatar(data) {
  return fetch(`${this._url}/users/me/avatar`, {
    method: "PATCH",
    headers: this._headers,
    body: JSON.stringify(data)
  })
  .then((res) => this.#onResponse(res));;
}
}
