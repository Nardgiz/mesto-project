export class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
    }

    openPopup() {
        this._popupSelector.classList.add("popup_opened");
        document.addEventListener("keydown", this._closeByEscape);
        //this._popupSelector.addEventListener("mousedown", overlay);
    };

    //добавляем функцию для закрытия попапа
    closePopup() {
        this._popupSelector.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._closeByEscape);
       // this._popupSelector.removeEventListener("mousedown", overlay);
    };

    /**закрытие по esc*/
    _closeByEscape(evt) {
        if (evt.key === "Escape") {
        const activePopup = document.querySelector(".popup_opened");
        this._closePopup(activePopup);
        }
    };

    /**слушатель на крестик и работа с оверлей */

    setEventListeners() {
        this._popupSelector.addEventListener('mousedown', (evt) => {
            const allCrosses = document.querySelectorAll('.close-item');
            const cross = allCrosses.forEach((cross) => {
              cross.addEventListener('click', closePopup)
            });
            const activePopup = document.querySelector(".popup_opened");
            if (evt.target.classList.contains(cross)) {
                this.closePopup();
            }
            if (evt.target.classList.contains("popup") ||
            evt.target.classList.contains("close-item")) {
                this.closePopup(activePopup);
            };
            })
      }
}