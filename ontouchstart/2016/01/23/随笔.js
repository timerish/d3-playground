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
});
mindstorms_cover.style({
  cursor: 'pointer'
});
mindstorms_cover.on('click', function () {
  location = 'http://www.amazon.com/Mindstorms-Children-Computers-Powerful-Ideas/dp/0465046746';
});

think_and_learn = d3.select('body').append('div');
think_and_learn.append('h2').html('Think and learn');
think_and_learn.append('img').attr({
  src: 'https://bigdata-mindstorms.github.io/d3-playground/ontouchstart/2016/01/23/mindstorms_think_and_learn.png',
  width: '50%'
});
think_and_learn.append('blockquote').html('... how computers may affect the way people think and learn.');
think_and_learn.append('blockquote').html('... 计算机可能如何影响人们的思考和学习方式。');

ideas = d3.select('body').append('div').html('35年前的思想，技术上现在才开始成熟。人们的思考和学习方式变化要慢得多。尤其是我们的教育体制和企业培训方式。');
bigdata_mindstorms = d3.select('body').append('div').html('我们这个网课就是这方面创新的一个尝试。希望大家积极参与合作。这里不是蓝翔技校或者昌平安卓集训中心。希望大家在这里学到的东西二十年后还有价值。')
