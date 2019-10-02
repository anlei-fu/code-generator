/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-02 14:01:19
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-02 14:36:13
 */
function c() {
        this.name="fal";
        this.show=(x)=>console.log(this);
        return this;
}

c.prototype.do=()=>console.log("sss");
// failed b is not a function
// new => object 
var b= new c();

console.log(typeof b);
console.log(b.name);

console.log(b);
console.log(c);
b.show();

// c {}
console.log(Object.getPrototypeOf(b));
// object
console.log(typeof b);
// [ 'length', 'name', 'arguments', 'caller', 'prototype' ]
console.log(Object.getOwnPropertyNames(c));
//[ 'name', 'show' ]
console.log(Object.getOwnPropertyNames(b));
//false
console.log(Object.isFrozen(c));
//true
console.log(Object.freeze(c));
console.log(Object.isFrozen(c));
// c {}
console.log(c.prototype);
// c {}
// function c() {
//         this.name="fal";
//         this.show=(x)=>console.log(this);
//         return this;
// }
console.log(c.toString())

c.prototype.do=()=>console.log("say before");
var d= new c();
// ok
d.do();
c.prototype.do=()=>console.log("say after");
d.do();
// change  d'do point at c's prototype do
d.do=()=>console.log("change d");
var f= new c();
f.do();
console.log();
console.log(f.toString())



