### Collection Builder
------
> includes
* accepts a string array or string
> excludes
* accept a string array or string
> exp
* accept {string|[string]} and a expression pattern
  - {bigger|biggerEqual|small|samllEqual|equal|range|timeRange|startWith|endWith|startAndEndWith|like}
  - range ,req wiil exclude self and and add tow arguments min#self and max#self
  - timeRange, req wiil exclude self and and add tow arguments #selfStart and #selfEnd
> prefix
* accept {string|[string]} and prefix string,set prefix of sql column
> prefix all 
* set all columns with prefix
> alias
* set  column alias in sql , output field name will be alias

