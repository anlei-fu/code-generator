<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-25 11:23:02
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-12 15:06:48
 -->
### Main Class
----
|name|description|usage|
|---|--|--|
|RequestContextHolder|hold current Serverlet.request||
|HandlerInterceptor|filter|
|WebRequestInterceptor||
|Filter||
|HttpRequestHandler||
|HttpServletRequest||
|HttpServletResponse||
|ServletRequest||
|ServletResponse||
|FilterChain||
|HttpMessageConverter|serializer|
|AliasRegistry||
|UserDetails||
----

### config

|name|description|
|---|---|
|WebMvcConfigurer||

### Annotations

|name|description|
|----|-----|
|@Configuration||
|@EnableAutoConfiguration||
|@Bean||
|@ControllerAdvice||
|@ExceptionHandler||
|@ResponseBody||
|@ResponseStatus||
|@ModelAttribute|swagger 参数需要|
|@Validated| 对参数（class）进行校验|
|@RequestParam||
|@RequestBody||
|@PathVarible||
|@CookieValue||
|@RequestHeader||
|@SessionAttributes||
|@ConfigurationProperties| resolve config from config file|
|@EnableConfigurationProperties| do resolve from properties file|
|@ConditionalOnClass||
|@ConditionalOnBean||
|@AutoConfigureAfter||
|@PostConstruct| after autowire finish|
|@PreConstruct| before autowire|
-----

### enums

|name|description|
|---|---|
|HttpStatus||
|MediaType||
|AdviceMode||
|SessionTrackingMode|cookie, ssl ,url|
|ScopedProxyMode| DEFAULT,NO,INTERFACES,TARGET_CLASS;|

-------

### Resource

|name|description|
|----|---|
|ResourceBundle||
|InputSource|{systemId,publiId,encoding}|

----

### keyword

|name|description|
|---|---|
|contextpath||
|schema||

-----

### parameter validation

|属性|	描述|
|----|----|----|
|@AssertTrue|	应用于boolean属性，该属性值必须为true	
|@AssertFalse|	应用于boolean属性，该属性值必须为false	
|@DecimalMax|	只能小于或等于指定值	
|@DecimalMin|	只能大于或等于指定值	
|@Digits|	该属性值必须在指定范围内，interger属性定义该数值的最大整数部分，fraction属性定义该数值的最大 小数部分	
|@Future|	检查该字段是否是属于未来的日期	
|@Max|	该字段的值只能小于或等于该值	
|@Min|	该字段的值只能大于或等于该值	
|@NotNull|	该字段不能为Null	
|@Null|	该字段必须是Null	
|@Past|	该字段必须是过去的一个日期	
|@Size|	检查该字段的size是否在min和max之间，可以是字符串、数组、集合、Map等	
|@Pattern|	该属性值必须与指定的常规表达式相匹配	
|@NotBlank|	只用于String, 不能为Null且trim()之后size>0	
|@NotEmpty|	不能为Null，且size>0	
|@Email|	被注释的元素必须是电子邮箱地址	 
|@Length|	被注释的字符串String 大小必须在指定范围内	
|@Range|	BigDecimal,BigInteger,CharSequence, byte, short, int, long等原子类型和包装类型，验证注解的元素值在最小值和最大值之间	 
|@Valid|	指定递归验证（下篇讲）关联的对象；如用户对象中有个地址对象属性，如果想在验证用户对象时一起验证地址对象的话，在地址对象上加@Valid注解即可级联验证

------
# Bean
----

### Bedefination

- parent name
- class name
- scope
- lazy init
- is autowired candidate
- is primary
- factory method
- hasConstructorArgumentValues
- getInitMethodName

-----

### BeanFactory

- ObjectFactory :getObject<T>
- ObjectProvider
- ListableBeanFactory :getBeans =>bean[]
- HierarchicalBeanFactory :getBeanFactory
- AutowireCapableBeanFactory : autowire beanproperties

### Wrapper

- BeanWrapper => get propertityDescriptors []

### Element

- AnnotatedElement: getAnnotations()
- BeanMetadataElement: getSource()

----

### Accessor

- AttributeAccessor :get attribute =>object
- PropertyAccessor : get Property value 

----

### Coverters

- TypeConverter
- ConversionService :type converter

----

### Editor

- PropertyEditor :set property value

### Context
- ApplicationContext :{Environment,ApplicationName,DisplayName,Parent,beanFactory}
- AccessControlContext  : Accesss Control
- ServletContext :{RequestDispatcher,}
- RefreshableApplicationContext : refrsh beanfactory

---

### Serverlet

- service(request,response)
- ServerletRequet ServerletResponse

### Descripor

- PropertyDescriptor : property metadata with editor
- JspConfigDescriptor
- TaglibDescriptor
- JspPropertyGroupDescriptor
----

### BeanPostProcessor (beforeInit,afterInit)

- 

### Registory

- FilterRegistration 
- ServletRegistration

---

###  Reader
- AnnotatedBeanDefinitionReader
- XmlBeanDefinitionReader

---

### Resolver

- ScopeMetadataResolver :(bedefination)=>scopedmetadata
- EntityResolver

### MetaData

- ScopeMetadata : scope ,ScopedProxyMode
- AnnotatedTypeMetadata :Annotation[]

----

### Evaluator

-

-----

### Scanner

- ClassPathBeanDefinitionScanner 


------

### logging

- logging.level.{key}={value}  loggin map
- logging.config={config file path}
- logging.path=/Users/jackie/workspace/rome/ 
- logging.file=springbootdemo.log (if null default spring.log)
- logging.level.root=warn
- logging.pattern.console=%d{yyyy/MM/dd-HH:mm:ss} [%thread] %-5level %logger- %msg%n 
- logging.pattern.file=%d{yyyy/MM/dd-HH:mm} [%thread] %-5level %logger- %msg%n


----

### Filters

filter->interceptor->controller-advise->aspct

----

### cross domain (http->https, ports, domain)
- CORS
- JSONP
- origin  source domain (check by server)

``` json
//指定允许其他域名访问
'Access-Control-Allow-Origin:http://172.20.0.206'//一般用法（*，指定域，动态设置），3是因为*不允许携带认证头和cookies
//是否允许后续请求携带认证信息（cookies）,该值只能是true,否则不返回
'Access-Control-Allow-Credentials:true'
//预检结果缓存时间,也就是上面说到的缓存啦
'Access-Control-Max-Age: 1800'
//允许的请求类型
'Access-Control-Allow-Methods:GET,POST,PUT,POST'
//允许的请求头字段
'Access-Control-Allow-Headers:x-requested-with,content-type'
```

### @Inherited
------
类继承关系中@Inherited的作用

类继承关系中，子类会继承父类使用的注解中被@Inherited修饰的注解

接口继承关系中@Inherited的作用

接口继承关系中，子接口不会继承父接口中的任何注解，不管父接口中使用的注解有没有被@Inherited修饰

类实现接口关系中@Inherited的作用

类实现接口时不会继承任何接口中定义的注解


