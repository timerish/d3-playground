d3 = require('d3');
marked = require('marked');
js_yaml = require('js-yaml');
src = location.hash.replace(/^#/, '') || 'main.js';
body = d3.select('body');
d3.text(src, function (e, d){
  if(!e) {
    eval(d);
  }
  else {
    console.log(e);
  }
})
