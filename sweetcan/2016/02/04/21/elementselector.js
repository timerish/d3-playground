d3.select('body').append('div').html('<p>hello world</p>')
                .style('width','500px')
                .style('height','200px')
                .style('background','yellow')
                .style('color','red')
                .append('a').attr('href','http://www.baidu.com')
                .html('百度一下');
                console.log(d3.select('body'));
                console.log(d3.select('div').html());
                console.log(d3.select('div').text());
                console.log(d3.select('a').html());
                console.log(d3.select('a').text());
                
