/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(obj = this.root) {
    if(!obj)return 0;
    let sum = obj.val;
    for(let child of obj.children){
      sum += this.sumValues(child);
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(obj=this.root) {
    if(!obj) return 0;
    let evens = obj.val/2-Math.floor(obj.val/2)===0?1:0;
    for(let child of obj.children){
      evens += this.countEvens(child);
    }
    return evens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound, obj=this.root) {
    if(!obj) return 0;
    let count = obj.val>lowerBound?1:0;
    for(let child of obj.children){
      count += this.numGreater(lowerBound, child);
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
