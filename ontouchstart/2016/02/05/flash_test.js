d3.select('body')
  .append('object')
  .attr({width: 600, height: 600})
  .append('embed')
  .attr({
    width: 600, 
    height: 600, 
    src : '/d3-playground/ontouchstart/2016/02/05/test.swf'});
