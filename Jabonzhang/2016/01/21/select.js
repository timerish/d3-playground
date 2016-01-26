console.log(d3.select("body"));   
d3.select("body").
append("p")
.html("Good Good Study!!");  
d3.select("body")
.append("p")
.attr("id","p_b")
.html("Day Day Up!!");   
console.log(d3.select("p#p_b")
.style("color","red")
.style("font-size","29px")
.text());
