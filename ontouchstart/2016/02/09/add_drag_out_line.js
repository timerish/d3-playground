drag = d3.behavior.drag()
drag.origin(function(d) { return d; });
drag.on('drag', function (d) {
  d.x = d3.event.x;
  d.y = d3.event.y;
  d3.select(this)
    .style({
      left: function (d) { return d.x },
      top: function (d) { return d.y },
    });
});

function add_drag(selection) {
  var rect = selection.node().getBoundingClientRect();
  selection.datum({x: rect.left, y: rect.top});
  selection.style({
    position: 'absolute',
    left: function (d) { return d.x },
    top: function (d) { return d.y },
  });
  selection.call(drag);
};


drag_out = d3.behavior.drag();
drag_out.origin(function(d) { return d; });
drag_out.on("dragstart", function() {
  d3.event.sourceEvent.stopPropagation(); // silence other listeners
});
drag_out.on('drag', function (d) {
  d3.select(this)
    .style({ cursor: 'pointer' })
    .select('line')
    .attr({
      x2: function (d) { return window.innerWidth / 2  + d3.event.x - d.x },
      y2: function (d) { return window.innerWidth / 2 + d3.event.y - d.y + 100}
  });
});



function add_drag_out_line(selection) {
  var rect = selection.node().getBoundingClientRect();
  selection.datum({x: rect.left, y: rect.top});
  selection.call(drag_out);
  var svg = selection.append('svg').style({ 
    position: 'absolute',
    left: - window.innerWidth / 2,
    top: - window.innerHeight / 2,
    width: window.innerWidth,
    height: window.innerHeight,
    'z-index': -100
  });

  var line = svg.append('line')
    .datum({x: rect.left, y: rect.top})
    .attr({
      x1: window.innerWidth / 2,
      y1: window.innerHeight / 2 + 50,
      x2: window.innerWidth / 2,
      y2: window.innerHeight / 2 + 50,
      stroke: 'red'
   }); 
};

selection = d3.select('body')
  .append('div')
  .style({
    width: 100,
    height: 100,
    background: 'blue' 
  });

terminal_out = selection.append('div');
terminal_out.style({
  position: 'absolute',
  width: 20, 
  height: 100,
  top: 0,
  left: 80, 
  background: 'yellow'
});

add_drag(selection);
add_drag_out_line(terminal_out);
