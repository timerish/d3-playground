d3.select('body').append('div').attr('id','first').append('p').html('this is first div');
d3.select('body').append('div').attr('id','second').append('p').html('this is second div');
d3.select('body').append('div').attr('id','third').append('p').html('this is third div');
d3.select('body').append('div').attr('id','fourth').append('p').html('this is fourth div ');

d3.select('body').selectAll('div')
  .filter(function(d,i) { return i%2 !==1 ? true : false;})
  .each(function(d,i) {
    console.log(d3.select(this).html());
    d3.select(this).style({background: '#ccc'});
});
