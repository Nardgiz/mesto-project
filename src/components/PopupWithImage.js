import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector,buttonCloseClass, popupOpenedClass, configPopupImage) {
        super(popupSelector, buttonCloseClass, popupOpenedClass);
        this._popupImageElement=this._popupElement.querySelector(configPopupImage.image);
        this._popupImageTextElement=this._popupElement.querySelector(configPopupImage.text);
    }

    openPopup(cardInfo) {
        this._popupImageElement.src = cardInfo.link;
        this._popupImageElement.alt = cardInfo.name;
        this._popupImageTextElement.textContent = cardInfo.name;
        super.openPopup();
    }
}