body.html('');

body.append('button')
  .html('English')
  .on('click', function () { 
    d3.text(src, load);
  });
body.append('button')
  .html('中文')
  .on('click', function () {
    d3.text(src_chinese, load);
});

ol = body.append('ol');
src = 'https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/02/data.yaml';
src_chinese = 'https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/02/data_chinese.yaml';

function update(d) {
  selection = ol.selectAll('li').data(d);
  selection.enter().append('li');
  selection.exit().remove();
  selection.html(function (item) {
      return item.name;
    })
    .style('color', function (item) {
      return item.color;
    })
    .style('background-color', function (item) {
      return item['background-color'];
    });
}

function load(e, d) {
  if(!e) {
    update(js_yaml.load(d));
  }
}

