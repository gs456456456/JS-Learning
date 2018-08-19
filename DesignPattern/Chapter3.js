/*js设计模式书籍*/


/*闭包*/
//arguments
/*
    arguments对象不是一个 Array 。它类似于Array，但除了length属性和索引元素之外没有任何Array属性。例如，它没有 pop 方法。但是它可以被转换为一个真正的Array：
*/
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);


//call apply
var a = {
    name:'func1',
    testing(){
        console.log(this.name)
        console.log(arguments)
    }
}

var b = {
    name:'func2'
}

a.testing.call(b,1);
a.testing.apply(b,[2,3]);


//1.封装变量
//*array join方法
//console.log([2, 3].join("."))

//cache 闭包
var cache = {};
var mult = function (...arr) {
    //var args = Array.prototype.join.call(arguments, ',');
    var args = arr.join(',')
    if (cache[args]) {
        return cache[args];
    }
    var a = 1;
    for (var i = 0, l = arr.length; i < l; i++) {
        a = a * arr[i];
    }
    return cache[args] = a;
};
//console.log(mult(1, 2, 3))





//caller and callee

//caller 函数调用主体
var callerTest = function () { console.log(callerTest.caller) }
function a() { callerTest() }
a()

//callee arguments指向的匿名函数 length属性形参的长度
var c = function (x) {
    console.log(arguments.length, arguments.callee.length, arguments.callee)
}
c(1, 2, 3)

//curry
var currying = function (fn) {
    var args = [];
    console.log(fn.callee)
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, args);
        } else {
            [].push.apply(args, arguments);
            console.log(args)
            return arguments.callee;
        }
    }
};

var cost = (function () {
    var money = 0;
    return function () {
        for (var i = 0, l = arguments.length; i < l; i++) {
            money += arguments[i];
        }
        return money;
    }
})();

var cost = currying( cost );
cost( 100 ); 
cost( 200 ); 
cost( 300 );
// 未真正求值 // 未真正求值 // 未真正求值
console.log(cost())


//uncurry