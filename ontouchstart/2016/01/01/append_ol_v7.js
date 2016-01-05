li = body.append('ol').selectAll('li');
src = 'https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/01/data.yaml';
function load(e, d) {
  if(!e) {
    li.data(js_yaml.load(d))
      .enter()
      .append('li')
      .html(function (item) {
        return item.name;
      })
      .style('background-color', function (item) {
        return item.color;
      });
  }
};
d3.text(src, load);
