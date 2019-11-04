<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-25 14:47:21
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-29 14:46:17
 -->
# Aop
----
1. @Pointcut

   ``` java
       @Aspect
       @PonitCut("method(parameter)||@annotation(annotationtype)")
       @Before("@ponitcute-method()")
       class JoinPoint{
             object[]  getargs();
       }
   ```

2. classes

- CglibAopProxy