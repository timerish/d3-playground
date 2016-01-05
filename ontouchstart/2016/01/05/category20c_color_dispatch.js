title = 'Category20c Color Dispatch';

body.html('')
 .style('margin', 0)
 .style('padding', 0)
 .style('font-family', 'American Typewriter');


d3.select('title')
  .html(title);

body.append('h1')
  .style('text-align', 'center')
  .style('margin', '1em')
  .html(title);

color_dispatch = d3.dispatch('color');
color_dispatch.on('color', function (color) {
  body.style('background-color', color); 
});
body.selectAll('div')
  .data(d3.range(20).map(d3.scale.category20c()))
  .enter()
  .append('div')
  .html(function (d) { 
    return d;
  })
  .style('background-color', function (d) {
    return d;
  })
  .style('width', '20%')
  .style('margin-bottom', '1em')
  .style('text-align', 'center')
  .style('display', 'inline-block')
  .on('mouseover', function (d) { 
    color_dispatch.color(d); 
  })
  .on('touchstart', function (d) { 
    color_dispatch.color(d); 
  });
