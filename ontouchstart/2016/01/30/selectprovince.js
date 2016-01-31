d3.select('body').append('p').html('省：<span id = "province"></span>');
province = d3.select('span#province');
selectprovince = d3.select('body').append('select');
provinces = ['四川省','湖南省','甘肃省','河北省'];
selectprovince.selectAll('option')
  .data(provinces)
  .enter()
  .append('option')
  .html(function (d) { return d} )
  .attr('value', function (d) { return d});
selectprovince.on('change',function(e){
    province.html(this.value);
 });
