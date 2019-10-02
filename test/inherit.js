/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-02 14:37:29
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-02 15:03:40
 */
function SuperType() { this.say = "123" }
function SubType() { this.do = "21" }

//1.inherit by change sub'prototype pointer
// SubType.prototype = new SuperType();
// var instance = new SubType();
// console.log(instance.say);
// console.log(instance.do)


// 2.any subclass'prototype (supper type) can change 
// var instance = new SubType();
// console.log(instance.do)
// SubType.prototype=new SuperType();
// instance=new SubType();
// console.log(instance.say);

// 3.super change to anounimous type
// SubType.prototype= new SuperType();
// SubType.prototype.k=25;
// var instance=new SubType();
// console.log(instance.k)
// var c= new SubType();
// console.log(44)

// Call this
function SuperType() {
        this.colors = ["red", "blue", "green"]
}
function SubType() {
        SuperType.call(this);      //  实现继承
}
var instance1 = new SubType();
var instance2 = new SubType();
instance2.colors.push("black");
console.log(instance1.colors);      //  red,blue,green
console.log(instance2.colors);      //  red,blue,green,black