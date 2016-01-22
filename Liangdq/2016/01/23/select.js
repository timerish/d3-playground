console.log(d3.select("body"));
d3.select("body").append("p").html("I'm p_a.Don't touch me!");
d3.select("body").append("p").attr("id","p_b").html("I'm p_b.Can you catch me?Can you give me a red coat?");
console.log(d3.select("p#p_b").style("color","red").text());
