```markdown
let声明块局部变量
变量声明提升，提升后都是undefined
==========================
for i in :i下标
for i of :i元素值

??下面的这个例子展示了 for...of 和 for...in 两种循环语句质检的区别。与 for...in 循环遍历的结果是数组元素的下标不同的是， for...of 遍历的结果是元素的值：

let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs "3", "5", "7" // 注意这里没有 hello
}

```
