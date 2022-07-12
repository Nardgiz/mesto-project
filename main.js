(()=>{"use strict";var e=document.querySelector(".elements"),t=document.querySelector("#element-template").content.querySelector(".element"),n=document.querySelector(".form_img"),r=n.querySelector("#img-name"),o=n.querySelector("#img-link"),c=n.querySelector(".form__button_img"),u=document.querySelector(".profile__avatar"),a=document.querySelector(".profile__avatar-button"),i=document.querySelector(".form__button_avatar"),l=document.querySelector(".form_avatar"),s=document.querySelector(".popup_avatar"),d=document.querySelector(".form__input_avatar"),m=document.querySelector(".popup"),f=document.querySelector(".close-item"),v=document.querySelector(".popup_img"),p=document.querySelector(".popup_pic"),_=document.querySelector(".profile__button-rectangle"),y=document.querySelector(".profile__button-pluss"),h=document.querySelector(".form__button"),S=p.querySelector(".popup__container_picture"),b=S.querySelector(".popup__picture"),q=S.querySelector(".popup__text"),E=document.querySelector(".close-item_img"),L=(document.querySelector(".close-item_pic"),document.querySelector(".form")),g=L.querySelector("#first-name"),k=L.querySelector("#job"),C=document.querySelector(".profile__firstname"),A=document.querySelector(".profile__job"),x={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_invalid",inputErrorClass:"form__input_invalid",errorClass:"error"},w=function(e){var t=e.userName,n=e.userDescription,r=e.userAvatar;t&&(C.textContent=t),n&&(A.textContent=n),r&&(u.src=r)},D=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");N(t)}},T=function(e){var t=document.querySelector(".popup_opened");(e.target.classList.contains("popup")||e.target.classList.contains("close-item"))&&N(t)},j=function(e){e.classList.add("popup_opened"),document.addEventListener("keydown",D),e.addEventListener("mousedown",T)},N=function(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",D),e.removeEventListener("mousedown",T)},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;t?(e.classList.remove(n.inactiveButtonClass),e.disabled=!1):(e.classList.add(n.inactiveButtonClass),e.disabled="disabled")},O={url:"https://mesto.nomoreparties.co/v1/plus-cohort-13",headers:{authorization:"d1d14902-c78a-4d00-aa9d-9b64f78ed110","Content-type":"application/json"}},P=function(e){return e.ok?e.json():Promise.reject(e)},I=function(e,t,n){var r=e.querySelector(".element__button");e.querySelector(".element__like-amount").textContent=t.length,function(e,t){return Boolean(e.find((function(e){return e._id===t})))}(t,n)?r.classList.add("element__button_active"):r.classList.remove("element__button_active")},J=function(e,t,n,r){var o,c;(o=e,c=t,fetch("".concat(O.url,"/cards/likes/").concat(o),{method:c?"DELETE":"PUT",headers:O.headers}).then(P)).then((function(e){I(n,e.likes,r)})).catch((function(e){console.log("Ошибка работы лайк ".concat(e.status))}))},G=function(e,t){(function(e){return fetch("".concat(O.url,"/cards/").concat(e),{method:"DELETE",headers:O.headers}).then(P)})(t).then((function(){e.remove()})).catch((function(e){console.log("Ошибка при удалении ".concat(e.status))}))};function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=null;function U(e,n,r){var o=function(e,n,r,o){var c=t.cloneNode(!0),u=c.querySelector(".element__picture"),a=c.querySelector(".element__text"),i=c.querySelector(".element__button"),l=c.querySelector(".element__button-rubbish");return u.src=e.link,u.alt=e.name,a.textContent=e.name,I(c,e.likes,n),e.owner._id!==n&&l.remove(),u.addEventListener("click",(function(){return function(e){b.src=e.link,b.alt=e.name,q.textContent=e.name,j(p)}(e)})),i.addEventListener("click",(function(){r(e._id,i.classList.contains("element__button_active"),c,n)})),l.addEventListener("click",(function(){o(c,e._id)})),c}(e,r,J,G);n.prepend(o)}Promise.all([fetch("".concat(O.url,"/cards"),{method:"GET",headers:O.headers}).then(P),fetch("".concat(O.url,"/users/me"),{method:"GET",headers:O.headers}).then(P)]).then((function(t){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return c}}(n,r)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],u=o[1];w({userName:u.name,userDescription:u.about,userAvatar:u.avatar}),M=u._id,c.reverse().forEach((function(t){U(t,e,M)}))})),a.addEventListener("click",(function(){j(s),V(i)})),_.addEventListener("click",(function(){j(m),g.value=C.textContent,k.value=A.textContent,V(h)})),f.addEventListener("click",(function(){N(m)})),y.addEventListener("click",(function(){j(v),V(c)})),E.addEventListener("click",(function(){N(v)})),L.addEventListener("submit",z),b.addEventListener("click",(function(){j(b)}));var V=function(e){e.addEventListener("click",(function(){e.value="Сохранение..."})),e.value="Сохранить"};function z(e){var t;e.preventDefault(),(t={name:g.value,about:k.value},fetch("".concat(O.url,"/users/me"),{method:"PATCH",headers:O.headers,body:JSON.stringify(t)}).then(P)).then((function(e){w({userName:e.name,userDescription:e.about})})).catch((function(e){console.log("Ошибка загрузки данных ".concat(e.status))})),N(m)}h.addEventListener("submit",z),n.addEventListener("submit",(function(t){var u;t.preventDefault(),(u={name:r.value,link:o.value},fetch("".concat(O.url,"/cards"),{method:"POST",headers:O.headers,body:JSON.stringify(u)}).then(P)).then((function(t){U(t,e,M),N(v),n.reset()})).catch((function(e){console.log("Ошибка загрузки данных ".concat(e.status))})),B(c,!1,x)})),i.addEventListener("click",(function(e){var t;e.preventDefault(),(t={avatar:d.value},fetch("".concat(O.url,"/users/me/avatar"),{method:"PATCH",headers:O.headers,body:JSON.stringify(t)}).then(P)).then((function(e){w({userAvatar:e.avatar}),N(s),l.reset()})).catch((function(e){console.log("Ошибка загрузки данных ".concat(e.status))})),B(i,!1,x)})),function(e){var t=document.querySelectorAll(e.formSelector);Array.from(t).forEach((function(t){!function(e,t){var n=e.querySelectorAll(t.inputSelector),r=e.querySelector(t.submitButtonSelector);B(r,e.checkValidity(),t),Array.from(n).forEach((function(n){n.addEventListener("input",(function(){var o=e.checkValidity();!function(e,t,n){var r=!t.validity.valid,o=e.querySelector("#".concat(t.id,"-error"));r?function(e,t,n){e.textContent=t.validationMessage,t.classList.add(n.inputErrorClass)}(o,t,n):function(e,t,n){e.textContent="",t.classList.remove(n.inputErrorClass)}(o,t,n)}(e,n,t),B(r,o,t)}))})),e.addEventListener("submit",(function(e){e.preventDefault()}))}(t,e)}))}(x)})();
//# sourceMappingURL=main.js.map