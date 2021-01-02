class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }


    peek() {
        return this.top;
    }

    // * -
    // *
    // * 
    // * 

    pop() {

        this.top = this.top.next;
        this.length--;
        if (this.length === 0) {
            this.bottom = null;
        }
        return this;
    }
    
    // (*) new node 
    // *
    // * 
    // * 
    push(value) {
        const node = new Node(value);
        if (!this.length){
            this.top = node;
            this.bottom = node;
        } else {
            const holdingPointer = this.top;
            this.top = node;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

}

const stack = new Stack();

stack.push('1');

stack.push('2');

stack.push('3');

stack.push('4');


console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());