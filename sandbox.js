var color = d3.scale.linear()
    .domain([1, 500])
    .range(["red", "blue"]);
d3.range(500).forEach(function (i) {
  body.append('div')
    .style('background', color(i))
    .style('width', '100%')
    .style('height', '1px')
})
