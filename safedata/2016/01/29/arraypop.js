// [array.pop]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
// pop last element
var myarray = ['ele1', 'clown', 'mandarin', 'sturgeon'];

console.log('orginal array: ', myarray); // ['ele1', 'clown', 'mandarin', 'sturgeon']

var popped = myarray.pop();

console.log('my array afer pop', myarray); // ['ele1', 'clown', 'mandarin' ] 

console.log('popped element: ', popped); // 'sturgeon'
