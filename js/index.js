import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.append('c');
list.append('d');
list.prepend('b');
list.prepend('a');

console.log(list.toString());
console.log(list.size);
