title = '假期';
d3.select('title').html(title);
d3.select('body').append('h1').html(title);

function print_array(array) {
  var ul = d3.select('body').append('ul');
  array.forEach(function(item, index, array) {
    ul.append('li').html(item).attr('class', 'item-' + index);
    
  });
console.log(array);
}

法定假 = ['春节', '清明', '中秋'];
print_array(法定假);

