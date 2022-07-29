import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmitHandler) {
        super(popupSelector);
        this._formSubmitHandler = (evt) => {
            formSubmitHandler(evt);
        }

    }

    _getInputValues() {
        const allFormInputs = this._popupSelector.querySelectorAll('.form__input');
        return allFormInputs.forEach((formInput) => {
            formInput.value = formInput.data
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', this._formSubmitHandler);
    }

    closePopup() {
        super.closePopup();
        const allForms = document.querySelectorAll('.form');
        return allForms.forEach((form) => {
            form.reset()
        })
    }

}