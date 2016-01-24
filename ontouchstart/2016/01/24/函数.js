title = 'Functions (函数)';
d3.select('title').html(title);
function add_link(selection, href, html) {
  selection.append('a').attr('href', href).html(html)
}
