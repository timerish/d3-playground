title = 'Category10 Color Dispatch';

body.html('')
  .style('margin', 0)
  .style('padding', 0)
  .style('font-family', 'American Typewriter');
  
d3.select('title')
  .html(title);

body.append('h1')
  .style('text-align', 'center')
  .style('margin', '1em')
  .html(tilte);

colorDispatch = d3.dispatch('color');
colorDispatch.on('color', function (color) {
  body.style('background-color', color);
});

body.selectAll('div')
  .data(d3.range(10).map(d3.scale.category10()))
  .enter()
  .append('div')
  .html(function (d) {
    return d;
  })
  .style('background-color', function (d) {
    return d;
  })
  .style('width', '20%')
  .style('text-align', 'center')
  .style('display', 'inline-block')
  .on('mouseover', function (d) {
    color_dispatch.color(d);
  })
  .on('touchstart', function (d) {
    color_dispatch.color(d);
  });
