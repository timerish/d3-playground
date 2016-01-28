title = 'Functions (函数)';
d3.select('body').append('h1').html(title); //adds a title
d3.select('body').append('blockquote').html('quote').style('cursor', 'pointer').on('click', function () { location = 'google.com';}); //adds a quote
function add_link(selection, href, html) {
  selection.append('a').attr('href', href).html(html)
  //a function that gives the selection a html with an embedded link
}

function print(selection, object) {
  selection.append('pre').html(object.toString()); //A function that prints the object in that selection
}

print(d3.select('body'), print); //print the print function


print(d3.select('body'), add_link); //print the add_link function



add_link(d3.select('body').append('p').html('Here is the link '), 'Google.com', 'Google');
//uses the add_link function
