class List {

    constructor() {
        this._list = [];
        this.size = 0;
    }

    add(element) {
        this._list.push(element);
        this._list.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        this._indexValidation(index);
        this._list.splice(index,1);
        this.size--;
    }

    get(index) {
        this._indexValidation(index);
        return this._list[index];
    }

    _indexValidation(index) {

        if (index < 0 || index >= this._list.length) {
            throw new Error('Index out of range!!');
        }
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
