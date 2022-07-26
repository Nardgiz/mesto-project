class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items;/**массив данных */
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }

    renderItems(items) {
        items.forEach((item) => {
            this._renderer(item)
        })
    }

    addItem(element) {
        this._containerSelector.prepend(element)
    }
}