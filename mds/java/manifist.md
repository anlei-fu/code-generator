<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-13 10:38:18
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-13 10:42:19
 -->
``` properties
Manifest-Version: 1.0       --用来定义manifest文件的版本
Created-By: Apache Ant 1.5.1  -- 声明该文件的生成者，一般该属性是由jar命令行工具生成的
Extension-Name: Struts Framework
Specification-Title: Struts Framework
Specification-Vendor: Apache Software Foundation
Specification-Version: 1.1
Implementation-Title: Struts Framework
Implementation-Vendor: Apache Software Foundation
Implementation-Vendor-Id: org.apache
Implementation-Version: 1.1
Class-Path:  commons-beanutils.jar commons-collections.jar commons-dig
ester.jar commons-logging.jar commons-validator.jar jakarta-oro.jar s
 truts-legacy.jar
```
1. Manifest-Version
 ，例如：Manifest-Version: 1.0
2. Created-By
，例如：Created-By: Apache Ant 1.5.1
3. Signature-Version
 定义jar文件的签名版本
4. Class-Path
 应用程序或者类装载器使用该值来构建内部的类搜索路径