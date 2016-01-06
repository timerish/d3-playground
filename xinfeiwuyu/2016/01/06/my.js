d3.select('pre').style('width','45%').style('float','left');
if(d3.select('#mySpace')!=''){
	d3.select('#mySpace').remove();
}
mySpace = body.append('div').attr('id','mySpace').style('width','45%').style('float','left').style('padding','10px');
mySpace.append('h1').text('My Space');

