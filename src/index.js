import createLinkedList from "./js/createLinkedList";

const linkedList = createLinkedList();
window.linkedList = linkedList;

linkedList.append("b");
linkedList.prepend("a");
linkedList.append("c");

console.log("toString:", linkedList.toString());
console.log("size:", linkedList.getSize());
console.log("head:", linkedList.getHead());
console.log("tail:", linkedList.getTail());
console.log("at index 1:", linkedList.at(1));
console.log("pop:", linkedList.pop());
console.log("toString:", linkedList.toString());
console.log("size:", linkedList.getSize());
console.log("contains b?:", linkedList.contains("b"));
console.log("find index of b:", linkedList.find("b"));
console.log("insert c at index 2:", linkedList.insertAt("c", 2));
console.log("toString:", linkedList.toString());
console.log("size:", linkedList.getSize());
console.log("remove at index 1:", linkedList.removeAt(1));
console.log("toString:", linkedList.toString());
console.log("size:", linkedList.getSize());
