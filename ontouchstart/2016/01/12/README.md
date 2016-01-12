# 2016/01/12

[square-svg.js](https://bigdata-mindstorms.github.io/d3-playground/#https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/12/square-svg.js)

```javascript
d3.select('title').html('Square SVG');
body.html(''); 
svg = body.append('svg').style({ width: '100%', border: '1px solid #ccc'});
svg.style('height', svg.style('width'));
```

[mess.js](https://bigdata-mindstorms.github.io/d3-playground/#https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/12/mess.js)

```javascript
d3.select('title').html('一团乱麻');
body.html(''); 
svg = body.append('svg').style({ width: '100%', border: '1px solid #ccc'});
svg.style('height', svg.style('width'));
width = parseInt(svg.style('width'));
height = width;
length = Math.floor(Math.random() * 1000);
data = d3.range(length).map(function () { return { x: Math.random() * width, y: Math.random()* height}});
line = d3.svg.line().x(function(d) { return d.x; }).y(function(d) { return d.y; }).interpolate("basis");
g = svg.append('g').datum(data).append("path").attr({ d: line, fill: 'none', stroke: '#000'})
```

