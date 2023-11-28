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
        return;
      } else if (head.nextNode === null) {
        head = null;
        size--;
      } else {
        let prev = null;
        let cur = head;
        while (cur.nextNode !== null) {
          prev = cur;
          cur = cur.nextNode;
        }
        prev.nextNode = null;
        size--;
      }
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
    find(value) {
      let tmp = head;
      let curIndex = 0;
      while (tmp !== null) {
        if (tmp.value === value) {
          return curIndex;
        }
        tmp = tmp.nextNode;
        curIndex++;
      }
      return null;
    },
    toString() {
      let str = "";
      let tmp = head;
      while (tmp !== null) {
        str += `( ${tmp.value} ) -> `;
        tmp = tmp.nextNode;
      }
      str += "null";
      return str;
    },
    insertAt(value, index) {
      if (index === 0) {
        this.prepend(value);
      } else {
        let prev = null;
        let cur = head;
        let curIndex = 0;
        while (cur !== null && curIndex !== index) {
          prev = cur;
          cur = cur.nextNode;
          curIndex++;
        }
        if (curIndex === index) {
          prev.nextNode = createNode(value, cur);
          size++;
        }
      }
    },
  };
}

export default createLinkedList;
