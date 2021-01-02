class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.firts = null;
        this.last = null;
        this.length = 0;
    }


    peek() {
        return this.firts;
    }

    enqueue(value) {
        const node = new Node(value);
        if (!this.length) {
            this.firts = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return this;
    }

    // (*f) - * - *- (*l)
    dequeue() {
        this.firts = this.firts.next;
        this.length--;
        if (this.length === 0) {
         this.firts = null;
         this.last = null;   
        }
        return this;
    }

}

const queue = new Queue();

queue.enqueue('1');

queue.enqueue('2');


// console.log(stack.peek());

console.log(queue.dequeue());

console.log(queue.dequeue());