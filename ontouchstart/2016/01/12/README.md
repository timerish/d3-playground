# 2016/01/12

[square-svg.js](https://bigdata-mindstorms.github.io/d3-playground/#https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/12/square-svg.js)

```javascript
d3.select('title').html('Square SVG');
body.html(''); 
svg = body.append('svg').style({ width: '100%', border: '1px solid #ccc'});
svg.style('height', svg.style('width'));
```

[centered-rounded-rectangle.js](https://bigdata-mindstorms.github.io/d3-playground/#https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/12/centered-rounded-rectangle.js)

```javascript
d3.select('title').html('Centered Rounded Rectangle');
body.html(''); 
svg = body.append('svg').style({ width: '100%', border: '1px solid #ccc'});
svg.style('height', svg.style('width'));
w = parseInt(svg.style('width'));
g = svg.append('g').attr('transform', 'translate(' + (w / 2) + ',' +  (w / 2) + ')');
rect = g.append('rect'). attr({x : 0, y: 0, width: w/2, height: w/4, rx: w/20, ry: w/20, fill: '#abc'});
rect.attr('transform', 'translate(' + (- rect.attr('width') / 2) + ',' +  (- rect.attr('height') / 2) + ')');
```

[two-rounded-rectangles.js](https://bigdata-mindstorms.github.io/d3-playground/#https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/12/two-rounded-rectangles.js)

```javascript
d3.select('title').html('Two Rounded Rectangles');
body.html(''); 
svg = body.append('svg').style({ width: '100%', border: '1px solid #ccc'});
svg.style('height', svg.style('width'));
w = parseInt(svg.style('width'));
g = svg.append('g').attr('transform', 'translate(' + (w / 2) + ',' +  (w / 2) + ')');
rect1 = g.append('rect'). attr({x : 0, y: 0, width: w/2, height: w/4, rx: w/20, ry: w/20, fill: '#abc'});
rect1.attr('transform', 'translate(' + (- rect1.attr('width') / 2) + ',' +  (- rect1.attr('height') / 2 - w/4) + ')');
rect2 = g.append('rect'). attr({x : 0, y: 0, width: w/2, height: w/4, rx: w/20, ry: w/20, fill: '#abc'});
rect2.attr('transform', 'translate(' + (- rect2.attr('width') / 2) + ',' +  (- rect2.attr('height') / 2 + w/4) + ')');
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

