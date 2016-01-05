ol = body.append('ol');
data = ['Apple', 'Banana', 'Cherry'];
ol.selectAll('li').data(data)
  .enter()
  .append('li')
  .html(function (item) {
    return item;
});
