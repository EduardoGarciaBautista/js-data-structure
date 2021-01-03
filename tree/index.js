//       10 
//   4        20
// 2   8   17  170


class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return this;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }
//       10 
//   4        20
// 2   8   17  170
    
    search(value) {
        while(true) {
            let currentNode = this.root;
            if (value > currentNode.value) {
                if (value === currentNode.right.value) {
                    return currentNode.right;
                } else {
                    currentNode = currentNode.right;
                }
            } else {
                if (value === currentNode.left.value) {
                    return currentNode.left;
                } else {
                    currentNode = currentNode.left;
                } 
            }
        }
    }
}


const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(4);
tree.insert(2);
tree.insert(8);
tree.insert(20);


console.log(tree.search(20));
