export class Popup {
    constructor(popupSelector, buttonCloseClass, popupOpenedClass) {
        this._popupElement = document.querySelector(popupSelector);
        this._buttonCloseClass=buttonCloseClass;
        this._popupOpenClass=popupOpenedClass;
        this._closeByEscape = this._closeByEscape.bind(this);
    }

    openPopup() {
        this._popupElement.classList.add(this._popupOpenClass);
        document.addEventListener("keydown", this._closeByEscape);
    };

    //добавляем функцию для закрытия попапа
    closePopup() {
        this._popupElement.classList.remove(this._popupOpenClass);
        document.removeEventListener("keydown", this._closeByEscape);

    };

    /**закрытие по esc*/
    _closeByEscape(evt) {
        if (evt.key === "Escape") {
        this.closePopup();
        }
    };

    /**слушатель на крестик и работа с оверлей */

    setEventListeners() {
        this._popupElement.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains(this._buttonCloseClass)) {
                this.closePopup();
            };
            if (evt.target.classList.contains(this._popupOpenClass)) {
                this.closePopup();
            };
           
        });
      }
}