db = new nedb("nedb"); 
body = d3.select('body');
title = 'NeDB';
d3.select('title').html(title);
ol = body.append('ol')
  .style({ 
    width: '100%', 
    height: '80%', 
    overflow: 'scroll'
  });

input = body.append('textarea')
  .style({ 
    width: '100%',
    height: '10%'
  });

add = body.append('button')
  .html('Add')
  .style({
    'margin-top': '1em',
    color: '#FFF',
    background: 'green'
  })
  .on('click', function (e) { 
    data = {}; 
    data.date = new Date();
    if(data.value = input.node().value) {
      db.insert(data, update);
      input.node().value = '';
    }
  });

function update () {
  db.find({}, function (e, d) {
    selection = ol.selectAll('li').data(d, function (d) { return d._id});
    selection.exit().remove();
    var li = selection.enter()
      .append('li')
    li.append('pre')
      .style({
        display: 'block',
        width: '90%',
        padding: '1em',
        border: '1px solid #abc'
      })
      .html(function (d) {
        return js_yaml.dump(d);
      });
    li.append('button')
      .html('Remove')
      .style({
        color: '#FFF',
        background: 'red'
      })
      .on('click', function (d) {
        db.remove({_id : d._id}, { multi: true }, update);
      });
    ol.node().scrollTop = ol.node().scrollHeight;
  });
}

db.loadDatabase(update);
