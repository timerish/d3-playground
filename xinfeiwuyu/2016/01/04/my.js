body.html('');
title = 'JavaScript Expressions';
d3.select('title')
  .html(title);

body.append('h1')
  .html(title)

body.append('p')
  .html('An expression is any valid unit of code that resolves to a value.');

output = body.append('div')
  .style('border', '1px solid #CCC')
  .style('margin', '0.5em')
  .style('padding', '0.5em');

next_button = body.append('button')
  .html('next >')
  .on('click', next);
expression_list = [
'1',
'1 + 1',
'typeof(x)==\'undefined\'?x=1:x',
'x = x + 1',
'x'
];

function next () {
  expression = expression_list.shift();
  next_button.style('display', 'none');
  output.append('pre')
    .style('color', 'green')
    .text('expression > ' + expression);
  setTimeout(function () {
    try {
      value = eval(expression);
      output.append('pre')
        .style('color', 'blue')
        .text('     value > ' + value);
    }
    catch (e) {
      output.append('pre')
        .style('color', 'red')
        .text('     error > ' + e);
    }
    if(expression_list.length > 0) { 
      next_button.style('display', 'block');
    };
  }, 1000);
}
