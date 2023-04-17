const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {
  constructor() {
    this.tree = null
  }

  root() {
    return this.tree
  }

  add(data) {
    this.tree = addData(this.tree, data)

    function addData(node, data) {
      if (node === null) {
        return new Node(data)
      }

      if (node.data === data) {
        return node
      }

      if (data > node.data) {
        node.right = addData(node.right, data)
      } else {
        node.left = addData(node.left, data)
      }

      return node
    }
  }

  has(data) {
    return hasData(this.tree, data)

    function hasData(node, data) {
      if (node === null) {
        return false
      }

      if (node.data === data) {
        return true
      }

      if (data > node.data) {
        return hasData(node.right, data)
      } else {
        return hasData(node.left, data)
      }
    }
  }

  find(data) {
    return findData(this.tree, data)

    function findData(node, data) {
      if (node === null) {
        return null
      }

      if (node.data === data) {
        return node
      }

      if (data > node.data) {
        return findData(node.right, data)
      } else {
        return findData(node.left, data)
      }
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented')
    // remove line with error and write your code here
    this.tree = removeData(this.tree, data)

    function removeData(node, data) {
      if (node === null) {
        return null
      }

      if (node.data < data) {
        node.left = removeData(node.left, data)
        return node
      } else if (node.data > data) {
        node.right = removeData(node.right, data)
        return node
      } else {
        if (node.left === null && node.right === null) {
          return null
        }
        if (node.left === null) {
          node = node.right
          return node
        }
        if (node.right === null) {
          node = node.left
          return node
        }

        let minFromRight = findMinFromRight(node.right)

        function findMinFromRight(node) {
          if (node.left === null) {
            return node.value
          } else {
            return findMinFromRight(node.left)
          }
        }

        node.value = minFromRight

        node.right = removeData(node.right, minFromRight)

        return node
      }
    }
  }

  min() {
    if (this.tree === null) {
      return null
    }

    return findMin(this.tree)

    function findMin(node) {
      if (node.left === null) {
        return node.data
      } else {
        return findMin(node.left)
      }
    }
  }

  max() {
    if (this.tree === null) {
      return null
    }

    return findMax(this.tree)

    function findMax(node) {
      if (node.right === null) {
        return node.data
      } else {
        return findMax(node.right)
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
}
