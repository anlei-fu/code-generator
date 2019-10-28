<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-25 11:23:02
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-25 17:09:59
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





