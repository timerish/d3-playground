var urls=["http://www.baidu.com","http://www.w3school.com.cn/","http://codepen.io/wenbin5243/pen/GKjCo/"];
var titles=["Baidu","W3C School","D3 Demo"];

//添加链接函数
function addLinks(urls,titles){
   d3.select('body').selectAll('p')
     .data(urls)
     .enter()
     .append('a')
     .attr('href',function(d,i){
         return urls[i];
      })
     .attr('target','_blank')
     .style('font-size','50px')
     .html(function(d,i){
         return titles[i];
     })
     .append('br');
}

//函数调用
addLinks(urls,titles);
