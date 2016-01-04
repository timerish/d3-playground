alert('hello world!');
var dataset=[
{x:20,y:30,r:10},
{x:60,y:30,r:10},
{x:80,y:30,r:10}
];

var svg=d3.select("body").append("svg");

var circle=svg.selectAll(".myCircle")
              .data(dataset)
              .enter()
              .append("circle")
              .attr("class","myCircle")
              .attr("cx",function(d){
                    return d.x;
              })
              .attr("cy",function(d){
                 return d.y;
              })
              .attr("r",function(d){
                 return d.r;
              });
/*function load_sandbox(user, date) {
   src = 'https://raw.githubusercontent.com/bigdata-mindstorms/d3-playground/gh-pages/' + user + '/' + date + '/sandbox.js';
   d3.text(src, function (e, d) { 
     if(!e) {
       eval(d);
     }
   })
 }*/
