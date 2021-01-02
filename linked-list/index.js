// Linked list looks like -->

// let singlyLiknkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: null,
//                 }
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class SingleLinkedList {
    constructor(value) {

        // Null value is for the next value in append function
        this.head = {
            value,
            next: null
        }

        // Tail will be head, so tail is the value to modify
        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;

        return this;
    }
    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }

    insert(value, index) {

        // * - (*fp) - (*hp)
        //         (*nn)
        if (index >= this.length) {
            return this.append(value);
        }

        const node = new Node(value);

        const firstPointer = this.getIndex(index - 1);

        const holdingPointer = firstPointer.next;

        firstPointer.next = node;
        node.next = holdingPointer;
        this.length++;

        return this;

    }

    getIndex(index) {
        let counter = 0;

        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        // * - * - * - (*);

        console.log(this.length);
    

        let lastNode = this.getIndex(index);

        let tailNode = this.getIndex(index + 1);

        lastNode.next = tailNode;

        if (index === 0) {
            this.head = tailNode;
        }
        if (index === (this.length -1)) {
            tailNode = this.getIndex(index -1);
            this.tail = tailNode;
            this.tail.next = null;
        }

        this.length--;

        return this;

    }

}

const myLinkedList = new SingleLinkedList('Eduardo');

myLinkedList.append('Jose');

myLinkedList.append('Juan');


// myLinkedList.prepend('0');

// myLinkedList.insert('nue vooo', 1);


//myLinkedList.insert('midd', 2);


myLinkedList.remove(2);

console.log(myLinkedList);