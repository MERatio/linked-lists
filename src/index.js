import createLinkedList from "./js/createLinkedList";

const linkedList = createLinkedList();

linkedList.append("b");
linkedList.prepend("a");
linkedList.append("c");

console.log("size", linkedList.getSize());
console.log("head", linkedList.getHead());
console.log("tail", linkedList.getTail());
console.log("at index 1", linkedList.at(1));
console.log("pop", linkedList.pop());
console.log("tail", linkedList.getTail());
console.log("contains b?", linkedList.contains("b"));
console.log("find index of b", linkedList.find("b"));
