
// CP02: 数据类型


// number, string, boolean, undefined, null, object
// 

function print(msg) {
    console.log(msg);
}

var n = 123;
var m = 12.3;
var s = "zwx";
var b = true;

function f() {

}

var foo = f;

// typeof 运算符
// instanceof运算符和Object.prototype.toString

print(typeof n);
print(typeof m);
print(typeof s);
print(typeof b);
print(typeof foo);

var u;
// 使用 typeof 来检查一个没有声明的变量
print(typeof u);

print(typeof []);
print(typeof {});
print(typeof null);  // object, 历史兼容问题
print(typeof undefined);

// null 表示一个 "空" 的对象, 转为数值是 0
// undefined 表示 "此处无定义" 的原始值, 转为数据是 NaN
// 历史原因
print(Number(null));
print(Number(undefined));


// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined


// 布尔值
/* 以下值会转为 false:
undefined
null
false
0
NaN
""或''（空字符串）
*/

// {}, [] => 空数组, 空对象转为 true

// https://wangdoc.com/javascript/types/number

Number.MAX_VALUE;
Number.MIN_VALUE;

// NaN 不等于任何数, 包括自己
//  0 / 0 = NaN
// 1 / 0 = Infinity
// 1 / -0 = -Infinity

// parseInt 只有两个结果, 要么数值要么 NaN
// 第二个参数代表要转化为的进制
parseInt('1000', 2)

parseFloat("3.14")

//  parseInt,  parseFloat 都会过滤kong'ge
// parseFloat会将空字符串转为NaN

// isNaN()
// isNaN只对数值有效，如果传入其他值，会被先转成数值。比如，传入字符串的时候，字符串会被先转成NaN，所以最后返回true，这一点要特别引起注意。
//  也就是说，isNaN为true的值，有可能不是NaN，而是一个字符串

print(isNaN("ddd"));

// 使用 isNaN 前最好先判断数值
function myIsNaN(value) {
    return typeof value === 'number' && isNaN(value);
}

// 判断NaN更可靠的方法是，利用NaN为唯一不等于自身的值的这个特点，进行判断。
function myIsNaN2(value) {
  return value !== value;
}

var s = '\u00A9';

print(s);

/// !!!!important => 与 OC 相同
// 每个字符在 JavaScript 内部都是以16位（即2个字节）的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为16位长度，即2个字节。

/**
 * JavaScript 对 UTF-16 的支持是不完整的，由于历史原因，只支持两字节的字符，不支持四字节的字符。这是因为 JavaScript 第一版发布的时候，Unicode 的码点只编到U+FFFF，因此两字节足够表示了。后来，Unicode 纳入的字符越来越多，出现了四字节的编码。但是，JavaScript 的标准此时已经定型了，统一将字符长度限制在两字节，导致无法识别四字节的字符。上一节的那个四字节字符𝌆，浏览器会正确识别这是一个字符，但是 JavaScript 无法识别，会认为这是两个字符。

'𝌆'.length // 2
 */

// base64

/**
 * 所谓 Base64 就是一种编码方法，可以将任意值转成 0～9、A～Z、a-z、+和/这64个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。

JavaScript 原生提供两个 Base64 相关的方法。

btoa()：任意值转为 Base64 编码
atob()：Base64 编码转为原来的值
var string = 'Hello World!';
btoa(string) // "SGVsbG8gV29ybGQh"
atob('SGVsbG8gV29ybGQh') // "Hello World!"
注意，这两个方法不适合非 ASCII 码的字符，会报错。

btoa('你好') // 报错
要将非 ASCII 码字符转为 Base64 编码，必须中间插入一个转码环节，再使用这两个方法。

function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}
 
function b64Decode(str) {
  return decodeURIComponent(atob(str));
}

b64Encode('你好') // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"
 */

// 对象 => swift 字典

var obj = {
    foo: "hello",
    bar: "world"
}

// key 是字符串(symbol 后面引入), 可不加引号, 不过对于 不符合biao'shi