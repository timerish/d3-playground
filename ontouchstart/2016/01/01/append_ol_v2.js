ol = body.append('ol');
data = ['Apple', 'Banana', 'Cherry'];
data.forEach(function (item) {
  ol.append('li').html(item);
})
