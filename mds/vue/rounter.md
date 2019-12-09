<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-13 18:05:04
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-02 10:50:46
 -->
### Router

-----
- ***watch***
```js
  var vm = new Vue( {
    el: '#app',
    data: {
      childrens: {
        name: '小强',
        age: 20,
        sex: '男'
      },
      tdArray:["1","2"],
      lastName:"张三"
    },
    watch:{
      childrens:{
        handler:function(val,oldval){
          console.log(val.name)
        },
        deep:true//对象内部的属性监听，也叫深度监听
      },
      'childrens.name':function(val,oldval){
        console.log(val+"aaa")
      },//键路径必须加上引号
      lastName:function(val,oldval){
        console.log(this.lastName)
      }
    },//以V-model绑定数据时使用的数据变化监测
  } );
  vm.$watch("lastName",function(val,oldval){
    console.log(val)
  })//主动调用$watch方法来进行数据监测
  ```
  - ***lifetime***
  ![opensuse-laptop](https://cn.vuejs.org/images/lifecycle.png)

-----

### ***prop***
  1. 单项数据流
      所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。
      每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。

-----
 ### ***ref***
 1. 基本用法，本页面获取dom元素
 ```html
 <template>
  <div id="app">
    <div ref="testDom">11111</div>
    <button @click="getTest">获取test节点</button>
  </div>
</template>

<script>
export default {
  methods: {
    getTest() {
      console.log(this.$refs.testDom)
    }
  }
};
</script>
 ```
 2.  获取子组件中的data
 
 ```html
 <template>
  <div>
      {{ msg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello world"
    }
  }
}
</script>
<template>
  <div id="app">
    <HelloWorld ref="hello"/>
    <button @click="getHello">获取helloworld组件中的值</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld
  },
  data() {
    return {}
  },
  methods: {
    getHello() {
      console.log(this.$refs.hello.msg)
    }
  }
};
</script>
 ```
3. 调用子组件中的方法
```html
<template>
  <div>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      console.log("调用到了")
    }
  }
}
</script>

<template>
  <div id="app">
    <HelloWorld ref="hello"/>
    <button @click="getHello">获取helloworld组件中的值</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld
  },
  data() {
    return {}
  },
  methods: {
    getHello() {
      this.$refs.hello.open();
    }
  }
};
</script>
```
4. 子组件调用父组件方法
```html
<template>
  <div>
</div>
</template>

<script>
export default {
  methods: {
    open() {
      console.log("调用了");
      //  调用父组件方法
      this.$emit("refreshData");
    }
  }
}
</script>
<template>
  <div id="app">
    <HelloWorld ref="hello" @refreshData="getData"/>
    <button @click="getHello">获取helloworld组件中的值</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld
  },
  data() {
    return {}
  },
  methods: {
    getHello() {
      this.$refs.hello.open()
    },
    getData() {
      console.log('111111')
    }
  }
};
</script>
```

### transition

```html
<transition name="name" >
      <div v-show="show" ></div>
      <div v-if="show" ></div>
      <router-view/>
    </transition>
    <style>
   // 定义进入前与离开后状态
    .name-enter, .name-leave-to {
      ...
    }
    // 定义离开前与进入后状态
    .name-leave, .name-enter-to {
      ...
    }
    // 定义进出过程
    .name-enter-active, .name-leave-active {
      transition: all .5s
    }
     .fade-enter, .fade-leave-to {
      opacity: 0
    }
    .fade-leave, .fade-enter-to {
      opacity: 1
    }
    .fade-enter-active, .fade-leave-active {
      transition: all .2s
    }
    .scale-enter, .scale-leave-to {
      transform: scale(0)
    }
    .scale-leave, .scale-enter-to {
      transform: scale(1)
    }
    .scale-enter-active, .scale-leave-active {
      transition: all .2s
    }
    .left-enter, .left-leave-to {
      transform: translate3d(-100%, 0, 0)
    }
    .left-leave, .left-enter-to {
      transform: translate3d(0, 0, 0)
    }
    .left-enter-active, .left-leave-active {
      transition: all .2s
    }
        .right-enter, .right-leave-to {
      transform: translate3d(100%, 0, 0)
    }
    .right-leave, .right-enter-to {
      transform: translate3d(0, 0, 0)
    }
    .right-enter-active, .right-leave-active {
      transition: all .2s
    }
      .top-enter, .top-leave-to {
      transform: translate3d(0, -100%, 0)
    }
    .top-leave, .top-enter-to {
      transform: translate3d(0, 0, 0)
    }
    .top-enter-active, .top-leave-active {
      transition: all .2s
    }
    </style>
    
```

-----

### directive

1. v-text
   v-text主要用来更新textContent，可以等同于JS的text属性。
```html
<span v-text="msg"></span>
```
2. v-html
```html
<div v-html="rawHtml"></div>
```
3. v-pre
```html
<div id="app">
    <span v-pre>{{message}}</span>  //这条语句不进行编译
    <span>{{message}}</span>
</div>
```
4. v-cloak
```html
<div id="app" v-cloak>
    <div>
        {{message}}
    </div>
</div>
<script type="text/javascript">
    new Vue({
      el:'#app',
      data:{
        message:'hello world'
      }
    })
</script>
```
5.  v-once
```html
<span v-once>This will never change:{{msg}}</span>  //单个元素
<div v-once>//有子元素
    <h1>comment</h1>
    <p>{{msg}}</p>
</div>
<my-component v-once:comment="msg"></my-component>  //组件
<ul>
    <li v-for="i in list">{{i}}</li>
</ul>
```
6. v-model修饰符
- .number
- .trim
