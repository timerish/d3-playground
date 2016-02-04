d3.select("body").append("h1").html("用户明细");

function t_user(array){
  selection = d3.select("body").append("table");
  array.forEach(function(item,index){
    tr = selection.append("tr");
    td_user(tr,item); 
  })
}

function td_user(selection,array){
  tr.append("td").html(array.id);
  tr.append("td").html(array.userName);
}

Users = [{"id":1,"userName":"小明"},{"id":2,"userName":"小王"},{"id":3,"userName":"小张"}];
t_user(Users);
