class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
export class Stack {
  constructor() {
    this.size = 0;
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;

    return poppedValue;
  }

  isEmpty() {
    return !this.size > 0;
  }
}
