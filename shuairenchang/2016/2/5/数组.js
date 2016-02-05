title = '数组';
d3.select('title').html('title');
d3.select('body').append('h1').html(title);
function print_array(array){
 var ul =d3.select('body').append('u1');
 array.forEach(function(item,index,array){
 ul.append('li').html(item).attr('class','item-' + index);
 console.log(array);
 });
}
国家 = ['中国','美国','加拿大'];
print_array(国家);
