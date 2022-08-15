import { Popup } from "./Popup.js";

export class PopupWithRequestApprove extends Popup {
    
    constructor(popupSelector,buttonCloseClass, popupOpenedClass, buttonSelector, {clickApproveButton}) {
        super(popupSelector, buttonCloseClass, popupOpenedClass);
        this._inputData={};
        this._clickApproveButton=clickApproveButton;
        this._buttonElement=this._popupElement.querySelector(buttonSelector);
        this._submitBtnText = this._buttonElement.textContent;
    }

    openPopup(inputData) {
        this._inputData=inputData;
        super.openPopup();
    };

    setEventListeners() {
        super.setEventListeners();
        this._buttonElement.addEventListener('click', (evt) => this._clickApproveButton(evt, this._inputData));
    }

    closePopup() {
        super.closePopup();
        this._inputData={};
    }

    loadSubmitButton(isLoading, loadingText = 'Да...') {
        if (isLoading) {
            this._buttonElement.textContent = loadingText;
        } else {
            this._buttonElement.textContent = this._submitBtnText;
        }
      };

}