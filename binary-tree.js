/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    let toVisitQueue = [{node: this.root, count: 1}];
    // let count = 1;

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (!current.node.left && !current.node.right) return current.count;

      if(current.node.left) {
        toVisitQueue.push({node: current.node.left, count: current.count + 1});
      }
      if(current.node.right) {
        toVisitQueue.push({node: current.node.right, count: current.count + 1});
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    let toVisitQueue = [{node: this.root, treeLevel: 1}];
    let previous = null;

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if(current.node.left) {
        toVisitQueue.push({node: current.node.left, treeLevel: current.treeLevel + 1});
      }
      if(current.node.right) {
        toVisitQueue.push({node: current.node.right, treeLevel: current.treeLevel + 1});
      }
      previous = current;
    }

    return previous.treeLevel;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;

    let toVisitQueue = [{node: this.root, sum: this.root.val}];
    let currentMaxSum = this.root.val;

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if(current.node.left) {
        toVisitQueue.push({node: current.node.left, sum: current.sum + current.node.left.val});
      }
      if(current.node.right) {
        toVisitQueue.push({node: current.node.right, sum: current.sum + current.node.right.val});
      }
      if(current.sum > currentMaxSum) currentMaxSum = current.sum;
    }

    return currentMaxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
