<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-16 11:01:05
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-21 15:46:26
 -->
### ***work Flow***
-------
### flows
|name|fid|steps|description|
|---|---|--|--|
|写卡|1|write-card->delivery|---|
|代客下单|41|write_card->book_install||
|号卡续费|3|delivry->charge||
|宽带新装|21|device->print_express->plat_delivery->book_install||
------------------

- ***tables***

|name|columns|description|
|----|---|--------|---|
|fc_order_main|---|
|fc_order_ext||
|fc_order_bind|--|
|fc_flow_task|---|任务表,计划所有任务|
|fc_order_express|---|订单快递状态记录表|
|fc_order_express|----|

--------
- ***functions***
<style>
   .red {
           color:red;
           text:bold;
           cursor:default;
   }
</style>
|name|params|returns|description|
|----|--------|----|---|
|sp_auto_flow_excute||| flow job entrance func |
|f_excute_next_step| ||run next step |
|f_get_next_step|<p class="red">flow_id number,<br>action varchar2|</p>|get next step of flow from fc_flow_step|
|f_create_task|||---|



-----
#### write card flow 
- ***graph***
``` flow
// p_auto_excute
st=>start: start order
processing=>operation: processing 
st->processing
```
----
### Scripts

- ***up***

|channel|name|path|description|
|---|---|---|--|--|
|scdx|写卡|<a>../script/scdx/write_card.lua</a>||
|yunda|打印快递单|<a>../script/yunda/print_express.lua</a>||
|scdx|宽带新交|<a>../script/scdx/kdxf.lua</a>||
|scdx|宽带预定|<a>../script/scdx/kd_book.lua</a>||
|scdx|白金卡|<a>../script/wangyi/baijinka.lua</a>||
|scdx|网易查询|<a>../script/wangyi/query.lua</a>||

- ***down***

|channel|name|path|description|
|--|---|---|--|--|
|tmall_qx|写卡|<a>../script/tmall/plat_delivery.lua</a>||
|tmall_qx|打印快递单|<a>../script/tmall/get_identity.lua</a>||

------
### Statistics

- ***tables***

|name|columns|description|
|----|---|--------|---|
|fc_trade_analyse|---|statistic by product,include cost ,refund ,express,reward|
|fc_trade_down|---|statistic by product,total times,total fee,trade fee,refund fee|
|fc_trade_up|---|statistic by product,include cost ,refund ,express,reward|

- ***functions***

|name|params|returns|description|
|----|--------|----|---|
|sp_auto_trade_analyse||| insert data into fc_trade_analyse |

------
### Dui Zhang
- ***tables***

|name|columns|description|
|----|---|--------|---|
|fc_dz_trade_detail|---|main table|
|fc_dz_phone_active|---|active record|
|fc_dz_reward_renew|---|renew record|
|fc_dz_renew_cost|---| up cost record|
|fc_dz_reward_brand_new|---|brand new record|

- ***functions***

|name|params|returns|description|
|----|--------|----|---|
|sp_auto_trade_dz||| entrance function |

-----
### Functions

|name|columns|description|
|----|---|--------|---|
|sp_charge_retry|---|update task status,next excute time, update order status.update charge status|
|sp_cookie_get_by_city|---|get up account cookie|
|fc_dz_reward_renew|---|renew record|
|fc_dz_renew_cost|---| up cost record|
|fc_dz_reward_brand_new|---|brand new record|

----
### Reports

|name|columns|description|
|----|---|--------|---|
|sp_da_reward|---| product daily reward report|
|sp_da_trade_channel|---|channel daily reward report|
|fc_dz_reward_renew|---|renew record|
|fc_dz_renew_cost|---| up cost record|
|fc_dz_reward_brand_new|---|brand new record|

----
### bot
- ***tables***

|name|columns|description|
|----|---|--------|---|
|sp_delivery_get|---| get dilevery info|
|sp_down_channel_key_getl|---|get down channel secret key|
|sp_express_get|---|get express info|
|fc_dz_renew_cost|---| up cost record|
|fc_dz_reward_brand_new|---|brand new record|

- lua stracture
  1. dao
  2. test parameter
  3. 3rd api  ,token api
  4. args[0]:,args[1]:,args[2]:,args[3]:,args[4]
- lua convention
  1. start with g => global 

-----
### Api
-   ***get identity***

|url|method|parameter|return|description|
|----|---|--------|---|----|
|<a>http://gw.api.taobao.com/router/rest</a>|get||||