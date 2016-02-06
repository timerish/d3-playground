var 销售额 = [200,178,213,330,150,300,295,177,260,340,250,322];
var 月份 = [1,2,3,4,5,6,7,8,9,10,11,12];

var xordinal = d3.scale.ordinal().domain(月份).rangeRoundBands([0, 480]);
var ylinear = d3.scale.linear().domain([d3.min(销售额),d3.max(销售额)]);
console.log("****");
console.log(ylinear,range(););
console.log(xordinal.range(););
console.log("****");

var svg = d3.select("body").append("svg").attr("width", 500) .attr("height", 500);


var xaxis =  d3.svg.axis().scale(xordinal).orient("bottom");
var yaxis =  d3.svg.axis().scale(ylinear).orient("left");
svg.append("g").call(xaxis);
svg.append("g").call(yaxis);



var rects = svg.selectAll("rect").data(销售额).enter().append("rect")
.attr("x", function(d,i){ return xordinal(i) + 10; } ).attr("y",function(d,i){ return ylinear(d); }).attr("width", xordinal.rangeBand() - 20 ).attr("height", function(d,i){ return ylinear(d); });
