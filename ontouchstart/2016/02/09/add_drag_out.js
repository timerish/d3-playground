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
  d.x = d3.event.x;
  d.y = d3.event.y;
  console.log(d);
});

function add_drag_out(selection) {
  var rect = selection.node().getBoundingClientRect();
  selection.datum({x: rect.left, y: rect.top});
  selection.call(drag_out);
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
add_drag_out(terminal_out);

