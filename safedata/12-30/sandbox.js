//alert("hello world!");

// // 2015-12-30
// src = 'https://raw.githubusercontent.com/bigdata-mindstorms/d3-playground/gh-pages/lzyforever/2015-12-30/sandbox.js';
// d3.text(src, function (e, d) { 
//   if(!e) {
//     eval(d);
//   }
// })
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
