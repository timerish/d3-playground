题目 = '学习计算机和学编程有什么不同？';
d3.select('title').html(题目);
大标题 = d3.select('body').append('h1');
大标题.html(题目);
第一段 = d3.select('body').append('div').html('这次试图能用中文的尽量用中文，但是又不陷入<span id="丙正正">丙正正</span>的误区。');
丙正正 = d3.select('span#丙正正').style('background','yellow');
丙正正.style('cursor', 'pointer');
丙正正.on('click', function () {
  location = 'http://baike.baidu.com/client/view/1718420.htm';
});
mindstorms = d3.select('body').append('h1').html('Mindstorms (头脑风暴)');
mindstorms_cover = d3.select('body').append('img').attr({
  src: 'https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/23/mindstorms_cover.png',
  width: '50%'
})
mindstorms_cover.style({
  cursor: 'pointer'
});
mindstorms_cover.on('click', function () {
  location = 'http://www.amazon.com/Mindstorms-Children-Computers-Powerful-Ideas/dp/0465046746';
});
