d3 = require('d3');
marked = require('marked');
js_yaml = require('js-yaml');

body = d3.select('body')
  .style('padding', '1em');

body.append('h1')
  .html('d3-playground');

run_button = body.append('button')
  .style('display', 'block')
  .html('Review the code and run')
  .on('click', run);

code = body.append('pre')
  .attr('contenteditable', true)
  .style('white-space', 'pre-wrap')
  .style('padding','1em')
  .style('border','1px solid #CCC');

function run () {
  eval(code.text());
}

src = location.hash.replace(/^#/, '') || 'sandbox.js';

d3.text(src, function (e, d){
  if(!e) {
    code.text(d);
  }
  else {
    code.text('// Error: ' + e.statusText);
    console.log(e);
  }
})
