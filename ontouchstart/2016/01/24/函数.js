title = 'Functions (函数)';
d3.select('title').html(title);
d3.select('body').append('h1').html(title);

d3.select('body').append('blockquote').html('通常来说，一个函数就是一个可以被外部代码调用(或者函数本身递归调用)的"子程序"。和程序本身一样，一个函数的函数体是由一系列的语句组成的。函数可以接收传入参数，也可以返回一个值。').style('cursor', 'pointer').on('click', function () { location = 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions';});

function add_link(selection, href, html) {
  selection.append('a').attr('href', href).html(html)
}

function 加链接(选择, 网址, 内容) {
  选择.append('a').attr('href', 网址).html(内容)
}

function print(selection, object) {
  selection.append('pre').html(object.toString());
}

打印 = print;

print(d3.select('body'), print);
打印(d3.select('body'), 打印);

print(d3.select('body'), add_link);
打印(d3.select('body'), 加链接);

add_link(d3.select('body').append('p').html('Here is the link '), 'https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Functions', 'MDN Functions');
加链接(d3.select('body').append('p').html('这是中文链接 '), 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions', 'MDN 函数');

