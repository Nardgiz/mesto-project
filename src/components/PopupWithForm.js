import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector,buttonCloseClass, popupOpenedClass, popupFormsSelectors, {submitEditProfileForm}) {
        super(popupSelector, buttonCloseClass, popupOpenedClass);
        this._formSubmitHandler = submitEditProfileForm;
        this._formInputsElements=this._popupElement.querySelectorAll(`.${popupFormsSelectors.input}`);
        this._formsElement=this._popupElement.querySelector('.form');
        this._submitBtn = this._popupElement.querySelector('.form__button');
        this._submitBtnText = this._submitBtn.textContent;
    }


    setDefaultValues({name, about}){
        this._formInputsElements[0].value=name;
        this._formInputsElements[1].value=about;
    }

/*     setDefaultValues(data) {
        this._formInputsElements.forEach((input) => {
          // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
          input.value = data[input.name];
        });
      } */

    _getInputValues() {
        const formInputsValue=Array.from(this._formInputsElements).map(item=> {
            return item.value})
        return formInputsValue
    }

/*     _getInputValues() {
        // создаём пустой объект
        this._formValues = {};
      
        // добавляем в этот объект значения всех полей
        this._formInputsElements.forEach(input => {
          this._formValues[input.name] = input.value;
        });
      
        // возвращаем объект значений
        return this._formValues;
      } */

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (evt) => this._formSubmitHandler(evt, this._getInputValues()));
    }

    closePopup() {
        super.closePopup();
        setTimeout(()=>{this._formsElement.reset()
        },600)
    }

    loadSubmitButton(isLoading, loadingText = 'Сохранение...') {
          if (isLoading) {
            this._submitBtn.textContent = loadingText;
          } else {
            this._submitBtn.textContent = this._submitBtnText;
          }
        };

}