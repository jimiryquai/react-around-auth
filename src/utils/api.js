class Api {
	constructor({ baseUrl, headers }) {
		this._baseUrl = baseUrl;
		this._headers = headers;
	}

	getCardList() {
		return fetch(`${this._baseUrl}/cards`, {
			headers: this._headers,
		}).then((res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)));
	}

	getUserInfo() {
		return fetch(`${this._baseUrl}/users/me`, {
			headers: this._headers,
		}).then((res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)));
	}

	getAppInfo() {
		return Promise.all([this.getCardList(), this.getUserInfo()]);
	}

	addCard({ name, link }) {
		return fetch(`${this._baseUrl}/cards`, {
			headers: this._headers,
			method: 'POST',
			body: JSON.stringify({
				name,
				link,
			}),
		}).then((res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)));
	}

	removeCard(cardId) {
		return fetch(`${this._baseUrl}/cards/` + cardId, {
			headers: this._headers,
			method: 'DELETE',
		}).then((res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)));
	}

	changeCardLikeStatus(cardId, cardLiked) {
		return fetch(`${this._baseUrl}/cards/likes/` + cardId, {
			headers: this._headers,
			method: cardLiked ? 'PUT' : 'DELETE',
		}).then((res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)));
	}

	setUserInfo({ name, about }) {
		return fetch(`${this._baseUrl}/users/me`, {
			headers: this._headers,
			method: 'PATCH',
			body: JSON.stringify({
				name,
				about,
			}),
		}).then((res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)));
	}

	setUserAvatar({ avatar }) {
		return fetch(`${this._baseUrl}/users/me/avatar`, {
			headers: this._headers,
			method: 'PATCH',
			body: JSON.stringify({
				avatar,
			}),
		}).then((res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)));
	}
}

// Api class instantiated only once (singleton pattern)
const api = new Api({
	baseUrl: 'https://around.nomoreparties.co/v1/group-9',
	headers: {
		authorization: '68927198-85ad-496d-8f9c-4cee8f16e3cd',
		'Content-Type': 'application/json',
	},
});

export default api;
