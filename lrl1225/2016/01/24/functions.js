title = 'Happy New Year,everyone.';
d3.select('title').html(title);
d3.select('body').append('h1').html(title).style('color','red');
d3.select('body');
function add_img(selection,src) {
  selection.append('img').attr('src', src);
}
d3.range(5,8).forEach(function(i){
  add_img(d3.select('body').append('div'),'https://assets-cdn.github.com/images/icons/emoji/unicode/1f49'+i+'.png');
})
