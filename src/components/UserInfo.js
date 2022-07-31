export class UserInfo {
    constructor(configUserInfo) {
        this._nameElement = document.querySelector(configUserInfo.firstnameSelector);
        this._aboutElement = document.querySelector(configUserInfo.jobAboutSelector);
        this._avatarElement=document.querySelector(configUserInfo.avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            about: this._aboutElement.textContent
        }

    }

    setUserInfo(name, about) {
        this._nameElement.textContent = name;
        this._aboutElement.textContent = about
    }

    setUserAvatar(url){
        this._avatarElement.src = url;
    }
}