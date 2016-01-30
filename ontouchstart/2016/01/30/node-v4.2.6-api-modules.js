src = 'https://nodejs.org/dist/v4.2.6/docs/api/all.json';
d3.json(src, function (e, d) {
  console.log(e, d)
  if(!e) { 
    api = d; 
    d3.select('body')
      .append('h1')
      .html('Modules');
    d3.select('body')
      .append('ol')
      .selectAll('li')
      .data(api.modules)
      .enter()
      .append('li')
      .html(function (d) { return d.name });
  }
})
