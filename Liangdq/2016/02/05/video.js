d3.select('title').html('恭喜恭喜(李宗胜)');
src = "http://images.apple.com/media/cn/watch/2016/4d377b9e-3d20-434d-adfd-8da768d35426/tv-spot/newyear-song-foryou/watch-newyear-song-foryou-cn-20160122_1280x720h.mp4";
d3.select('body')
  .html('<h1>恭喜恭喜(李宗胜)</h1>')
  .append('video')
  .attr({ 
    controls:true,
    autoplay : true, 
    src : src
  });
