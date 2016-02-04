title ='Function(函数)';
d3.select('title').html(title);
d3.select('bdoy').append('h1').html(title);
function add_link(selection,href,html) {
 selection.append('a').attr('href',href).html(html)
}
function 加链接(选择,网址,内容) {
 选择.append('a').attr('href',网址).html(内容)
}
function print(selection,object) {
 selection.append('pre').html(object.toString());
}
 打印 = print;
 print(d3.select('body'),print);
 打印(d3.select('body'),print);
 
 print(d3.select('body'),add_link);
 打印(d3.select('body'),加链接);
 
 add_link(d3.select('body').append('p').html('here is the link'),'http://www.baidu.com','百度');
 加链接(d3.select('body').append('p').html('这有个链接'),'http://www.baidu.com',百度);
 
