src = 'https://nodejs.org/dist/v4.2.6/docs/api/all.json';
d3.json(src, function (e, d) {
  console.log(e, d)
  if(!e) { 
    api = d; 
    d3.select('body')
      .append('h1')
      .html('Modules');
 
    select = d3.select('body')
      .append('select');

    var desc_data = {}; 
    var desc =  d3.select('body')
      .append('div')
      .html(api.modules[0].desc);

    select.selectAll('option')
      .data(api.modules)
      .enter()
      .append('option')
      .attr('value', function (d) { 
        return d.name;
      })
     .html(function (d) { 
        return d.name;
      })
     .each(function (d) {
       desc_data[d.name] = d.desc;
     });

    select.on('change', function (d) { 
      desc.html(desc_data[this.value]);
    });

  }
})
