class Node {
  constructor(data) {
    this.data = data;
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

  push(data) {
    let newNode = new Node(data);

    if (this.tail === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.amount++;
  }

  pop() {
    if (this.tail === null) {
      return null;
    }
    let data = this.tail.data;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.amount--;
    return this.tail.data;
  }

  *iterate() {
    let current = this.head;
    while (current) {
      yield current.data;
      current = current.next;
    }
  }

  insertAfter(prevData, data) {
    let current = this.head;
    while (current && current.data !== prevData) {
      current = current.next;
    }
    if (current === null) {
      return false;
    }
    let newNode = new Node(data);
    newNode.next = current.next;
    newNode.prev = current;
    if (current.next) {
      current.next.prev = newNode;
    }
    current.next = newNode;
    if (current === this.tail) {
      this.tail = newNode;
    }
    this.amount++;
    return true;
  }

  removeItem(data) {
    let current = this.head;
    while (current && current.data !== data) {
      current = current.next;
    }
    if (current === null) {
      return false;
    }
    if (current.prev) {
      current.prev.next = current.next;
    }
    if (current.next) {
      current.next.prev = current.prev;
    }
    if (current === this.head) {
      this.head = current.next;
    }
    if (current === this.tail) {
      this.tail = current.prev;
    }
    this.amount--;
    return true;
  }
}
