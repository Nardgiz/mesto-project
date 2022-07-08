const config = {
    url: "https://nomoreparties.co/v1/plus-cohort-13",
    headers: {
        "Content-type": "application/json",
        autorisation: "d1d14902-c78a-4d00-aa9d-9b64f78ed110",
    }
}

const onResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res)
};

export function getAllCards() {
    return fetch(`${config.url}/cards`, {
        headers: config.headers,
    })
    .then(onResponse);
}

export function getProfileInfo() {
    return fetch(`${config.url}/users/me`, {
        headers: config.headers,
    })
    .then(onResponse);
} 

export function getAllInfo() {
    return Promise.all([getAllCards(), getProfileInfo()])
}

export function addCard(data) {
    return fetch(`${config.url}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(data)
    })
    .then(onResponse)
}

export function removeCard(dataId) {
    return fetch(`${config.url}/cards/${dataId}`, {
        method: 'DELETE',
        headers: config.headers,
    })
    .then(onResponse)
}

export function editProfileForm(dataId) {
    return fetch(`${config.url}/users/me`, {
        method: 'PUT',
        headers: config.headers,
        body: JSON.stringify(data)
    })
    .then(onResponse)
}



export function addLike(dataId) {
    return fetch(`${config.url}/cards/likes/${dataId}` {,
    method: 'PUT',
    headers: config.headers,
})
.then(onResponse);
}

export function deleteLike(dataId) {
    return fetch(`${config.url}/cards/likes/${dataId}` {,
    method: 'DELETE',
    headers: config.headers,
})
.then(onResponse);
}