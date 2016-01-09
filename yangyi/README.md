#D3.js学习笔记 （纯手打  ——yangyi）
[TOC]

##D3简介
   > ** d3.js**的全称是（Data-Driven Documents），顾名思义可以知道是一个被数据驱动的文档。
名字有点抽象，说简单点，其实就是一个javascript的函数库，使用它主要是来做数据可视化的。

## 第一个程序 helloWorld
 * 用d3来输入helloword

```
<html>
  <head>
        <meta charset="utf-8">
        <title>HelloWorld</title>
  </head>
    <body>
        <p> 1</p>
        <p> 2</p>
        <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
        <script>
        d3.select("body").selectAll("p").text("Hello World");
        </script>
    </body>
</html>
```
   结果页面上面的p标签的内容变成了 'Hello World';
 * 下面来改变字体的颜色和大小。稍微修改以上的代码
``` JS
//选择<body>中所有的<p>，其文本内容为 Hello World，选择集保存在变量 p 中
var p = d3.select("body")
          .selectAll("p")
          .text("Hello World");
//修改段落的颜色和字体大小
p.style("color","red")
 .style("font-size","72px");
```
上面的代码是先将选中的元素赋值给p，然后通过变量p来改变样式，这样可以使代码更整洁。
    这里涉及一个概念：**选择集**
    使用d3.select()或d3.selectAll()选择元素后返回的对象，就是**选择集**
    另外，D3能够连续不断的调用函数，形如：
d3.select().selectAll().text()
这种称为**链式语法**，和JQUERY很像。

## 选择元素和绑定数据

###如何选择元素

 在D3中，用户选择元素的函数有两个
  *  d3.select() ：是选择所有指定元素的第一个
  *  d3.selectAll() :是选择所有指定元素的全部
这两个函数返回的结果称为**选择集**
常见的有：
```html
var body = d3.select("body"); //选择文档中的body元素
var p1 = body.select("p");      //选择body中的第一个p元素
var p = body.selectAll("p");    //选择body中的所有p元素
var svg = body.select("svg");   //选择body中的svg元素
var rects = svg.selectAll("rect");  //选择svg中所有的svg元素
```
###如何绑定数据

D3有个独特的功能：能将数据绑定在dom上，也就是绑定到文档上。
D3中通过以下两个函数来绑定数据。
  * datum()： 绑定一个数据到选择集上。
  * data(): 绑定一个数据到选择集上，数组的各项值分别与选择集的各个元素绑定
相对而言，data（）比较常用。

###datum()

假设有一串字符串China，要将此字符串分别与三个段落绑定。代码如下。
```
var str = "China";var body = d3.select("body");var p = body.selectAll("p");

p.datum(str);

p.text(function(d, i){    return "第 "+ i + " 个元素绑定的数据是 " + d;
});
```
输入如下：
```
第 0 个元素绑定的数据是 China

第 1 个元素绑定的数据是 China

第 2 个元素绑定的数据是 China
```
在上面的代码中，用到了一个无名函数 **function(d,i) **。当选择集需要使用被绑定的数据时，常常需要这么使用。其中包含两个参数。
* d代表数据，也就是与某个yuans绑定的数据
 * i代表索引，代表数据的索引号，从0开始。


### data()
有一个数组，接下来要分别绑定dao三个段落里面。
```
var dataset = ["I like dog","I like cat","I like snake"];
```
调用data()绑定数据
```
var body = d3.select("body");var p = body.selectAll("p");

p.data(dataset)
  .text(function(d, i){      return d;
  });

```
输出
```
I like dog

I like cat

I like snake
```
这里也使用了无名函数 **function(d.i)**

##选择,插入,删除元素

###如何选择元素
 ```
<p>Apple</p>
<p>Pear</p>
<p>Banana</p>

var p = body.select("p");p.style("color","red");
 //使用select()，   给一个p元素添加了红色
var p = body.selectAll("p");
p.style("color","red");

//使用selectAll()，给所有的p元素添加样式

```
###插入元素
插入元素涉及了两个函数
* append():在选择集末尾插入元素
* insert() :在选择集前面插入元素

```
body.append("p")
    .text("append p element");

body.insert("p","#myid")
  .text("insert p element");
//一个 id 为 #myid的p元素
```

### 删除元素
删除一个元素时，对于选择的元素，使用remove即可

```
var p = body.select("#myid");
p.remove();
```


