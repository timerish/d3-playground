var dataset = [1.2, 2.3, 0.9, 1.5, 3.3];
var linear = d3.scale.linear().domain([0, d3.max(dataset)]).range([0, 300]);
var axis = d3.svg.axis().scale(linear).orient("bottom").ticks(5);
var svg = d3.select("body").append("svg").attr("width", 666).attr("height", 666);
svg.append("g").call(axis);
