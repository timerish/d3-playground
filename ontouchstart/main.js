d3.text('README.md', function (e, d) {
  d3.select('body').html(marked(d));
})
