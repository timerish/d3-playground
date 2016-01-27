//初始化一维数组
function getArray(length,min,max){
    var tmpArray=[];
    tmpArray.length=length;
    for(var i=0;i<length;i++){
        var tmp=min-1;
        do{
            tmp=Math.floor(Math.random()*max);
        }while(tmp>max || tmp < min);
        tmpArray[i]=tmp;
    }
  return tmpArray;
}
//初始化二维数组
function getMatrix(row,col,min,max){
      var tmpArray=[];
      for(var i=0;i<row;i++){
          var tmp=getArray(col,min,max);
          tmpArray.push(tmp);
      }
      return tmpArray;
}
//展示数据
function showOriginData(array){
    if(Array.isArray(array)&&array.length>0){
          paintText('元数据：[',false);
          if(Array.isArray(array[0])){
                array.forEach(function(item,index,array){
                        paintText('['+item.join()+']',true);
                 });
                paintText(']',true);
          }else{
              paintText(array.join()+']',false);
         }
    }
}
//绘制文字
//text 文本
//br 是否换行
function paintText(text,br){
    if(br){
        d3.select('body')
          .append('p')
          .style('color','steelblue')
          .style('font-size','20px')
          .html(text);
    }else{
        d3.select('body')
          .append('p')
          .style('display','inline')
          .style('color','steelblue')
          .style('font-size','20px')
          .html(text);
    }
}
//绘制
function paint(array){
   //左留白
   var leftPadding=50;
   //矩形高度
   var rectHeight=20;
   //svg 对象
   var svg=d3.select('body')
             .append('svg')
             .attr('width',300)
             .attr('height',300);
   //比例尺
   var linear=d3.scale.linear()
                .domain([0,d3.max(array)])
                .range([0,250]);
   //坐标轴
   var axis=d3.svg.axis()
              .scale(linear)
              .orient("bottom")
              .ticks(10);
   //绘制柱状图
   svg.selectAll('rect')
      .data(array)
      .enter()
      .append('rect')
      .attr('x',leftPadding)
      .attr('y',function(d,i){
            return i*rectHeight;
      })
      .attr('width',function(d){
            return linear(d);
      })
      .attr('height',rectHeight-3)
      .attr('fill','steelblue');
   //添加比例尺
   svg.append('g')
      .attr('class','axis')
      .attr('transform','translate('+leftPadding+','+(array.length*rectHeight+3)+')')
      .call(axis);
    
}
//绘制沿路径运动的圆
function paintCircle(trajectory){
     var circle=d3.select('body')
                  .append('svg')
                  .attr('width',300)
                  .attr('height',300)
                  .append('circle')
                  .attr('cx',100)
                  .attr('cy',100)
                  .attr('r',20)
                  .style('fill','#f849a6');
     trajectory.forEach(function(item,index,array){
             if(Array.isArray(item)&&item.length>=2){
                 circle=circle.transition()
                        .duration(3000)
                        .ease("bounce")
                        .attr("cx",item[0])
                        .attr("cy",item[1]);
                //console.log(index+":"+item.join());
             }
     });
}

//随机获取一组数据
var data=getArray(10,0,100);
//随机获取20组坐标
var trajectory=getMatrix(20,2,0,250);
//将数据转化为图标展示
paint(data);
//展示数据
showOriginData(data);
//沿坐标运动
paintCircle(trajectory);


