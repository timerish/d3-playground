ol = body.append('ol');
src = 'https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/01/data.json';
d3.json(src, function (e, d) {
  if(!e) {
    ol.selectAll('li').data(d)
      .enter()
      .append('li')
      .html(function (item) {
        return item.name;
      })
      .style('background-color', function (item) {
        return item.color;
      });
  }});
