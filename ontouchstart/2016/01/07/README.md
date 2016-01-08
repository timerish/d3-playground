# 2016/01/07

We write a very simple utility function `yp(obj)` to print an object in [YAML](http://yaml.org/) format on the screen. 

```javascript
function yp(obj) { 
  try {
    body.append('pre')
      .html(js_yaml.dump(obj));
  }
  catch (error) {
    body.append('pre')
      .style('color', 'red')
      .html(js_yaml.dump(error));
  }
}
```
Here are a few examples that use `yp(obj)` to inspect data.

- [yp_data.js](https://bigdata-mindstorms.github.io/d3-playground/#https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/07/yp_data.js)
- [yp_random_data.js](https://bigdata-mindstorms.github.io/d3-playground/#https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/07/yp_random_data.js)

We can also view the data as bars.

```javascript
function bars(obj) {
  try {
   body.append('pre').html(obj.name);
   var size = window.innerWidth / 2;
   var container = body.append('div')
    .style('width', size)
    .style('height', size)
    .style('transform', 'rotate(-90deg)');
   container.selectAll('div')
    .data(obj.list).enter().append('div')
    .style('height', size / obj.list.length)
    .style('border', '1px solid #ccc')
    .style('background', 'blue')
    .style('width', function (d) { return d * 100 + '%'; })
  }
  catch (error) {
    body.append('pre')
      .style('color', 'red')
      .html(js_yaml.dump(error));
  }
}
```

- [yp_random_data_bars.js](https://bigdata-mindstorms.github.io/d3-playground/#https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/07/yp_random_data_bars.js)
