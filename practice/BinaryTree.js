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
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        // Go left
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        // Go right
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }

    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // Node found

        // Case 1: No right child
        if (!currentNode.right) {
          if (!parentNode) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else {
              parentNode.right = currentNode.left;
            }
          }

          // Case 2: Right child with no left child
        } else if (!currentNode.right.left) {
          currentNode.right.left = currentNode.left;

          if (!parentNode) {
            this.root = currentNode.right;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else {
              parentNode.right = currentNode.right;
            }
          }

          // Case 3: Right child with a left child
        } else {
          // Find the leftmost child of the right subtree
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;

          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          // Move the leftmost's right subtree
          leftmostParent.left = leftmost.right;

          // Rewire the leftmost node to be the new root of the current node's subtree
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (!parentNode) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else {
              parentNode.right = leftmost;
            }
          }
        }

        return true;
      }
    }

    return false;
  }

  printTree(node = this.root, prefix = "", isLeft = true) {
    if (node === null) return;

    if (node.right !== null) {
      this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }

    console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

    if (node.left !== null) {
      this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }
  }
}

// Example usage
const BinaryTree = new BinarySearchTree();
BinaryTree.insert(9);
BinaryTree.insert(4);
BinaryTree.insert(6);
BinaryTree.insert(20);
BinaryTree.insert(170);
BinaryTree.insert(15);
BinaryTree.insert(1);

BinaryTree.remove(6); // Try removing a leaf
BinaryTree.remove(20); // Try removing a node with one child
BinaryTree.remove(9); // Try removing the root node with two children

console.log("-------------");
BinaryTree.printTree();
