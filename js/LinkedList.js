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
    } else {
      let str = '';
      let cur = this.#head;
      while (cur !== null) {
        str += `( ${cur.value} ) -> `;
        cur = cur.nextNode;
      }
      str += 'null';
      return str;
    }
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
    } else {
      let cur = this.#head;
      while (cur.nextNode !== null) {
        cur = cur.nextNode;
      }
      return cur;
    }
  }
}

export default LinkedList;
