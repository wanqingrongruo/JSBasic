// cp04 数组

function print(msg) {
    console.log(msg);
}

var arr = [1, 2, 3];

// 任何类型都能放入数组
var arrp02 = [ {a: 1}, [1, 2, 3], function () { return true }];

// 数组是一种特殊的对象, 体现在它的键名是按次序排列的一组整数
print(typeof arrp02);
print(Object.keys(arrp02));
// 数组的键名其实也是字符串。之所以可以用数值读取，是因为非字符串的键名会被转为字符串

print(arrp02['0']);

// JavaScript 使用一个32位整数，保存数组的元素个数。这意味着，数组成员最多只有 4294967295 个（232 - 1）个，也就是说length属性的最大值就是 4294967295
// 只要是数组，就一定有length属性。该属性是一个动态的值，等于键名中的最大整数加上1

// 数组的数字键不需要连续，length属性的值总是比最大的那个整数键大1。另外，这也表明数组是一种动态的数据结构，可以随时增减数组的成员。

// length属性是可写的。如果人为设置一个小于当前成员个数的值，该数组的成员数量会自动减少到length设置的值。

// 清空数组的有效方法, 是将length属性设为0

// 如果人为设置length大于当前元素个数，则数组的成员数量会增加到这个值，新增的位置都是空位
var a = ['a'];
a.length = 3;
a[1] // undefined

// 如果人为设置length为不合法的值，JavaScript 会报错
// 如果数组的键名是添加超出范围的数值，该键名会自动转为字符串


// in 运算符, 遍历键名
// 注意，如果数组的某个位置是空位，in运算符返回false。

arr[100] = 'a';

var n1 = 100 in arr // true
var n2 = 14 in arr // false

print(n1);
print(n2);

for(var i in a) {
    print(a[i]);
}

// for...in不仅会遍历数组所有的数字键，还会遍历非数字键
// 不推荐用 for...in 遍历数组
// 遍历考虑用 for  循环或者 while 循环 或 forEach 方法
var arr02 = [1, 2, 3];
for(var i = 0; i < arr02.length; i++) {
    print(arr02[i]);
}

print('======================');
var i = 0;
while(i < arr02.length) {
    print(arr02[i]);
    i++;
}
print('======================');
var l = arr02.length;
while(l--) {
    print(arr02[l]);
}
print('======================');

arr02.forEach(function(item) {
    print(item);
});

// 数组的空位, 获取对应位置的值结果是 undefined
// 但是某个位置是空位, 与某个位置是 undefined 是不一样的.
// 如果是空位，使用数组的forEach方法、for...in结构、以及Object.keys方法进行遍历，空位都会被跳过。

// 类似数组的对象
// 如果一个对象的所有键名都是正整数或零，并且有length属性，那么这个对象就很像数组，语法上称为“类似数组的对象”（array-like object）

// arguments对象
function args() { return arguments }
var arrayLike = args('a', 'b');

// 数组的slice方法可以将“类似数组的对象”变成真正的数组 
var arr03 = Array.prototype.slice.call(arrayLike);

function print02(value, index) {
    console.log(index + ' : ' + value);
  }
  
  Array.prototype.forEach.call(arrayLike, print02);

  // 注意，这种方法比直接使用数组原生的forEach要慢，所以最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的forEach方法

