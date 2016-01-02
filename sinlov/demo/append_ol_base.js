ol = body.append('ol');
src = 'https://bigdata-mindstorms.github.io/d3-playground/sinlov/demo/data.yaml';
src_chinese = 'https://bigdata-mindstorms.github.io/d3-playground/sinlov/demo/data_chinese.yaml';

function update(d) {
  selection = ol.selectAll('li').data(d);
  selection.enter().append('li');
  selection.exit().remove();
  selection.html(function (item) {
      return item.name;
    })
    .style('foreground-color', function (item) {
      return item.color;
    });
}

function load(e, d) {
  if(!e) {
    update(js_yaml.load(d));
  }
}

d3.text(src, load);
setTimeout(function () {
    d3.text(src_chinese, load);
  }, 1000);
