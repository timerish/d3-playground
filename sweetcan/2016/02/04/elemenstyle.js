
d3.select('body')
  .append('div').html('<p>hello world</p>');
  .append('a')
  .attr('href', 'https://www.baidu.com')
  .html('百度')
  .style('text-decoration', 'none')
  .style('font-size','bold')
  .style('color', 'red');
