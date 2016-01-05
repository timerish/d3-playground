ol = body.append('ol');
src = 'https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/01/data.yaml';
d3.text(src, function (e, d) {
  if(!e) {
    ol.selectAll('li').data(js_yaml.load(d))
      .enter()
      .append('li')
      .html(function (item) {
        return item.name;
      })
      .style('background-color', function (item) {
        return item.color;
      });
  }});
