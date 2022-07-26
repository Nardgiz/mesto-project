class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
    }

    openPopup() {
        this._popupSelector.classList.add("popup_opened");
        document.addEventListener("keydown", closeByEscape);
        this._popupSelector.addEventListener("mousedown", overlay);
    };

    //добавляем функцию для закрытия попапа
    closePopup() {
        this._popupSelector.classList.remove("popup_opened");
        document.removeEventListener("keydown", closeByEscape);
        this._popupSelector.removeEventListener("mousedown", overlay);
    };

    /**закрытие по esc*/
    closeByEscape(evt) {
        if (evt.key === "Escape") {
        const activePopup = document.querySelector(".popup_opened");
        this._closePopup(activePopup);
        }
    };

    setEventListeners() {}

}