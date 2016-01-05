ol = body.append('ol');
data = [
    { name: 'Apple', color: 'green'}, 
    { name: 'Banana', color: 'yellow'}, 
    { name: 'Cherry', color: 'red'}
  ];
ol.selectAll('li').data(data)
  .enter()
  .append('li')
  .html(function (item) {
    return item.name;
  })
  .style('background-color', function (item) {
    return item.color;
  })
