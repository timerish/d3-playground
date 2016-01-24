title = 'Functions (函数)';
d3.select('title').html(title);
function add_link(selection, href, html) {
  selection.append('a').attr('href', href).html(html)
}

add_link(d3.select('body').append('p').html('Here is the link '), 'https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Functions', 'MDN Functions');
add_link(d3.select('body').append('p').html('这是中文链接 '), 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions', 'MDN 函数');
