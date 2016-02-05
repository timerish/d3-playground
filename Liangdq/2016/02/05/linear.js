var dataset = [1.2, 2.3, 0.9, 1.5, 3.3];
var min = d3.min(dataset); 
var max = d3.max(dataset);
var linear = d3.scale.linear() .domain([min, max]) .range([0, 300]);

console.log(linear(0.9));
console.log(linear(2.3));
console.log(linear(3.3));
