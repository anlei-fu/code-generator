<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-30 16:36:43
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-06 10:27:42
 -->
### ...
---
### array methods
---
``` js
 every((x,index,array =>boolean)) // All elements satisfy filter
 some ((x,index,array)=>boolean) // has any element satisfy  the   filter condition
 slice(start,end) // start position ,end position => subarray
```
--------------------------------------
### inherite
 anyfunc -> func ->object 

 #### method
 1. 借助构造函数实现继承
 ``` js
//  定义父类
function Parent () {
    this.name = '陈楚',
    this.age = 18
}
//  定义子类
function Child () {
    //通过call()方法改变Child1的this指向使子类的函数体内执行父级的构造函数从而实现继承效果
    Parent1.call(this)
    this.address = '洪山区'
}
//  构建子类的实例s1
var s1 = new Child()

// s1 is not instance of parent
console.log(s1.name)  //陈楚
```
1. 借助原型链实现继承
``` js
function Parent () {
    this.name = '祝敏',
    this.age = 19,
    this.play = [1,2,3]
}
//  一样在父类添加say方法
Parent2.prototype = {
    say () {
        console.log('say bye bye')
    }
}
function Child () {
    this.address = '硚口区'
}
// 让子类的原型直接等于父类实例
Child2.prototype = new Parent2()
//  生成两个子类的实例s2
var s2 = new Child()
// s2实例继承了父类中的name属性
console.log(s2.name)  //祝敏
//  s2实例也同样继承了父类原型上的say方法
console.log(s2.say())  //say bye bye
// s1  is instance of parent

```
2. 组合继承(完美版)
``` js
function Parent5 () {
    this.name = '许风',
    this.age = 20,
    this.play = [4,5,6]
}
function Child5 () {
    Parent5.call(this)
    this.address = '江夏区'
}
// 比较关键的一步
Child5.prototype = Object.create(Parent5.prototype)
console.log(Child5.prototype)  //Parent5 {}
```
 ### || is lowe operator

### \_proto_ (type)
 * prototype (suppertype)  member (self define + inherit from supper)
 * constructor
 1. issealed
 2. isfozen
 3. isExtensible
 4. setProtoTypeOf
 5. defineProperty
 6. isProtoTypeOf
 7. getOwnProperty
 1. __proto__ & constructor instance only
 1. prototype function only
 1. instance.__proto__ === function.prototype，instance.prototype.constructor===function

 ### ***function***
 -  Operator 'new' can just be followd by constructor ,only function can be a constructor
    And return an object
 -
------------
### __filename    
  current file
###  __dirname  
  current folder

-------------
### Grammer simplify
```js
number=>str : let s= num+"";
str=>num: let num = +str or ~~str 
boolean=>num: num =+boolean
float=>int: let int=(float|0)
last elements of array: array.slice(-pos);
first elements of array: array.length=pos

// log
const a = 5, b = 6, c = 7
console.log({ a, b, c });
console.table({a, b, c, m: {name: 'xixi', age: 27}});

// concat
const one = ['a', 'b', 'c']
const two = ['d', 'e', 'f']
const three = ['g', 'h', 'i']

const result = [...one, ...two, ...three]

// clone
const obj = { ...oldObj }
const arr = [ ...oldArr ]

```
----------------

### Promise

- ***constructor***

``` js
   /**
    *  @param {(Any)=>void}  resolve 
    *  @param {(Error)=>void} reject
    */ 
 var p=  Promise((resolve,reject)=>void)
 
 /**
  * @param return pass by resolve
  */ 
 then(return) =>Promise
 /**
  * @param {Any}  error pass by reject  
  */
 catch(error)

  every function marked with async will return a promise 
```

-----