create or replace procedure SP_PROVINCE_ORDER_REPORT(v_start_time    varchar2, --起始时间
                                                  v_end_time      varchar2, --结束时间
                                                  v_time_type     number, --时间类型 0 --小时 1 --天 2 --月
                                                  v_province_no   varchar2, --省份
                                                  v_out_status    out number, --状态,100表示成功,其他失败
                                                  v_out_msg       out varchar2, --结果消息
                                                  v_out_data      out pkg_cursor.pointer --数据集合
                                                  ) as
  /*
   -- 用途: 省份流量包统计报表
  -- 创建: mouchao 2020-09-27
  */
l_start_time date := to_date(v_start_time, 'yyyy-mm-dd hh24:mi:ss');
l_end_time   date := to_date(v_end_time, 'yyyy-mm-dd hh24:mi:ss');

begin

  open v_out_data for
    with resultOrder as
     (select t.order_no
        from dm_order_main t left join dm_order_main_ext ext
        on t.order_no = ext.order_no
       where
             (t.create_time >= l_start_time or l_start_time is null)
         and (t.create_time < l_end_time or l_end_time is null)
         and (t.business_type = 1) --号卡
         and (ext.contact_province = v_province_no or v_province_no is null)
      )
    select case
             when v_time_type = 2 then
              to_char(r.ordertime, 'yyyy-mm') --月
              else to_char(r.ordertime, 'yyyy-mm-dd') --天
           end as "日期",
           -- r.business_type,
            dsd1.name "业务类型",
            r.contact_province "省份",
           --r.product_type,
           --r.term_no,
           --r.agent_no,
           --r.promoter_id,
           nvl(r.total, 0) "订单量", --订单量
           nvl(r.valid,0) "有效订单量",  --有效订单量
            nvl(round(r.valid / decode(r.total, 0, null, r.total), 4) * 100,
               0) || '%' as "有效订单率",
          -- nvl(r.activeT3,0) "T+3激活数", --T+3激活数
          -- nvl(r.activeT7,0) "t+7激活数", --T+7激活率
           nvl(r.delivaryCount, 0) "发货量", --发货量
           nvl(round(r.delivaryCount / decode(r.total, 0, null, r.total), 4)* 100,
               0) || '%' as "发货率", --发货率
           nvl(r.activatecount, 0) "激活量", --激活量
           nvl(round(r.activatecount / decode(r.total, 0, null, r.total), 4)* 100,
               0)|| '%'  as "激活率", --激活率
           nvl(round(r.activeT3 / decode(r.total, 0, null, r.total), 4)* 100,
               0)|| '%' as "t+3激活率", --t+3激活率
           nvl(round(r.activeT7 / decode(r.total, 0, null, r.total), 4)* 100,
               0)|| '%'  as "t+7激活率", --t+7激活率
           nvl(round(r.activatecount / decode(r.valid, 0, null, r.valid), 4)* 100,
               0) || '%' as "有效订单激活率" --有效订单激活率
      from (select case
                     when v_time_type = 2 then
                      trunc(t.create_time, 'mm')
                      else trunc(t.create_time)
                   end as orderTime,
                   t.business_type,
                   ext.contact_province,
                   --t.product_type,
                   --t.term_no,
                  -- t.agent_no,
                   --t.promoter_id,
                   count(1) as total, --总订单数
               --noformat start
              sum(case when t.order_status = 0 then 1 else 0 end) as valid, --有效订单
              sum(case when ext.activate_status = 0 then 1 else 0 end) as activateCount, --激活订单数
              sum(case when ext.activate_status = 0 and ext.activate_time <= (t.create_time + 3) then 1 else 0 end) as activeT3, --T+3激活数
              sum(case when ext.activate_status = 0 and ext.activate_time <= (t.create_time + 7) then 1 else 0 end) as activeT7, --T+7激活数
              sum(case when ext.express_no is not null then 1 else 0 end) as delivaryCount --发货量
                --noformat end
              from DM_ORDER_MAIN t
              left join dm_order_main_ext ext
                on t.order_no = ext.order_no
              left join dm_order_bind ob
                on ob.order_no = t.order_no
              left join put_account_info pai
                on pai.promoter_id = t.promoter_id
             where t.order_no in (select order_no from resultOrder)
             group by rollup(( case
                        when v_time_type = 2 then
                         trunc(t.create_time, 'mm')
                         else trunc(t.create_time)
                      end,
                       t.business_type,
                        ext.contact_province ))
             order by  case
                       when v_time_type = 2 then
                        trunc(t.create_time,'mm')
                        else  trunc(t.create_time)
                        end
                      ) r

     -- left join DM_Promoter_Info i
       -- on R.Promoter_Id = i.Promoter_Id
     -- left join dm_term_info ti
      --  on R.term_no = ti.term_no
      left join dm_system_dictionary dsd1
       on R.Business_Type = dsd1.value and dsd1.type='BusinessType'
     /* left join dm_system_province dsp
       on R.province_no = dsp.province_no*/
       ;

      -- and t1.type = 'BusinessType'
      --left join put_agent_info pait
      --  on pait.agent_no = r.agent_no;
  v_out_status := error_code.success;
  v_out_msg  := '查询成功';
  commit;
exception
  when others then
    v_out_status := error_code.failed;
    v_out_msg  := '查询失败';
    rollback;

end SP_PROVINCE_ORDER_REPORT;
