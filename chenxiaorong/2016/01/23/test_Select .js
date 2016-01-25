console.log(d3.select("body"));
d3.select("body").append("div").html("今天下了好大的雪，好高兴呢，第四次看见雪！！").style("color","red");
d3.select("body").append("div").attr("id","div_Snow").html("下雪很好，可是好冷（~ . ~）").style("color","blue");
console.log(d3.select("div#div_Snow").text());
