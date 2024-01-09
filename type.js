
// CP06: 语法专题

function print(msg) {
    console.log(msg);
}

// https://wangdoc.com/javascript/features/conversion

// Number() => 比 parstInt() 严格, 都会自动过滤一个字符串前导和后缀的空格
// valueOf  -> toString -> 报错

// String()
// toString -> valueOf -> 报错

// Boolean()
// 所有对象（包括空对象）的转换结果都是true

// null -> 0, undefined -> NaN


// 错误机制

var error = new Error("错误信息"); 
error.message; // 标准属性
error.name = "错误名称"; // 非标准属性
error.stack = "错误堆栈"; // 非标准属性
// 非标准属性不是每种实现都有

// SyntaxError: 解析代码时发生语法错误
// ReferenceError: 引用未定义的变量
// TypeError: 变量类型不匹配
// RangeError: 数值超出有效范围
// URIError: URI 格式错误
// EvalError: eval 函数执行错误

function UserError(message) {
    this.message = message || '默认信息';
    this.name = 'UserError';
  }
  
  UserError.prototype = new Error();
  UserError.prototype.constructor = UserError;
//   上面代码自定义一个错误对象UserError，让它继承Error对象。然后，就可以生成这种自定义类型的错误了。
new UserError('这是自定义的错误！');

// throw: 手动中断程序执行, 抛出一个错误
var x = -1;
if (x < 0) {
    throw new UserError('x不能小于0');
}


// try ... catch ... finally
// return语句的执行是排在finally代码之前，只是等finally代码执行完毕后才返回



// console: https://wangdoc.com/javascript/features/console