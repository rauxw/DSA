class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        //go left
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        //go right
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
  display(node = this.root, prefix = "", isLeft = true) {
    if (node === null) return;

    if (node.right) {
      this.display(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }

    console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

    if (node.left) {
      this.display(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }
  }
}

const BTree = new BinaryTree();

BTree.insert(5);
BTree.insert(10);
BTree.insert(20);
BTree.insert(6);
BTree.insert(3);
BTree.insert(2);
BTree.insert(4);
BTree.display();
