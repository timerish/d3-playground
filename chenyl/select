d3.select('body').append('p').html('省：<span id = "province"></span>');
province = d3.select('span#province');
selectprovince = d3.select('body').append('select');
selectprovince.append('option').html('请选择').attr('value','请选择');
provinces = ['四川省','湖南省','甘肃省','河北省'];
for(i = 1; i<= provinces.length; i++){
    selectprovince.append('option').html(provinces[i-1]).attr('value',provinces[i-1]);
}
selectprovince.on('change',function(e){
    province.html(this.value);
 });
