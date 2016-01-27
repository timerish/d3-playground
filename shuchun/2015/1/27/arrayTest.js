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
          var tmp=initArray(col,min,max);
          tmpArray.push(tmp);
      }
      return tmpArray;
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

//随机获取一组数据
var data=getArray(10,0,100);
//将数据转化为图标展示
paint(data);
