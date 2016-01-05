d3.select("body").html('');//清除
var width=400;//定义画布宽
var height=400;//定义画布高
//初始化svg画布 
var svg=d3.select("body")
          .append("svg")
          .attr("width",width)
          .attr("height",height);
var padding={left:30,right:30,top:20,bottom:20};//图表留白
var dataset=[10,20,30,40,33,24,12,5];//数据
//定义x轴比例尺
var xScale=d3.scale.ordinal()
             .domain(d3.range(dataset.length))
             .rangeRoundBands([0,width-padding.left-padding.right]);
 //定义y轴比例尺
var yScale=d3.scale.linear()
             .domain([0,d3.max(dataset)])
             .range([height-padding.top-padding.bottom,0]);
//定义x坐标轴
var xAxis=d3.svg.axis()
            .scale(xScale)
            .orient("bottom");
 //定义y坐标轴
var yAxis=d3.svg.axis()
            .scale(yScale)
            .orient("left");
//定义矩形柱子的留白
var rectPadding=4;
//绘制柱状图
var rects=svg.selectAll(".MyRect")
             .data(dataset)
             .enter()
             .append("rect")
             .attr("class","MyRect")
             .attr("transform","translate("+padding.left+","+padding.top+")")
             .attr("x",function(d,i){
                  return xScale(i)+rectPadding/2;
             })
             .attr("y",function(d){
                return yScale(d);
             })
             .attr("width",xScale.rangeBand()-rectPadding)
             .attr("height",0)//过渡项开始值
             .transition()//启动过渡
             .duration(2000)//持续时间2秒
             .attr("height",function(d){
                return height-padding.top-padding.bottom-yScale(d);
             })//过渡项最终值
             .attr("fill","steelblue");
//添加文字
var texts=svg.selectAll(".MyTest")
             .data(dataset)
             .enter()
             .append("text")
             .attr("class","MyTest")
             .attr("transform","translate("+padding.left+","+padding.top+")")
             .attr("x",function(d,i){
                  return xScale(i)+rectPadding/2;
              })
             .attr("y",function(d){
                  return yScale(d);
             })
             .attr("dx",function(d){
                  return (xScale.rangeBand()-rectPadding)/2;
             })
             .attr("dy",function(d){
                  return 20;
             })
             .text(function(d){
                  return d;
             });
//添加x轴
var xg=svg.append("g")
          .attr("class","axis")
          .attr("transform","translate("+padding.left+","+(height-padding.bottom)+")")
          .call(xAxis);
//添加y轴
var yg=svg.append("g")
          .attr("class","axis")
          .attr("transform","translate("+padding.left+","+padding.top+")")
          .call(yAxis);


