title = 'Fruits'
d3.select('title').html(title);
d3.select('body').append('h1').html(title);

function print_array(array) {
  d3.select('body').append('div').html(arrayname);
  var ul = d3.select('body').append('ul');
  array.forEach(function(item) {
    ul.append('li').html(item);
fruits.forEach(function (item, index, array) { 
 console.log(item, index); });
// Apple 0
// Banana 1
}
Fruits = [0,1]
print_array(Fruits);
