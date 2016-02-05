---
data :
  object :
    attr : 
      width : 600,
      height : 600
  embed:
    attr:
      width : 600
      height : 600
      src : '/d3-playground/ontouchstart/2016/02/05/test.swf'
---
d3.select('body')
  .append('object')
  .attr({{ page.data.object.attr | jsonify }})
  .append('embed')
  .attr({{ page.data.embed.attr | jsonify }});
