ol = body.append('ol');
src = 'https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/01/data.yaml';
src_chinese = 'https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/01/data_chinese.yaml';
function load(e, d) {
  if(!e) {
    selection = ol.selectAll('li').data(js_yaml.load(d));
    selection.enter().append('li');
    selection.exit().remove();
    selection.html(function (item) {
        return item.name;
      })
      .style('background-color', function (item) {
        return item.color;
      });
  }
};
d3.text(src, load);
setTimeout(function () { 
    d3.text(src_chinese, load); 
  }, 1000);
