class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    getAll() {
        return this.data;
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);

        return item; //
    }

    shiftIndex(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    addInit(item) {
        for (let i = this.length; i > 0; i--) {
            const item = this.data[i - 1];
            this.data[i] = item;
        }
        this.data[0] = item;
        this.length++;
        return this.data;
    }
    deleteInit() {
        const deletedItem = this.data[0];
        delete this.data[0];
        this.length--;
        return deletedItem;
    }
}

const myArray = new MyArray();

myArray.push('UNO');
myArray.push('DOS');
myArray.push('TRES');
myArray.push('CUATRO');

// console.log(myArray.pop());

// console.log(myArray.delete(1));
console.log(myArray.addInit('LAST'));
console.log(myArray.deleteInit());