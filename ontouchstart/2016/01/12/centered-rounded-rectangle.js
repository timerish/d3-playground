d3.select('title').html('Centered Rounded Rectangle');
body.html(''); 
svg = body.append('svg').style({ width: '100%', border: '1px solid #ccc'});
svg.style('height', svg.style('width'));
w = parseInt(svg.style('width'));
g = svg.append('g').attr('transform', 'translate(' + (w / 2) + ',' +  (w / 2) + ')');
rect = g.append('rect'). attr({x : 0, y: 0, width: w/2, height: w/4, rx: w/20, ry: w/20, fill: '#abc'});
rect.attr('transform', 'translate(' + (- rect.attr('width') / 2) + ',' +  (- rect.attr('height') / 2) + ')');
