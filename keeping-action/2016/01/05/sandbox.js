body.html('');
var dataset=[
{x:20,y:30,r:10,color:'red'},
{x:60,y:30,r:10,color:'Azure'},
{x:80,y:30,r:10,color:'Fuchsia'}
];

var svg=d3.select("body").append("svg");

var circle=svg.selectAll(".myCircle")
              .data(dataset)
              .enter()
              .append("circle")
              .attr("class","myCircle")
              .attr('fill',function(d){
                return d.color;
              })
              .attr("cx",function(d){
                    return d.x;
              })
              .attr("cy",function(d){
                 return d.y;
              })
              .attr("r",function(d){
                 return d.r;
              });
