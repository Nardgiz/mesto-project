export default class Section {
    constructor({data, renderer}, selector){
        this._renderedItems=data;
        this._renderer=renderer;
        this._container=document.querySelector(selector);
    };
    
    renderItems(userId){
        this._renderedItems.forEach((item) => this._renderer(item, userId));
    };

    setItem(item){
        this._container.prepend(item);
    }

}