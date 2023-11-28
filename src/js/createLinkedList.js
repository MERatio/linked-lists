import createNode from "./createNode";

function createLinkedList() {
  let head = null;
  let size = 0;

  return {
    append(value) {
      if (head === null) {
        this.prepend(value);
      } else {
        let tail = this.getTail();
        tail.nextNode = createNode(value, null);
        size++;
      }
    },
    prepend(value) {
      head = createNode(value, head);
      size++;
    },
    getSize() {
      return size;
    },
    getHead() {
      return head;
    },
    getTail() {
      if (head === null) {
        return null;
      }
      let tmp = head;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      return tmp;
    },
    at(index) {
      let tmp = head;
      let curIndex = 0;
      while (tmp !== null && curIndex !== index) {
        tmp = tmp.nextNode;
        curIndex++;
      }
      if (tmp === null) {
        return null;
      }
      return tmp;
    },
    pop() {
      if (head === null) {
        return null;
      } else if (head.nextNode === null) {
        let tmp = head;
        head = null;
        return tmp;
      }
      let prev = null;
      let cur = head;
      while (cur.nextNode !== null) {
        prev = cur;
        cur = cur.nextNode;
      }
      prev.nextNode = null;
      return cur;
    },
    contains(value) {
      let tmp = head;
      while (tmp !== null) {
        if (tmp.value === value) {
          return true;
        }
        tmp = tmp.nextNode;
      }
      return false;
    },
  };
}

export default createLinkedList;
