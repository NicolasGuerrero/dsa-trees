class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this
    }
    let current = this.root;

    while (true) {  // helper(current)
      if (current.val > val) {
        if (!current.left) {
          current.left = new Node(val);
          break
        }
        current = current.left;  //helper(current.left)
      }  //else if
      if (current.val < val) {
        if (!current.right) {
          current.right = new Node(val);
          break;
        }
        current = current.right;
      }
    }
    //helper(this.root);
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this
    }
    
    function helper(current) {
      if (current.val > val) {
        if (!current.left) {
          current.left = new Node(val);
        }
        helper(current.left);
      } else if (current.val < val) {
        if (!current.right) {
          current.right = new Node(val);
        }
        helper(current.right);
      }
    }

    helper(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) 
        return current;

      current = val < current.val
                ? current.left
                : current.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

    function helper(current) {
      if(!current) return;

      if(current.val === val) {
        return current;
      }
      return val < current.val ? helper(current.left) : helper(current.right);

    }

    return helper(this.root);

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let out = [];
    function traverse(node) {
      out.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return out;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let out = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      out.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return out;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let out = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      out.push(node.val);
    }
    traverse(this.root);
    return out;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let out = [];

    let toVisitQueue = [this.root];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      out.push(current.val);
      if(current.left) toVisitQueue.push(current.left);
      if(current.right) toVisitQueue.push(current.right);
    }
    return out;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
