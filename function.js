
// CP03 函数

function print(msg) {
    console.log(msg);
}

var print = function(msg) {
    console.log(msg);
};

// 函数表达式
print("Hello, World!");

// 表达式中使用函数名 f
// 作用
// 1. 函数内部调用自身
// 2. 方便除错, （除错工具显示函数调用栈时，将显示函数名，而不再显示这里是一个匿名函数）
var f = function foo() {};

// function 构造函数
var add = new Function('x', 'y', 'return x +y');
// 只有最后一个参数会被当做函数体
// 如果只有一个参数, 该参数就是函数体

// 如果一个函数被多次申明, 后面的声明就会覆盖前面的声明

// 函数是一等公民, 被认为是一个值, 与 swift 相同, 适合函数式编程

// 函数名的提升, 与 变量提升(hoisting) 相同


var t = function () {
    console.log("t");
}

function t() {
    console.log("tt");
}

t();

// 函数的属性 name

// 匿名函数
print(t.name);
// 非匿名函数
print(f.name);

// name 属性的一个用处, 获取参数参数的名字

// 函数的属性 length
// 返回函数预期传入的参数个数
print(t.length);

// 函数的 toString() 方法
// 返回函数的源代码
// 包含注释和换行符
// 原生函数返回 function (){[native code]}
print(t.toString());

// 利用这一点，可以变相实现多行字符串
var multiline = function (fn) {
    var arr = fn.toString().split('\n');
    return arr.slice(1, arr.length - 1).join('\n');
};
  
function y() {/*
    这是一个
    多行注释
*/}
  
 var desc = multiline(y);
 print(desc);


 // 函数作用域
 // 函数内部定义的变量, 会在该作用域内覆盖同名变量

// 注意，对于var命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量。

if (true) {
    var x = 5;
 }

  console.log(x);  // 5
//   上面代码中，变量x在条件判断区块之中声明，结果就是一个全局变量，可以在区块之外读取。

// 函数内部的变量提升
// 与全局作用域一样，函数作用域内部也会产生“变量提升”现象。var命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部

// 函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域

var a = 1;
var k = function () {
  console.log(a);
};

function kf() {
  var a = 2;
  k();
}

kf() // 1

// 上面代码中，函数k是在函数kf的外部声明的，所以它的作用域绑定外层，内部变量a不会到函数f体内取值，所以输出1，而不是2

// 函数参数不是必需的，JavaScript 允许省略参数


// 函数传递
// 原始类型: 传值传递 pass by value
// 符合类型(数组, 对象, 其他函数): 传址传递 pass by refrence

var p = 2;
function pf(p) {
    p = 3;
}

pf(p);
// 不改变 p
print(" p = " + p);

var po = { p: 1};

function pof(p) {
    p.p = 2;
}

pof(po);
// 改变了 po.p
print("p.p = " + po.p);

function pog(p) {
    p = [222, 3, 4];
}

pog(po);
// 对象不被改变
print("po.p = " + po.p);

// 同名参数, 去最后出现的值, 如果没有就是 undifined

// 所有参数 arguments, 像数组, 但不是数组, 是个对象

/*
// 转换方式
// 1. slice
var args = Array.prototype.slice.call(arguments);

// 2. 逐一填入新数组
var args = [];
for (var i = 0; i < arguments.length; i++) {
  args.push(arguments[i]);
}
*/

// 正常模式下, 可以修改 arguments

var nf = function(a, b) {
    arguments[0] = 3;
    arguments[1] = 2;
    return a + b;
  }
  
  print(nf(1, 1)); // 5

  // 严格模式下, arguments对象与函数参数不具有联动关系。也就是说，修改arguments对象不会影响到实际的函数参数
  var sf = function(a, b) {
    'use strict'; // 开启严格模式
    arguments[0] = 3;
    arguments[1] = 2;
    return a + b;
  }
  
  print(sf(1, 1)); // 2

  // 通过arguments对象的length属性，可以判断函数调用时到底带几个参数


  // 闭包: 捕获的变量 + 上下文环境
  // 用处: 封装对象的私有属性和私有方法
  function Person(name) {
    var _age;
    function setAge(n) {
      _age = n;
    }
    function getAge() {
      return _age;
    }
  
    return {
      name: name,
      getAge: getAge,
      setAge: setAge
    };
  }
  
  var p1 = Person('张三');
  p1.setAge(25);
  p1.getAge() // 25
  // 注意，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题

  // IIFE Immediately-Invoked Function Expression
// JavaScript 规定，如果function关键字出现在行首，一律解释成语句。因此，引擎看到行首是function关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错

// 通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。它的目的有两个：一是不必为函数命名，避免了污染全局变量；二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量

// eval 命令

// eval命令接受一个字符串作为参数，并将这个字符串当作语句执行

eval('var a = 1;');
a // 1

// 如果参数字符串无法当作语句运行，那么就会报错
// 放在eval中的字符串，应该有独自存在的意义，不能用来与eval以外的命令配合使用

// eval没有自己的作用域，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题

// 为了防止这种风险，JavaScript 规定，如果使用严格模式，eval内部声明的变量，不会影响到外部作用域
// 不过，即使在严格模式下，eval依然可以读写当前作用域的变量

// 总之，eval的本质是在当前作用域之中，注入代码。由于安全风险和不利于 JavaScript 引擎优化执行速度，一般不推荐使用。通常情况下，eval最常见的场合是解析 JSON 数据的字符串，不过正确的做法应该是使用原生的JSON.parse方法

// 为了保证eval的别名不影响代码优化，JavaScript 的标准规定，凡是使用别名执行eval，eval内部一律是全局作用域