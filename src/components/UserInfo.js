export class UserInfo {
    constructor(configUserInfo) {
        this._nameElement = document.querySelector(configUserInfo.firstnameSelector);
        this._aboutElement = document.querySelector(configUserInfo.jobAboutSelector);
        this._avatarElement=document.querySelector(configUserInfo.avatarSelector);
        this._userId='';
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            about: this._aboutElement.textContent,
            id:this._userId,
            avatar: this._avatarElement.src
        }

    }

    setUserInfo({name, about, avatar, _id}) {
        this._nameElement.textContent = name;
        this._aboutElement.textContent = about;
        this._avatarElement.src = avatar;
        this._userId = _id;
    }

}