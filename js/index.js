import LinkedList from './LinkedList.js';

const list = new LinkedList();

// Test append
list.append('dog');
list.append('cat');
list.append('parrot');

console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> null
console.log('Size:', list.size); // 3
console.log('Head:', list.head.value); // dog
console.log('Tail:', list.tail.value); // parrot

// Test prepend
list.prepend('hamster');
console.log(list.toString()); // ( hamster ) -> ( dog ) -> ( cat ) -> ( parrot ) -> null

// Test at()
console.log('Node at index 2:', list.at(2).value); // cat

// Test pop()
console.log('Popped:', list.pop()); // parrot
console.log(list.toString()); // ( hamster ) -> ( dog ) -> ( cat ) -> null

// Test contains()
console.log('Contains dog?', list.contains('dog')); // true
console.log('Contains snake?', list.contains('snake')); // false

// Test find()
console.log('Index of cat:', list.find('cat')); // 2
console.log('Index of snake:', list.find('snake')); // null

// Test insertAt()
list.insertAt('snake', 2);
console.log(list.toString()); // ( hamster ) -> ( dog ) -> ( snake ) -> ( cat ) -> null

// Test removeAt()
console.log('Removed:', list.removeAt(1)); // dog
console.log(list.toString()); // ( hamster ) -> ( snake ) -> ( cat ) -> null
