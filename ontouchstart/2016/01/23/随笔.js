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
mindstorms = d3.select('body').append('h1').html('Mindstorms');
