title = '数组';
d3.select('title').html(title);
d3.select('body').append('h1').html(title);

function print_array(array) {
  var ul = d3.select('body').append('ul');
  array.forEach(function(item) {
    ul.append('li').html(item);
  });
}

数组 = [1, 2, 3];
print_array(数组);

水果 = ['香蕉','苹果','大鸭梨'];
print_array(水果);
