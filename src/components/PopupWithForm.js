import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector,buttonCloseClass, popupOpenedClass, popupFormsSelectors, {submitEditProfileForm}) {
        super(popupSelector, buttonCloseClass, popupOpenedClass);
        this._formSubmitHandler = submitEditProfileForm;
        this._formInputsElements=this._popupElement.querySelectorAll(popupFormsSelectors.input);
        this._formsElements=document.querySelectorAll(popupFormsSelectors.form);

    }


    setDefaultValues({name, about}){
        this._formInputsElements[0].value=name;
        this._formInputsElements[1].value=about;
    }

    _getInputValues() {
        const formInputsValue=Array.from(this._formInputsElements).map(item=> {
            return item.value})
        return formInputsValue
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (evt) => this._formSubmitHandler(evt, this._getInputValues()));
    }

    closePopup() {
        super.closePopup();
        return this._formsElements.forEach((form) => {
            form.reset()
        })
    }

}