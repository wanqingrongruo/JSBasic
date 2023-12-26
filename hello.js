function greetMe(yourName) {
    console.log('Hello ' + yourName);
  }
  
  greetMe('World')

  function print(msg) {
    console.log(msg);
  }


  // CP1: 基本语法
  var a = 1;
  print(a);
  var b;  // undefined
  print(b);

  var c, d;

  // var 可以不使用
  // 没有申明直接使用会报错 => ReferenceError: x is not defined
  // 动态类型, 变量可以随时修改类型 => 很不好

  a = "hello";
  print(a);

  // 变量提升(hosting)
  /**
   * JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。
   * 这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoisting）
   */
  print(d);
  var d = 222;

  // 区块对 var 来说不构成单独的 scope

  {
    var e = 333;
  }

  // 能正常访问到
  print(e);

  var x = 1;
  var y = 2;
  if (x == y) {
    print("equal");
  } else {
    print("x = $x, y = $y");
  }

  // switch 需要有 break 来跳出
  switch (x) {
    case 1:
      print("xxxxxx");
      break;
    default:
      print("yyyyyy");
      break;
  }

 // 需要注意的是，switch语句后面的表达式，与case语句后面的表示式比较运行结果时，采用的是严格相等运算符（===），而不是相等运算符（==），这意味着比较时不会发生类型转换。

 switch (x) {
  case true:
    print("xxxxxx");
    break;
  default:
    print("yyyyyy");
    break;
}

var even = (x % 2) == 0 ? true : false;
print(even);

var n = 4;
for(var i = 0; i < n; i++) {
  print(i);
}

// while 后面的分号不能省
do {
  print(n);
  n++;
} while(n < 8);

// 标签
// break label 跳出双重循环
top:
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      if (i === 1 && j === 1) {
        break top;
      }

      print('i=' + i + ', j=' + j);
    }
  }


// continue label 跳出当前循环, 直接进入下一轮外层循环
top2:
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      if (i === 1 && j === 1) {
        continue top2;
      }

      print('i=' + i + ', j=' + j);
    }
  }
