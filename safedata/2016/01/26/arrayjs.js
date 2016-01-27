

title = 'array idea'
d3.select('title').html(title);
d3.select('body').append('h1').html(title);

function print_array(arrayname, array) {
  d3.select('body').append('div').html(arrayname);
  var ul = d3.select('body').append('ul');
  array.forEach(function(item, i) {
    ul.append('li').html(item + '  ' + i);
  });
}

Test_array = ['elem1',1,{}]
print_array(Test_array);
