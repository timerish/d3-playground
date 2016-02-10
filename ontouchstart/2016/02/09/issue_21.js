issue_api = 'https://api.github.com/repos/bigdata-mindstorms/d3-playground/issues/21'
d3.json(issue_api, function (e, d) {
  if(!e) {
    d3.select('body').append('h1').html(d.title);
    d3.select('body').append('div').html(marked(d.body));
    load_comments();
  };
});

function load_comments() {
  comments_api = 'https://api.github.com/repos/bigdata-mindstorms/d3-playground/issues/21/comments?per_page=100';
  d3.json(comments_api, function (e, d) {
    if(!e) {
      list = d3.select('body')
        .append('div')
        .selectAll('div')
        .data(d)
        .enter()
        .append('div')
        .each(function (d) {
           console.log(d);
           var selection = d3.select(this);
           selection.append('img')
             .attr({
               src: d.user.avatar_url,
               height: 32
             })
             .style({
               display: 'block'
             });
           selection.append('div')
             .style({
               margin: '1em',
               padding: '1em',
               border: '1px solid #ccc'
             })
             .html(marked(d.body))
             .append('a')
             .attr({href: d.user.html_url})
             .html('@' + d.user.login);
        });
    }
  });
}
