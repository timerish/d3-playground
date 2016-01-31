title = '数组';
d3.select('title').html(title);
d3.select('body').append('h1').html(title); //gives the document a title

function print_array(array) {
  //this function prints the array not only in the console but the body
  var ul = d3.select('body').append('ul'); //creates unordered list under the variable ul
  
  array.forEach(function(item, index, array) {
    //for each array 
    ul.append('li') //creates data point in the unordered list
    .html(item)     //items are like 1, 2 ,3 or '香蕉','苹果','大鸭梨' (so these are printed in html)
    .attr('class', 'item-' + index); 
    console.log(array); //logs the array in the console (so you can see it)
  });
}

数组 = [1, 2, 3];
print_array(数组); //prints an array

水果 = ['香蕉','苹果','大鸭梨'];
print_array(水果); //prints an array
