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

selection = d3.select('body')
  .append('div')
  .style({
    width: 100,
    height: 100,
    background: 'blue' 
  });

add_drag(selection);

