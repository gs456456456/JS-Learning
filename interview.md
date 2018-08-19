记一次面试

Vue

1.通过watch进行对象深度监听
watch:{
    a:{
        handler(newName, oldName) {
            this.fullName = newName + ' ' + this.lastName;
        },
        // 代表在watch里声明了firstName这个方法之后立即先去执行handler方法
        immediate: true
        deepth:true
        //深度监听对象属性值变化 或者可以监听a.xx属性
    }   
}


2.vue-router hash/history模式的区别
    hash 不请求服务器 /#/后的组件自定义跳转
    history 请求服务器地址


3.vue-router beforeEach next方法的中间件实现原理



4.html5的hash/history
//通过改变浏览器地址#后面的值触发
window.onhashchange = function(event){
    console.log(event.oldURL, event.newURL);
    let hash = location.hash.slice(1);
    document.body.style.color = hash;
}

history.go(-2);//后退两次
history.go(2);//前进两次
history.back(); //后退
hsitory.forward(); //前进


5.slot插槽的具体用法
单个插槽:父组件替换子组件
父：
//<haha>
    <div>父组件</div>
</haha>
子：
<template>
    <slot>11111</slot>
</template>


具名插槽
父：
//<haha>
    <div slot="one">父组件</div>
</haha>
子：
<template>
    <slot name="one">11111</slot>
</template>


作用域插槽:子组件的值传到父组件
父：
<haha>
    <div slot-scope="props">
        <span>
            {{props.age}}
        </span>
    </div>
</haha>

子：
<template>
    <slot age='1'></slot>
</template>



6.父子组件通信的方法
父===>子 props
子===>父 emit


7.vue避免组件中样式冲突问题
在style里 添加scoped
//<style type="text/less"  lang="less" scoped>
相当于添加唯一标识


Es6
1.变量解构赋值
定义:解构赋值语法是一个Javascript表达式，这使得可以将数据从数组或对象提取到不同的变量中
数组:
let a = [1,2,3]
[,,b] //b=3
[...a,4,5] //[1,2,3,4,5]

对象:
const person = {
  name: 'little bear',
  age: 18,
  sex: '男'
}
let { name,age,sex } = person


2.块级作用域




Js
1.事件委托和冒泡原理



2.数组中嵌套对象找值
var test = [{'a':2,b:'3'},{'a':4,b:'5'}]
test.find(function(a){return a.a==2}) //{'a':2,b:'3'}

* 在数组中查找指定对象用find
  对数组的元素批量操作map
  根据条件批量寻找对象用filter
  在数组中根据条件选出想要的元素用es6的解构赋值






