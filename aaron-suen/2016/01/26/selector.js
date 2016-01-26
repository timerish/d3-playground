console.log(d3.select("body"));
d3.select("body").append("p").html("Hey siri, 上海田子坊在哪里？");
d3.select("body").append("p").attr("id","p_answer").html("北京之南，南京之东");
console.log(d3.select("p#p_answer").style("color","green").text());
