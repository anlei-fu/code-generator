### Req Builder
----
> doCreate
* mark this req should generate a model
> excludes
* accept {string|[string]},this req model will
excludes fileds from condtions
>name
* set req model name
>require
* accept {string|[string]}, set validate attribute not null
>validate
* accept {string|[string]} and a validate attribute patter, set field validate
>type
* set req model type name
* not required
>description
* set req model description
* not required
>from
* set how to resolve req model, {@PathVarieble|@RequestAttribute|@RequestParam|@RequestBody}
* not required