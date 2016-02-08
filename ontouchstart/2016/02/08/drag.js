drag = d3.behavior.drag()
drag.origin(function(d) { return d; });
dragmove = function (d) {
  d.x = d3.event.x;
  d.y = d3.event.y;
  d3.select(this)
    .style({
      left: function (d) { return d.x },
      top: function (d) { return d.y },
    });
};

drag.on('drag', dragmove);

selection = d3.select('body').append('div');
selection.datum({x: window.innerWidth / 2 - 25, y: window.innerHeight / 2 - 25});
selection.style({
  position: 'absolute',
  left: function (d) { return d.x },
  top: function (d) { return d.y },
  width: 50,
  height: 50,
  background: 'blue' 
 });

selection.call(drag);
