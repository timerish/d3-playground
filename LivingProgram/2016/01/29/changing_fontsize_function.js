d3.select('body').append('div').html('test');

function change_fontsize(selection, pixel_size) {
  selection.style('font-size', pixel_size);
  //a function that changes the fontsize
}

change_fontsize(d3.select('body').append('p').html('I am smaller now'), '4px');
change_fontsize(d3.select('body').append('p').html('I am Bigger now'), '100px');
