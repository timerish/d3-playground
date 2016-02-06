title = '水果价格单';
d3.select('title').html(title);
d3.select('body').append('h1').html(title);
var table = d3.select('body').append('table').style('font-size','28px').style('width','500px').style('text-align','center').style('border','1px solid');      
function print_array(array) {
  var tb = table.append('tr').style('background','#123456').style('color','#fff');
  array.forEach(function(item) {
        tb.append('td').html(item);
  });
} 
序号 = ['序号',1,2,3];                  
水果 = ['水果','香蕉','苹果','鸭梨'];
价钱 = ['价钱','3元','6元','5元'];
print_array(序号);
print_array(水果);
print_array(价钱);
