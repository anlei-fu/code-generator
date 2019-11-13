<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-13 18:05:40
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-13 18:12:12
 -->
### command

- implementation和api区别：
implementation：只能在内部使用此模块，比如我在一个libiary中使用implementation依赖了gson库，然后我的主项目依赖了libiary，那么，我的主项目就无法访问gson库中的方法。这样的好处是编译速度会加快，推荐使用implementation的方式去依赖，如果你需要提供给外部访问，那么就使用api依赖即可
<br>

- provided（compileOnly）作用：
只在编译时有效，不会参与打包
可以在自己的moudle中使用该方式依赖一些比如com.android.support，gson这些使用者常用的库，避免冲突。
<br>

- apk（runtimeOnly）作用：
只在生成apk的时候参与打包，编译时不会参与，很少用。
<br>

- testCompile（testImplementation）作用：
   testCompile 只在单元测试代码的编译以及最终打包测试apk时有效。
<br>

- debugCompile（debugImplementation）作用：
  debugCompile 只在debug模式的编译和最终的debug apk打包时有效
<br>

- releaseCompile（releaseImplementation）作用：

-------
