<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-30 16:36:43
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-15 10:23:53
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
