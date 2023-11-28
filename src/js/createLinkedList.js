import createNode from "./createNode";

function createLinkedList() {
  let head = null;

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
      }
    },
    prepend(value) {
      head = createNode(value, head);
    },
    getHead() {
      return head;
    },
  };
}

export default createLinkedList;
