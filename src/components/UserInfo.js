export class UserInfo {
    constructor(configUserInfo) {
        this._nameElement = document.querySelector(configUserInfo.firstnameSelector);
        this._aboutElement = document.querySelector(configUserInfo.jobAboutSelector);
        this._avatarElement=document.querySelector(configUserInfo.avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            about: this._aboutElement.textContent,
            //avatar: this._avatarElement.src
        }

    }

    setUserInfo({name, about, /* avatar */}) {
        this._nameElement.textContent = name;
        this._aboutElement.textContent = about;
        //this._avatarElement.src = avatar
    }

    setUserAvatar(url){
        this._avatarElement.src=url;
    }
}