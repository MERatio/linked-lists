import createLinkedList from "./js/createLinkedList";

const linkedList = createLinkedList();

linkedList.append("b");
linkedList.prepend("a");
linkedList.append("c");

console.log(linkedList.getSize());
console.log(linkedList.getHead());
console.log(linkedList.getTail());
