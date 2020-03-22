### Builder config
----

>type
* set sql operate type $\color{#FF0000}{|insert|delete|update|select|}$
* not null
>id
* method name
* if null, will auto generate
>alias
* alias of table in sql
>conditions
* see  [conditionBuilder](./conditionBuilder.md), use to generate sql where  clause
>includes
* see [includeBuilder](./includeBuilder.md), use to generate sql output columns
>req
* see [reqBuilder](./reqBuilder.md), use to to build 
req model
* can has many ,each present some agrs
>resp
* see [respBuilder](./respBuilder.md), use to build resp config
>controller
* see [controllerBuilder](./controllerBuilder.md),use to build controller config
>join
* see [joinBuilder](./joinBuilder.md),use to build join config
>batch
* mark this is a batch operation
>exports
* mark this is a exports excel option
* see [exportExcelBuilder](./exportExcelBuilder),use to build exports config with EasyExcel
>noController 
* if set ,will not generate controller method
>build
* final method ,required

