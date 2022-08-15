import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector,buttonCloseClass, popupOpenedClass, popupFormsSelectors, {submitEditProfileForm}) {
        super(popupSelector, buttonCloseClass, popupOpenedClass);
        this._formSubmitHandler = submitEditProfileForm;
        this._formInputsElements=this._popupElement.querySelectorAll(`.${popupFormsSelectors.input}`);
        this._formElement=this._popupElement.querySelector('.form');
        this._submitBtn = this._popupElement.querySelector('.form__button');
        this._submitBtnText = this._submitBtn.textContent;
    }


    setDefaultValues(data){
      this._formInputsElements.forEach(input=>{
        input.value= data[input.name];
      });
    }

    _getInputValues() {
        this._formValues = {};

        this._formInputsElements.forEach(input => {
          this._formValues[input.name] = input.value;
        });

        return this._formValues;
      }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (evt) => this._formSubmitHandler(evt, this._getInputValues()));
    }

    closePopup() {
        super.closePopup();
        setTimeout(()=>this._formElement.reset(),600)
    }

    loadSubmitButton(isLoading, loadingText = 'Сохранение...') {
      if (isLoading) {
        this._submitBtn.textContent = loadingText;
      } else {
        this._submitBtn.textContent = this._submitBtnText;
      }
    };
    
/*     loadSubmitButton = (isLoading) => {
      if (isLoading) {
        this._submitButton.textContent+='...';
      } else {
          this._submitButton.textContent=this._submitButton.textContent.slice(0,-3);
        }
    }; */

}