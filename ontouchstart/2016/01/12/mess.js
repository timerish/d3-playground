d3.select('title').html('一团乱麻');
body.html(''); 
width = 500;
height = 500;
length = Math.floor(Math.random() * 500);
svg = body.append('svg').attr({ width: width, height: height}).style({border: "1px solid #ccc"});
data = d3.range(length).map(function () { return { x: Math.random() * width, y: Math.random()* height}})
line = d3.svg.line().x(function(d) { return d.x; }).y(function(d) { return d.y; }).interpolate("basis");
g = svg.append('g').datum(data).append("path").attr({ d: line, fill: 'none', stroke: '#000'})
