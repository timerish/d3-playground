d3 = require('d3');
marked = require('marked');
js_yaml = require('js-yaml');

body = d3.select('body')
  .style('padding', '1em');

body.append('h1')
  .html('d3-playground');

run_button = body.append('button')
  .style('display', 'inline-block')
  .style('margin-right', '1em')
  .html('Run 运行')
  .on('click', run);

see_button = body.append('button')
  .style('display', 'none')
  .html('See the code 看代码')
  .on('click', see);

hide_button = body.append('button')
  .style('display', 'inline-block')
  .html('Hide the code 藏代码')
  .on('click', hide);

code = body.append('pre')
  .attr('contenteditable', true)
  .style('display', 'inline-block')
  .style('white-space', 'pre-wrap')
  .style('padding','1em')
  .style('border','1px solid #CCC');

function see () {
  see_button.style('display', 'none');
  hide_button.style('display', 'inline-block');
  code.style('display', 'block');
}

function hide () {
  hide_button.style('display', 'none');
  see_button.style('display', 'inline-block');
  code.style('display', 'none');
}

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
  hide();
})
