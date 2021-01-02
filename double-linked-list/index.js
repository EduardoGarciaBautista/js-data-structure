

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class SingleLinkedList {
    constructor(value) {

        // Null value is for the next value in append function
        this.head = {
            value,
            next: null,
            prev: null
        }

        // Tail will be head, so tail is the value to modify
        this.tail = this.head;

        this.length = 1;
    }

    // * - * - * - (*)
    append(value) {
        const node = new Node(value);

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.length++;

        return this;
    }


}

const myLinkedList = new SingleLinkedList('Eduardo');

myLinkedList.append('Jose');

myLinkedList.append('Juan');


