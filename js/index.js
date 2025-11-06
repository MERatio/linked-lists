import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.append('d');
list.append('e');
list.prepend('b');
list.prepend('a');

console.log(list.toString());
console.log(list.size);
console.log('Head', list.head);
console.log('Tail', list.tail);
console.log('At index 2', list.at(2));
console.log('Pop', list.pop());
console.log(list.toString());
console.log('contains d?', list.contains('d'));
console.log('index of d?', list.find('d'));
console.log(list.insertAt('c', 2), 'c inserted', list.toString());
