//alert("hello world!");


var dataset = [
              {x : 20, y : 30, r : 10}, 
              {x : 60, y : 30, r : 10}, 
              {x : 80, y : 30, r : 10},
              {x : 100, y : 30, r : 10}
    ];

var svg = d3.select("body").append("svg");

var circle = svg.selectAll(".myCircle")
                .data(dataset)
                .enter()
                .append("circle")
                .attr("class", "myCircle")
                .attr("cx", function(d){
                  return d.x;
                })
                .attr("cy", function(d){
                  return d.y;
                })
                .attr("r", function(d){
                  return d.r;
                })
                .style("fill", "red");
