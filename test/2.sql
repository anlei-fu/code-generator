   select to_char(r.ordertime,'yyyy-mm') ordertime,
       p.product_name ProductName,
	   ppi.plat_name PlatName,
       pait.agent_name AgentName,
       ti.term_name TermName,
       i.user_name UserName,
	   t1.name BusinessType,
       r.total,
       r.valid,
       nvl(r.activatecount,0) ActivateCount,
       nvl(r.rechargecount,0) RechargeCount,
       nvl(r.onNetCount,0) OnNetCount,
       nvl(r.otherNetCount,0) OtherNetCount,
	   nvl(round(r.valid / decode(r.total,0,null,r.total), 5) * 100,0) || '%' as validrate,
       nvl(round(r.activatecount / decode(r.total,0,null,r.total), 5) * 100,0) || '%' as activaterate,
       nvl(round(r.rechargecount / decode(r.activateCount,0,null,r.activateCount), 5) * 100,0) || '%' as rechargerate,
       nvl(round(r.onNetCount / decode(r.activateCount,0,null,r.activateCount), 5) * 100,0) || '%' as onnetrate,
       nvl(round(r.activateCount / decode(r.valid,0,null,r.valid), 5) * 100,0) || '%' as valid_active,
       nvl(round(r.otherNetCount / decode(r.activateCount,0,null,r.activateCount), 5) * 100,0) || '%' as otherNetrate

  from (select trunc(t.create_time,'MM') orderTime,
			   pai.agent_no,
			   pai.plat_no,
               ob.up_product_no,
               t.promoter_id,
               t.term_no,
               t.Business_Type,
               count(1) as total, --总订单数
           --noformat start
          sum(case when t.order_status = 0 then 1 else 0 end) as valid, --有效订单
          sum(case when ext.activate_status = 0 then 1 else 0 end) as activateCount, --激活订单数
          sum(case when ext.recharge_status = 0 then 1 else 0 end) as rechargeCount, --首充订单数
      sum(case when ext.activate_status = 0 and ext.net_range = 1 then 1 else 0 end ) as onNetCount, --本网订单数
          sum(case when ext.activate_status = 0 and ext.net_range = 2 then 1 else 0 end ) as otherNetCount  --异网订单数
            --noformat end
          from DM_ORDER_MAIN t
          left join dm_order_main_ext ext
            on t.order_no = ext.order_no
          left join dm_order_bind ob 
            on ob.order_no = t.order_no
		   left join put_account_info pai on pai.promoter_id = t.promoter_id  	
         group by trunc(t.create_time,'MM'),
				  pai.agent_no,
				  pai.plat_no,
                  ob.up_product_no,
                  t.promoter_id,
                  t.term_no,
                  t.Business_Type
        having 1 = 1 
       { &:ProductNo}
	   { &:PaiAgentNo}
	   { &:PaiPlatNo}	   
       { &@t.PromoterId} 
       { &@t.TermNo} 
	   { &@t.BusinessType}
       { &:ST} 
       { &:ET}
        ) r
  left join DM_UP_PRODUCT p
    on R.up_product_no = p.product_no
  left join DM_Promoter_Info i
    on R.Promoter_Id = i.Promoter_Id
  left join dm_term_info ti
    on R.term_no = ti.term_no
  left join dm_system_dictionary t1 on R.Business_Type = t1.value and t1.type = 'BusinessType'
  left join put_agent_info pait on pait.agent_no = r.agent_no
  left join put_plat_info ppi on ppi.plat_no = r.plat_no
  union all select r.ordertime,
       null,
       null,
       null,
	   null,
	   null,
	   null,
       r.total,
       nvl(r.valid,0) Valid,
       nvl(r.activatecount,0) ActivateCount,
       nvl(r.rechargecount,0) RechargeCount,
       nvl(r.onNetCount,0) OnNetCount,
       nvl(r.otherNetCount,0) OtherNetCount,
	   nvl(ROUND(r.valid/decode(r.total,0,null,r.total),5)*100,0)||'%' AS validrate,
       nvl(ROUND(r.activateCount/decode(r.total,0,null,r.total),5)*100,0)||'%' AS activaterate,
       nvl(ROUND(r.rechargeCount/decode(r.activateCount,0,null,r.activateCount),5)*100,0)||'%' AS rechargerate,
       nvl(ROUND(r.onNetCount/decode(r.activateCount,0,null,r.activateCount),5)*100,0)||'%' AS rechargerate,
       nvl(round(r.activateCount / decode(r.valid,0,null,r.valid), 5) * 100,0) || '%' as valid_active,
       nvl(ROUND(r.otherNetCount/decode(r.activateCount,0,null,r.activateCount),5)*100,0)||'%' AS rechargerate
       from  (select
           null as ordertime,
               null,
               null,
               null,
        count(1) as total, --总订单数
           --noformat start
          sum(case when t.order_status = 0 then 1 else 0 end) as valid, --有效订单
          sum(case when ext.activate_status = 0 then 1 else 0 end) as activateCount, --激活订单数
          sum(case when ext.recharge_status = 0 then 1 else 0 end) as rechargeCount, --首充订单数
      sum(case when ext.activate_status = 0 and ext.net_range = 1 then 1 else 0 end ) as onNetCount, --本网订单数
          sum(case when ext.activate_status = 0 and ext.net_range = 2 then 1 else 0 end ) as otherNetCount,  --异网订单数
            --noformat end  
            null,
            null,
            null,
            null
          from DM_ORDER_MAIN t
          left join dm_order_main_ext ext
            on t.order_no = ext.order_no
           left join dm_order_bind ob on t.order_no = ob.order_no
		    left join put_account_info pai on pai.promoter_id = t.promoter_id  
            where 1=1
         {&:ProductNo}
		 { &:PaiPlatNo}
         { &:PaiAgentNo}
         { &@t.PromoterId} 
		 { &@t.BusinessType}
         { &@t.TermNo} 
         { &:ST} 
         { &:ET}
       )r