import { Popup } from "./Popup.js";
import { picText, picPopupEl } from "../utils/constants.js"

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }

    openPopup(link, name) {
        picPopupEl.src = link;
        picPopupEl.alt = name;
        picText.textContent = name;
        super.openPopup();
    }

}