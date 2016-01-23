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
  .html(title);

colorDispatch = d3.dispatch('color');
colorDispatch.on('color', function (color, div, textColor) {
  d3.select(div)
    .style('background-color', color)
    .style('color', textColor);
});

body.selectAll('div')
  .data(d3.range(10).map(d3.scale.category10()))
  .enter()
  .append('div')
  .html(function (d) {
    return d;
  })
  .style('background-color', '#fff')
  .style('width', '20%').style('height', '10em')
  .style('line-height', '10em')
  .style('border', '1px solid #ccc')
  .style('text-align', 'center')
  .style('box-sizing', 'border-box')
  .style('display', 'inline-block')
  .on('mouseover', function (d) { 
    colorDispatch.color(d, this, '#fff'); 
  })
  .on('mouseout', function (d) {
    colorDispatch.color('#fff', this, '#000');
  })
  .on('touchstart', function (d) {
    colorDispatch.color(d, this, '#fff');
  });
