d3.select('body')
  .append('p')
  .style("color","red")
  .html("I want to show you guys somthing awsome:");
d3.select('body')
  .append('p')
  .append('a')
  .attr('href','https://github.com/mbostock/d3/wiki/Gallery')
  .html('D3 Gallery');
var ol=d3.select('body').append('lo');
  ol.append('li').html("What");
  ol.append('li').html("When");
  ol.append('li').html("Where");
  ol.append('li').html("How");
