import Node from './Node.js';

class LinkedList {
  #head = null;

  // Adds a new node containing value to the end of the list.
  // Should add a tail pointer (optional performance improvement).
  append(value) {
    const newNode = new Node(value, null);
    if (this.#head === null) {
      this.#head = newNode;
    } else {
      let cur = this.#head;
      while (cur.nextNode !== null) {
        cur = cur.nextNode;
      }
      cur.nextNode = newNode;
    }
  }

  // Adds a new node containing value to the start of the list.
  prepend(value) {
    const newNode = new Node(value, this.#head);
    this.#head = newNode;
  }

  // Represents LinkedList objects as strings.
  // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
  toString() {
    if (this.#head === null) {
      return 'null';
    }

    let str = '';
    let cur = this.#head;
    while (cur !== null) {
      str += `( ${cur.value} ) -> `;
      cur = cur.nextNode;
    }
    str += 'null';
    return str;
  }

  // Returns the total number of nodes in the list.
  get size() {
    let nodeCount = 0;
    let cur = this.#head;
    while (cur !== null) {
      nodeCount++;
      cur = cur.nextNode;
    }
    return nodeCount;
  }

  // Returns the first node in the list.
  get head() {
    return this.#head;
  }

  // Returns the last node in the list
  // Should add a tail private field.
  get tail() {
    if (this.#head === null) {
      return null;
    }

    let cur = this.#head;
    while (cur.nextNode !== null) {
      cur = cur.nextNode;
    }
    return cur;
  }

  // Returns the node at the given index.
  at(index) {
    if (this.#head === null || index < 0) {
      return null;
    }

    let cur = this.#head;
    let curIndex = 0;
    while (cur !== null && curIndex !== index) {
      cur = cur.nextNode;
      curIndex++;
    }
    return cur;
  }

  // Removes the last node from the list, and returns its value.
  pop() {
    if (this.#head === null) {
      return null;
    }

    // If only 1 node.
    if (this.#head.nextNode === null) {
      const value = this.#head.value;
      this.#head = null;
      return value;
    }

    let prev = null;
    let cur = this.#head;
    while (cur.nextNode !== null) {
      prev = cur;
      cur = cur.nextNode;
    }
    prev.nextNode = null;
    return cur.value;
  }

  // Returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let cur = this.#head;
    while (cur !== null) {
      if (cur.value === value) {
        return true;
      }
      cur = cur.nextNode;
    }

    return false;
  }

  // Returns the index of the node containing value, or null if not found.
  find(value) {
    let cur = this.#head;
    let curIndex = 0;
    while (cur !== null) {
      if (cur.value === value) {
        return curIndex;
      }
      cur = cur.nextNode;
      curIndex++;
    }

    return null;
  }
}

export default LinkedList;
