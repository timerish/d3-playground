d3.select('body')
  .append('p').html('<h1>Have a good time!<h1>')
  .append('div').attr('id','div_id').html('<br><h2>Learn select from here!</h2>')
  .style('background', '#115545')
  .style('width', '600px')
  .style('height', '220px')
  .style('margin-left','10%')
  .style('padding-left','5%')
  .style('padding-top','5%')
  .style('color','#12ff56')
  .append('a').attr('href','https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector')
  .html('<br><b>MDN Document.querySelector()</b>')
  .style('color','yellow')
  .append('a').attr('href','https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector')
  .html('<b>(中文版)</b>')
  .style('color','red')
  .append('a').attr('href','https://github.com/mbostock/d3/wiki/Selections')
  .html('<br><b>d3.select </b>')
  .style('color','#ff8866')
  .append('a').attr('href','https://github.com/mbostock/d3/wiki/%E9%80%89%E6%8B%A9%E5%99%A8')
  .html('<b>(中文版)</b>')
  .style('color','red');
  console.log(d3.select('body'));
  console.log(d3.select('p').html());
  console.log(d3.select('p').text());
  console.log(d3.select('a').html());
  console.log(d3.select('a').text());
  console.log(d3.select('div#div_id').text());
