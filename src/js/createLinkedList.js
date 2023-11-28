import createNode from "./createNode";

function createLinkedList() {
  let head = null;
  let size = 0;

  return {
    append(value) {
      if (head === null) {
        this.prepend(value);
      } else {
        let tmp = head;
        while (tmp.nextNode !== null) {
          tmp = tmp.nextNode;
        }
        tmp.nextNode = createNode(value, null);
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
      let tmp = head;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      return tmp;
    },
  };
}

export default createLinkedList;
