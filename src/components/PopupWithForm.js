import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = () => {}

    }

    _getInputValues() {
        const allFormInputs = this._popupSelector.querySelectorAll('.form__input');
        return allFormInputs.forEach((formInput) => {
            formInput.value = formInput.data
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', /**функция сабмита форм */)
    }

    closePopup() {
        super.closePopup();
        const allForms = document.querySelectorAll('.form');
        return allForms.forEach((form) => {
            form.reset()
        })
    }

}