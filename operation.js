// cp05 操作符

function print(msg) {
    console.log(msg);
}

1 + 2; // 加法

1 + 'a' // 1a
1 + true // 2
1 + false // 1
1 + null // 1
1 + undefined // NaN

//  加法运算符是在运行时决定，到底是执行相加，还是执行连接。也就是说，运算子的不同，导致了不同的语法行为，这种现象称为“重载”（overload）

// 除了加法运算符，其他算术运算符（比如减法、除法和乘法）都不会发生重载。它们的规则是：所有运算子一律转为数值，再进行相应的数学运算

// 如果运算子是对象，必须先转成原始类型的值，然后再相加
var obj = { p: 1 };
obj + 2 // "[object Object]2"

/*
对象转成原始类型的值，规则如下:
首先，自动调用对象的valueOf方法。
var obj = { p: 1 };
obj.valueOf() // { p: 1 }

一般来说，对象的valueOf方法总是返回对象自身， 如果不是原始类型, 这时再自动调用对象的toString方法，将其转为字符串
var obj = { p: 1 };
obj.valueOf().toString() // "[object Object]"

*/

var obj02 = {
    valueOf: function () {
        return 1;
    }
};

obj02 + 2 // 3

//  这里有一个特例，如果运算子是一个Date对象的实例，那么会优先执行toString方法
var obj03 = new Date();
obj03.valueOf = function () { return 1 };
obj03.toString = function () { return 'hello' };

obj03 + 2 // "hello2"


// % => 需要注意的是，运算结果的正负号由第一个运算子的正负号决定
// 余数运算符还可以用于浮点数的运算。但是，由于浮点数不是精确的值，无法得到完全准确的结果。

// 自增 自减
// 运算之后，变量的值发生变化，这种效应叫做运算的副作用（side effect）。自增和自减运算符是仅有的两个具有副作用的运算符，其他运算符都不会改变变量的值

// 数组运算符 +, -, 一元运算符, 将任何值转为数值, 与 Number 函数的作用相同


// 指数运算符 **

// 比较运算符
// 字符串比较: JavaScript 引擎内部首先比较首字符的 Unicode 码点。如果相等，再比较第二个字符的 Unicode 码点，以此类推
// 由于所有字符都有 Unicode 码点，因此汉字也可以比较

// 如果两个运算子都是原始类型的值，则是先转成数值再比
// 这里需要注意与NaN的比较。任何值（包括NaN本身）与NaN使用非相等运算符进行比较，返回的都是false
// 如果运算子是对象，会转为原始类型的值，再进行比较


// 相等运算符（==）比较两个值是否相等，严格相等运算符（===）比较它们是否为“同一个值”。
// 如果两个值不是同一类型，严格相等运算符（===）直接返回false，而相等运算符（==）会将它们转换成同一个类型，再用严格相等运算符进行比较

// 严格相等运算符
// 需要注意的是，NaN与任何值都不相等（包括自身)
// 两个复合类型（对象、数组、函数）的数据比较时，不是比较它们的值是否相等，而是比较它们是否指向同一个地址
// undefined和null与自身严格相等


// 相等运算符
// 比较不同类型的数据时，相等运算符会先将数据进行类型转换，然后再用严格相等运算符比较。下面分成几种情况，讨论不同类型的值互相比较的规则
// 原始类型的值会转换成数值再进行比较。
// 对象（这里指广义的对象，包括数组和函数）与原始类型的值比较时，对象转换成原始类型的值，再进行比较
// undefined和null只有与自身比较，或者互相比较时，才会返回true；与其他类型的值比较时，结果都为false。

// 不管x是什么类型的值，经过两次取反运算后，变成了与Boolean函数结果相同的布尔值。所以，两次取反就是将一个值转为布尔值的简便写法

// 且运算符
// 它的运算规则是：如果第一个运算子的布尔值为true，则返回第二个运算子的值（注意是值，不是布尔值）；如果第一个运算子的布尔值为false，则直接返回第一个运算子的值，且不再对第二个运算子求值

// 或运算符
// 它的运算规则是：如果第一个运算子的布尔值为true，则返回第一个运算子的值，且不再对第二个运算子求值；如果第一个运算子的布尔值为false，则返回第二个运算子的值


// 二进制运算符
// 位运算符直接处理每一个比特位（bit），所以是非常底层的运算，好处是速度极快，缺点是很不直观
// 位运算符只对整数起作用，如果一个运算子不是整数，会自动转为整数后再执行, 遇到小数时，会将小数部分舍去，只保留整数部分
// 虽然在 JavaScript 内部，数值都是以64位浮点数的形式储存，但是做位运算的时候，是以32位带符号的整数进行运算的，并且返回值也是一个32位带符号的整数。
function toInt32(x) {
    return x | 0;
}

//   toInt32可以将小数转为整数。对于一般的整数，返回值不会有任何变化。对于大于或等于2的32次方的整数，大于32位的数位都会被舍去

// 3的32位整数形式是00000000000000000000000000000011，二进制否运算以后得到11111111111111111111111111111100。由于第一位（符号位）是1，所以这个数是一个负数。JavaScript 内部采用补码形式表示负数，即需要将这个数减去1，再取一次反，然后加上负号，才能得到这个负数对应的10进制值。这个数减去1等于

// 对一个整数连续两次二进制否运算，得到它自身
// 对一个小数连续进行两次二进制否运算，能达到取整效果
// 对字符串进行二进制否运算，JavaScript 引擎会先调用Number函数，将字符串转为数值

// “异或运算”有一个特殊运用，连续对两个数a和b进行三次异或运算，a^=b; b^=a; a^=b;，可以互换它们的值。这意味着，使用“异或运算”可以在不引入临时变量的前提下，互换两个变量的值

// 左移运算符（<<）表示将一个数的二进制值向左移动指定的位数，尾部补0，即乘以2的指定次方。向左移动的时候，最高位的符号位是一起移动的
// 右移运算符（>>）表示将一个数的二进制值向右移动指定的位数。如果是正数，头部全部补0；如果是负数，头部全部补1。右移运算符基本上相当于除以2的指定次方（最高位即符号位参与移动）
// 头部补零的右移运算符（>>>）与右移运算符（>>）只有一个差别，就是一个数的二进制形式向右移动时，头部一律补零，而不考虑符号位.所以，该运算总是得到正值。对于正数，该运算的结果与右移运算符（>>）完全一致，区别主要在于负数



// void运算符的作用是执行一个表达式，然后不返回任何值，或者说返回undefined
// 这个运算符的主要用途是浏览器的书签工具（Bookmarklet），以及在超级链接中插入代码防止网页跳转

// 指数运算符 三目运算符 赋值运算符 都是右结合, 其他运算符都是左结合