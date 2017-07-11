/*
  Simple Node
*/
/*jshint esversion: 6 */

class Node {
  constructor(data){
    this.data      = data;
    this.leftNode  = null;
    this.rightNode = null;
    this.parent    = null;
  }

  get left () { return this.leftNode; }
  set left (newLeft) {
    if (newLeft)
      newLeft.parent = this;
    this.leftNode  = newLeft;
  }

  get right () { return this.rightNode; }
  set right (newRight) {
    if (newRight)
      newRight.parent = this;
    this.rightNode  = newRight;
  }
}
