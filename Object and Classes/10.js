class Stringer {

    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
        this.initialString = string;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength - length < 0) {
            this.innerLength = 0;
        }
        else {
            this.innerLength -= length
        }
    }

    toString(){

        if (this.innerLength === 0) {
            return '...';
        }
        if (this.initialString.length <= this.innerLength) {
            return this.initialString;
        }
        else{
            this.initialString = this.initialString.substr(0,this.innerLength);
            this.initialString += '...';
            return this.initialString;
        }
    }
}

let text = new Stringer("Mitko",0);
console.log(text.toString());