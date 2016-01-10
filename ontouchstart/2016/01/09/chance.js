hide();
var title = 'chance examples';
d3.select('title').html(title);

var chance = new Chance();
var examples = [
  "chance.bool()",
  "chance.bool({likelihood: 30})",
  "chance.sentence()",
  "chance.word()",
  "chance.character()",
  "chance.character({pool: 'abcde'})",
  "chance.character({alpha: true})",
  "chance.character({casing: 'lower'})",
  "chance.character({symbols: true})",
  "chance.floating()",
  "chance.floating({fixed: 7})",
  "chance.floating({min: 0, max: 100})",
  "chance.integer()",
  "chance.integer({min: -20, max: 20})",
  "chance.natural()",
  "chance.natural({min: 1, max: 20})",
  "chance.string()",
  "chance.string({length: 5})",
  "chance.string({pool: 'abcde'})",
  "chance.paragraph()",
  "chance.paragraph({sentences: 1})",
  "chance.sentence()",
  "chance.sentence({words: 5})"
];

body = d3.select('body');
body.append('h1')
  .html(title)
  .on('click', function () {
    location = 'https://www.npmjs.com/package/chance';
  });

body.append('div')
  .selectAll('dl')
  .data(examples)
  .enter()
  .append('dl')
  .each(function (d) {
    d3.select(this).append('dt').append('pre').html(d);
    d3.select(this).append('dd').html(eval(d));
});
