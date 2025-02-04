class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.amount++;
  }

  pop() {
    if (!this.tail) return null;

    const poppedValue = this.tail.value;

    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.amount--;
    return poppedValue;
  }

  iterate(callback) {
    let currentNode = this.head;

    while (currentNode) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
  }

  insertAfter(targetValue, newValue) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === targetValue) {
        const newNode = new Node(newValue);

        if (currentNode === this.tail) {
          currentNode.next = newNode;
          newNode.prev = currentNode;
          this.tail = newNode;
        } else {
          newNode.next = currentNode.next;
          newNode.prev = currentNode;
          currentNode.next.prev = newNode;
          currentNode.next = newNode;
        }

        this.amount++;
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  removeItem(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode === this.head && currentNode === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (currentNode === this.head) {
          this.head = currentNode.next;
          this.head.prev = null;
        } else if (currentNode === this.tail) {
          this.tail = currentNode.prev;
          this.tail.next = null;
        } else {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }

        this.amount--;
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }
}
