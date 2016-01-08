function yp(obj) { 
  try {
    body.append('pre')
      .html(js_yaml.dump(obj));
  }
  catch (error) {
    body.append('pre')
      .style('color', 'red')
      .html(js_yaml.dump(error));
  }
}

function bars(obj) {
  try {
   body.append('pre').html(obj.name);
   var size = window.innerWidth / 2;
   var container = body.append('div')
    .style('width', size)
    .style('height', size)
    .style('transform', 'rotate(-90deg)');
   container.selectAll('div')
    .data(obj.list).enter().append('div')
    .style('height', size / obj.list.length)
    .style('border', '1px solid #ccc')
    .style('background', 'blue')
    .style('width', function (d) { return d * 100 + '%'; })
  }
  catch (error) {
    body.append('pre')
      .style('color', 'red')
      .html(js_yaml.dump(error));
  }  
}

data = {};
data.name = "10 random numbers";
data.list = d3.range(10).map(Math.random);
yp(data);
bars(data);

