# 2016/01/07

We write a very simple utility function `yp(obj)` to print an object in [YAML](http://yaml.org/) format on the screen. 
```javascript
function yp(obj) { 
  body.append('pre')
    .html(js_yaml.dump(obj));
}
```
Here are a few examples that use `yp(obj)` to inspect data.

- [yp_data.js](https://bigdata-mindstorms.github.io/d3-playground/#https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/07/yp_data.js)
- [yp_random_data.js](https://bigdata-mindstorms.github.io/d3-playground/#https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/07/yp_random_data.js)
