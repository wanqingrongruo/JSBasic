// cp07 标准库 https://wangdoc.com/javascript/stdlib/object


function print(msg) {
  console.log(msg);
}

// 1. Object
// js 中所有对象都继承自 Object 对象
// Object 的原生方法分为两类, 本身的方法和实例方法 => 类(静态)方法和实例方法?


// 本身方法, Object 直接调用
// 实例方法, Object.prototype 调用

// Object() 函数, 将任意值转为对象

// 静态方法
// Object.keys(): 传入对象的所有属性(不包括继承), 不包括不可枚举的
// Object.getOwnPropertyNames():  传入对象的所有属性(不包括继承), 包括可枚举的

/*
除了上面提到的两个方法，Object还有不少其他静态方法，将在后文逐一详细介绍。

（1）对象属性模型的相关方法

Object.getOwnPropertyDescriptor()：获取某个属性的描述对象。
Object.defineProperty()：通过描述对象，定义某个属性。
Object.defineProperties()：通过描述对象，定义多个属性。
（2）控制对象状态的方法

Object.preventExtensions()：防止对象扩展。
Object.isExtensible()：判断对象是否可扩展。
Object.seal()：禁止对象配置。
Object.isSealed()：判断一个对象是否可配置。
Object.freeze()：冻结一个对象。
Object.isFrozen()：判断一个对象是否被冻结。
（3）原型链相关方法

Object.create()：该方法可以指定原型对象和属性，返回一个新的对象。
Object.getPrototypeOf()：获取对象的Prototype对象。

*/


// 实例方法, 定义在 Object.prototype 对象, 所有 Object 的实例对象都继承了这些方法
/**
 * 
Object.prototype.valueOf()：返回当前对象对应的值。
Object.prototype.toString()：返回当前对象对应的字符串形式。
Object.prototype.toLocaleString()：返回当前对象对应的本地字符串形式。
Object.prototype.hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
Object.prototype.isPrototypeOf()：判断当前对象是否为另一个对象的原型。
Object.prototype.propertyIsEnumerable()：判断某个属性是否可枚举
 */

// Object.prototype.toString可以看出一个值到底是什么类型

Object.prototype.toString.call(2) // "[object Number]"
Object.prototype.toString.call('') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(Math) // "[object Math]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call([]) // "[object Array]"

// 利用这个特性，可以写出一个比typeof运算符更准确的类型判断函数
var type = function (o){
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
  };
  
  type({}); // "object"
  type([]); // "array"
  type(5); // "number"
  type(null); // "null"
  type(); // "undefined"
  type(/abcd/); // "regex"
  type(new Date()); // "date"


  
// 属性描述对象
/**
 * JavaScript 提供了一个内部数据结构，用来描述对象的属性，控制它的行为，比如该属性是否可写、可遍历等等。这个内部数据结构称为“属性描述对象”（attributes object）。每个属性都有自己对应的属性描述对象，保存该属性的一些元信息
 * 
 {
  value: 123,  => 属性值, 默认 undefined
  writable: false,  => 是否可写, 默认 true
  enumerable: true, => 是否可遍历, 默认 true
  configurable: false, => 是否可配置, 默认 true, 如果设为false，将阻止某些操作改写属性描述对象，比如无法删除该属性，也不得改变各种元属性（value属性除外）。也就是说，configurable属性控制了属性描述对象的可写性。
  get: undefined, => 表示该属性的取值函数（getter），默认为undefined
  set: undefined => 表示该属性的存值函数（setter），默认为undefined
}
 */


var obj = Object.defineProperty({}, 'p', {
    value: 123,
    writable: false,
    enumerable: true,
    configurable: false
  });
  
  var obj02 = Object.defineProperties({}, {
    p1: { value: 123, enumerable: true },
    p2: { value: 'abc', enumerable: true },
    p3: { get: function () { return this.p1 + this.p2 },
      enumerable:true,
      configurable:true
    }
  });

  // Object.defineProperty()和Object.defineProperties()参数里面的属性描述对象，writable、configurable、enumerable这三个属性的默认值都为false


  /**
   * Object.prototype.propertyIsEnumerable()

实例对象的propertyIsEnumerable()方法返回一个布尔值，用来判断某个属性是否可遍历。注意，这个方法只能用于判断对象自身的属性，对于继承的属性一律返回false。
   */


// 对象的拷贝
var extend = function (to, from) {
    for (var property in from) {
      if (!from.hasOwnProperty(property)) continue;
      Object.defineProperty(
        to,
        property,
        Object.getOwnPropertyDescriptor(from, property)
      );
    }
  
    return to;
  }
  
  extend({}, { get a(){ return 1 } })
  // { get a(){ return 1 } })


  /// Array
  // 静态方法 Array.isArray(obj)

  var array = [1, 2, 3, 4];

  // 实例方法
  // valueOf(), 返回数据本身
  print(array.valueOf());
  // toString() 返回数组的字符串形式
  print(array.toString());

  // push方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组
 var length = array.push(33);
 print(length);
  // pop 方法用于删除数组的最后一个元素，并返回该元素。注意，该方法会改变原数组, 空数组返回 undefined
var dv = array.pop();
print(dv);

// shift() 方法用于删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组。 可以用来遍历清空数组
var a = ['a', 'b', 'c'];
a.shift();
print(a);
// unshift()方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组
a.unshift('x'); // 3
print(a);
// unshift()方法可以接受多个参数，这些参数都会添加到目标数组头部

// join()方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔
// 通过call方法，这个方法也可以用于字符串或类似数组的对象
Array.prototype.join.call('hello', '-')
// "h-e-l-l-o"

// concat方法用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变。
// 除了数组作为参数，concat也接受其他类型的值作为参数，添加到目标数组尾部
// 如果数组成员包括对象，concat方法返回当前数组的一个浅拷贝。所谓“浅拷贝”，指的是新数组拷贝的是对象的引用。

// reverse方法用于颠倒排列数组元素，返回改变后的数组。注意，该方法将改变原数组

// slice()方法用于提取目标数组的一部分，返回一个新数组，原数组不变。/
// arr.slice(start, end);
// slice()方法的一个重要应用，是将类似数组的对象转为真正的数组

// splice()方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组
// arr.splice(start, count, addElement1, addElement2, ...);
// splice的第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素

// 如果只提供第一个参数，等同于将原数组在指定位置拆分成两个数组。

// var a = [1, 2, 3, 4];
a.splice(2) // [c]
a // [x, b]

// sort方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变
// sort()方法不是按照大小排序，而是按照字典顺序。也就是说，数值会被先转成字符串，再按照字典顺序进行比较
// sort的参数函数本身接受两个参数，表示进行比较的两个数组成员。如果该函数的返回值大于0，表示第一个成员排在第二个成员后面；其他情况下，都是第一个元素排在第二个元素前面。

// map()方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回
// map()方法还可以接受第二个参数，用来绑定回调函数内部的this变量
var arr = ['a', 'b', 'c'];

[1, 2].map(function (e) {
  return this[e];
}, arr)
// ['b', 'c']
// 上面代码通过map()方法的第二个参数，将回调函数内部的this对象，指向arr数组。
// 如果数组有空位，map()方法的回调函数在这个位置不会执行，会跳过数组的空位。

// forEach()方法与map()方法很相似，也是对数组的所有成员依次执行参数函数。但是，forEach()方法不返回值，只用来操作数据
// forEach()方法也会跳过数组的空位

// filter()方法用于过滤数组成员，满足条件的成员组成一个新数组返回

// some方法是只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false

// every方法是所有成员的返回值都是true，整个every方法才返回true，否则返回false

// 注意，对于空数组，some方法返回false，every方法返回true，回调函数都不会执行

// reduce()方法和reduceRight()方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，reduce()是从左到右处理（从第一个成员到最后一个成员），reduceRight()则是从右到左（从最后一个成员到第一个成员）
// 如果要对累积变量指定初值，可以把它放在reduce()方法和reduceRight()方法的第二个参数
// 建议总是加上第二个参数，这样比较符合直觉，每个数组成员都会依次执行reduce()方法的参数函数。另外，第二个参数可以防止空数组报错


// indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1
// indexOf方法还可以接受第二个参数，表示搜索的开始位置

// lastIndexOf方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1。

// 注意，这两个方法不能用来搜索NaN的位置，即它们无法确定数组成员是否包含NaN
// 这是因为这两个方法内部，使用严格相等运算符（===）进行比较，而NaN是唯一一个不等于自身的值