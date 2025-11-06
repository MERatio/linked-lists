import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.append('c');
list.append('d');
list.prepend('b');
list.prepend('a');

console.log(list.toString());
console.log(list.size);
console.log('Head', list.head);
console.log('Tail', list.tail);
console.log('At index 2', list.at(2));
console.log('Pop', list.pop());
console.log(list.toString());
console.log('contains c?', list.contains('c'));
console.log('indx of c?', list.find('c'));
