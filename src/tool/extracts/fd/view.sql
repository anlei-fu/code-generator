Creating view ADVICE_AMOUNT_WORK_END
prompt ====================================
prompt
create or replace force view fd_account.advice_amount_work_end as
select t.channel_no, ----13-月底使用
       t.channel_name,
       a.inner_balance,
       hb.half_amount,
       (4 * hb.half_amount) advice_two,
       (24 * hb.half_amount) advice_twelve,
       tb.two_amount,
       vb.twelve_amount,
       decode(hb.half_amount,0,0,(tb.two_amount - 4 * hb.half_amount) / (4 * hb.half_amount)) two_diff,
       decode(hb.half_amount,0,0,(vb.twelve_amount - 24 * hb.half_amount) / (24 * hb.half_amount)) twelve_diff
  from fd_base_up_channel t
 inner join fd_base_up_account_map m on t.channel_no = m.channel_no
 inner join fd_base_up_account a on m.account_id = a.account_id
 inner join (select h.channel_no, sum(h.trade_amount) half_amount
               from fd_report_channel_halfhour h
              where h.collect_time >
                    (add_months(sysdate, -1) - 30 / 24 / 60)
                and h.collect_time <= add_months(sysdate, -1)
                and h.channel_type = 1
              group by h.channel_no) hb on t.channel_no = hb.channel_no
  left join (select o.channel_no, (sum(o.trade_amount) / 7) two_amount --------跨天数据有问题
               from fd_report_channel_halfhour o
              where (trunc(o.collect_time) >= trunc(sysdate - 7) and
                    trunc(o.collect_time) < trunc(sysdate) and
                    to_number(to_char(o.collect_time, 'hh24miss')) >
                    to_number(to_char((sysdate - 30 / 24 / 60), 'hh24miss')) and
                    to_number(to_char(o.collect_time, 'hh24miss')) <=
                    to_number(to_char((sysdate + 90 / 24 / 60), 'hh24miss')))
                and o.channel_type = 1
              group by o.channel_no) tb on t.channel_no = tb.channel_no
  left join (select v.channel_no, (sum(v.trade_amount) / 7) twelve_amount
               from fd_report_channel_halfhour v
              where (trunc(v.collect_time) >= trunc(sysdate - 7) and
                    trunc(v.collect_time) < trunc(sysdate) and
                    ((to_number(to_char(v.collect_time, 'hh24miss')) >= 0 and
                    to_number(to_char(v.collect_time, 'hh24miss')) <
                    90000) or
                    (to_number(to_char(v.collect_time, 'hh24miss')) >=
                    210000 and
                    to_number(to_char(v.collect_time, 'hh24miss')) <
                    240000)))
                and v.channel_type = 1
              group by v.channel_no) vb on t.channel_no = vb.channel_no
;

prompt
prompt Creating view ADVICE_AMOUNT_WORK_HEAD
prompt =====================================
prompt
create or replace force view fd_account.advice_amount_work_head as
select t.channel_no,--------1-5号使用
       t.channel_name,
       a.inner_balance,
       hb.half_amount,
       (4 * hb.half_amount) advice_two,
       (24 * hb.half_amount) advice_twelve,
       tb.two_amount,
       vb.twelve_amount,
       decode(hb.half_amount,0,0,(tb.two_amount - 4 * hb.half_amount) / (4 * hb.half_amount)) two_diff,
       decode(hb.half_amount,0,0,(vb.twelve_amount - 24 * hb.half_amount) / (24 * hb.half_amount)) twelve_diff
  from fd_base_up_channel t
 inner join fd_base_up_account_map m on t.channel_no = m.channel_no
 inner join fd_base_up_account a on m.account_id = a.account_id
 inner join (select h.channel_no, sum(h.trade_amount) half_amount
               from fd_report_channel_halfhour h
              where h.collect_time >
                    (add_months(sysdate, -1) - 30 / 24 / 60)
                and h.collect_time <= add_months(sysdate, -1)
                and h.channel_type = 1
              group by h.channel_no) hb on t.channel_no = hb.channel_no
 left join (select o.channel_no, sum(o.trade_amount) two_amount
               from fd_report_channel_halfhour o
              where o.collect_time >
                    (add_months(sysdate, -1) - 30 / 24 / 60)
                and o.collect_time <=
                    (add_months(sysdate, -1) + 90 / 24 / 60)
                and o.channel_type = 1
              group by o.channel_no) tb on t.channel_no = tb.channel_no
 left join (select v.channel_no, sum(v.trade_amount) twelve_amount
               from fd_report_channel_halfhour v
              where v.collect_time >=
                    (trunc(add_months(sysdate, -1)) + 21 / 24)
                and v.collect_time <
                    (trunc(add_months(sysdate, -1)) + 1 + 9 / 24)
                and v.channel_type = 1
              group by v.channel_no) vb on t.channel_no = vb.channel_no
;

prompt
prompt Creating view ADVICE_AMOUNT_WORK_MIDDLE
prompt =======================================
prompt
create or replace force view fd_account.advice_amount_work_middle as
select t.channel_no, ----6-12日使用
       t.channel_name,
       a.inner_balance,
       hb.half_amount,
       (4 * hb.half_amount) advice_two,
       (24 * hb.half_amount) advice_twelve,
       tb.two_amount,
       vb.twelve_amount,
       decode(hb.half_amount,0,0,(tb.two_amount - 4 * hb.half_amount) / (4 * hb.half_amount)) two_diff,
       decode(hb.half_amount,0,0,(vb.twelve_amount - 24 * hb.half_amount) / (24 * hb.half_amount)) twelve_diff
  from fd_base_up_channel t
 inner join fd_base_up_account_map m on t.channel_no = m.channel_no
 inner join fd_base_up_account a on m.account_id = a.account_id
 inner join (select h.channel_no, sum(h.trade_amount) half_amount
               from fd_report_channel_halfhour h
              where h.collect_time >
                    (add_months(sysdate, -1) - 30 / 24 / 60)
                and h.collect_time <= add_months(sysdate, -1)
                and h.channel_type = 1
              group by h.channel_no) hb on t.channel_no = hb.channel_no
  left join (select o.channel_no, (sum(o.trade_amount) / 7) two_amount --------跨天数据有问题
               from fd_report_channel_halfhour o
              where ((trunc(o.collect_time) >= trunc(sysdate - 12) and
                    trunc(o.collect_time) < trunc(sysdate, 'mm')) or
                    (trunc(o.collect_time) >= (trunc(sysdate, 'mm') + 5) and
                    trunc(o.collect_time) < trunc(sysdate)) and
                    to_number(to_char(o.collect_time, 'hh24miss')) >
                    to_number(to_char((sysdate - 30 / 24 / 60), 'hh24miss')) and
                    to_number(to_char(o.collect_time, 'hh24miss')) <=
                    to_number(to_char((sysdate + 90 / 24 / 60), 'hh24miss')))
                and o.channel_type = 1
              group by o.channel_no) tb on t.channel_no = tb.channel_no
  left join (select v.channel_no, (sum(v.trade_amount) / 7) twelve_amount
               from fd_report_channel_halfhour v
              where ((trunc(v.collect_time) >= trunc(sysdate - 12) and
                    trunc(v.collect_time) < trunc(sysdate, 'mm')) or
                    (trunc(v.collect_time) >= (trunc(sysdate, 'mm') + 5) and
                    trunc(v.collect_time) < trunc(sysdate)) and
                    ((to_number(to_char(v.collect_time, 'hh24miss')) >= 0 and
                    to_number(to_char(v.collect_time, 'hh24miss')) <
                    90000) or
                    (to_number(to_char(v.collect_time, 'hh24miss')) >=
                    210000 and
                    to_number(to_char(v.collect_time, 'hh24miss')) <
                    240000)))
                and v.channel_type = 1
              group by v.channel_no) vb on t.channel_no = vb.channel_no
;

prompt
prompt Creating view DK_V_BASE_CHANNEL_ADD
prompt ===================================
prompt
create or replace force view fd_account.dk_v_base_channel_add as
select trunc(t.change_time) snap_time,
       t.channel_no,
       t.account_id,
       1 account_type,
       sum(decode(t.manual_change_type,
                  13,
                  -1 * t.change_amount,
                  14,
                  -1 * t.change_amount,
                  t.change_amount)) add_amount
  from dk_trade_up_settle t
 where t.manual_change_type in (11, 12, 13, 14, 15, 16, 41, 42)
 group by trunc(t.change_time), t.channel_no, t.account_id
union
select trunc(u.change_time) snap_time,
       u.channel_no,
       u.account_id,
       2 account_type,
       sum(decode(u.add_type,
                  13,
                  -1 * u.change_amount,
                  14,
                  -1 * u.change_amount,
                  u.change_amount)) add_amount
  from dk_trade_down_settle u
 where u.add_type in (11, 12, 13, 14, 15, 16, 41, 42, 51, 52)
 group by trunc(u.change_time), u.channel_no, u.account_id;

prompt
prompt Creating view FD_V_BASE_BANK_CHANGE
prompt ===================================
prompt
create or replace force view fd_account.fd_v_base_bank_change as
select trunc(t.change_time) snap_time,
       t.company_id,
       t.account_id,
       sum(decode(t.change_type, 1, t.change_amount, 0)) add_amount,
       sum(decode(t.change_type, 2, t.change_amount, 0)) minus_amount
  from fd_bank_cash_fund t
 group by trunc(t.change_time), t.company_id, t.account_id;

prompt
prompt Creating view DK_V_REPORT_BANK_DAILY
prompt ====================================
prompt
create or replace force view fd_account.dk_v_report_bank_daily as
select t.record_date,
       t.account_id,
       t.account_name,
       zt.balance start_balance,
       b.add_amount,
       b.minus_amount,
       t.balance end_balance
  from dk_report_zero_balance t
  left join fd_v_base_bank_change b on t.record_date = b.snap_time
                                   and t.account_id = b.account_id
                                   and t.account_type = 3
  left join (select z.balance, z.record_date, z.account_type, z.account_id
               from dk_report_zero_balance z) zt on (t.record_date - 1) =
                                                    zt.record_date
                                                and t.account_id =
                                                    zt.account_id
                                                and t.account_type =
                                                    zt.account_type
 where t.account_type = 3
 order by t.record_date, b.company_id, t.account_id;

prompt
prompt Creating view DK_V_REPORT_CHANNEL_DAILY
prompt =======================================
prompt
create or replace force view fd_account.dk_v_report_channel_daily as
select t.record_date,
       t.account_type,
       t.channel_no,
       t.account_id,
       t.channel_source_system,
       max(t.channel_status) channel_status,
       max(t.channel_name) channel_name,
       max(t.account_name) account_name,
       max(z.balance) begin_balance,
       max(nvl(c.add_amount,0)) add_amount,
       sum(nvl((r.draw_amount - r.refund_draw_amount),0)) draw_amount,
       max(t.balance) end_balance,
       max(t.query_balance) query_balance,
       (max(t.balance) - max(t.query_balance)) balance_difference
  from dk_report_zero_balance t
  left join dk_report_zero_balance z on (t.record_date - 1) = z.record_date
                                    and t.account_type = z.account_type
                                    and t.channel_no = z.channel_no
                                    and t.account_id = z.account_id
  left join dk_report_commi_profit_daily r on t.record_date = r.snap_time
                                          and t.account_type =
                                              r.channel_type
                                          and t.channel_no = r.channel_no
                                          and t.account_id = r.account_id
  left join dk_v_base_channel_add c on t.record_date = c.snap_time
                                   and t.account_type = c.account_type
                                   and t.channel_no = c.channel_no
                                   and t.account_id = c.account_id
 where t.account_type in (1, 2)
 group by t.record_date, t.account_type, t.channel_no, t.account_id, t.channel_source_system;

prompt
prompt Creating view DK_V_REPORT_DOWNCHANNEL_DAILY
prompt ===========================================
prompt
create or replace force view fd_account.dk_v_report_downchannel_daily as
select t.account_status,
       t.record_date,
       count(distinct(case
                        when nvl(t.balance, 0) > 0 then
                         t.channel_no
                      end)) down_pay,
       count(distinct(case
                        when t.balance < 0 then
                         t.channel_no
                      end)) down_income,
       count(distinct(case
                        when nvl(t.balance, 0) > 0 or t.balance < 0 then
                         t.channel_no
                      end)) all_down,
       sum(case
             when nvl(t.balance, 0) > 0 then
              t.balance
           end) down_pay_amount,
       sum(case
             when t.balance < 0 then
              t.balance
           end) down_income_amount,
       sum(nvl(t.balance, 0)) all_amount
  from (select t.account_status,
               t.record_date,
               t.channel_no,
               sum(nvl(t.balance, 0)) balance
          from FD_REPORT_ZERO_BALANCE t
         where t.account_type = 2
         group by t.account_status, t.channel_no,t.record_date) t
 group by t.account_status,t.record_date
  order by t.record_date desc, t.account_status asc;

prompt
prompt Creating view DK_V_REPORT_PROFIT_DAILY
prompt ======================================
prompt
create or replace force view fd_account.dk_v_report_profit_daily as
select t.snap_time,
       t.company_id,
       t.statistics_type,
       t.channel_source_system,
       sum(decode(t.channel_type, 2, (t.total_Face - t.refund_total_face), 0)) down_face,
       sum(decode(t.channel_type, 2, t.draw_amount, 0)) down_draw,
       sum(decode(t.channel_type, 2, t.refund_draw_amount, 0)) down_refund,
       sum(decode(t.channel_type, 1, t.draw_amount, 0)) up_draw,
       sum(decode(t.channel_type, 1, t.refund_draw_amount, 0)) up_refund,
       sum(decode(t.channel_type, 1, (t.draw_amount - t.real_amount), 0)) up_commission,
       sum(decode(t.channel_type, 2, (t.draw_amount - t.real_amount), 0)) down_commission,
       sum(t.profits - t.refund_profits - nvl(t.sys_cost,0)) profit,
       sum(t.service_fee - t.refund_service_fee) plat_service_fee,
       sum((t.profits - t.refund_profits) - (t.service_fee - t.refund_service_fee) - nvl(t.sys_cost,0)) last_profit,
       sum(nvl(t.sys_cost,0)) sys_cost
  from dk_report_commi_profit_daily t
 group by t.snap_time, t.company_id, t.statistics_type,t.channel_source_system;

prompt
prompt Creating view DK_V_REPORT_PROFIT_MONTH
prompt ======================================
prompt
create or replace force view fd_account.dk_v_report_profit_month as
select trunc(t.snap_time, 'mm') snap_time,
       t.company_id,
       t.statistics_type,
       t.channel_source_system,
       sum(decode(t.channel_type, 2, (t.total_Face - t.refund_total_face), 0)) down_face,
       sum(decode(t.channel_type, 2, t.draw_amount, 0)) down_draw,
       sum(decode(t.channel_type, 2, t.refund_draw_amount, 0)) down_refund,
       sum(decode(t.channel_type, 1, t.draw_amount, 0)) up_draw,
       sum(decode(t.channel_type, 1, t.refund_draw_amount, 0)) up_refund,
       sum(decode(t.channel_type, 1, (t.draw_amount - t.real_amount), 0)) up_commission,
       sum(decode(t.channel_type, 2, (t.draw_amount - t.real_amount), 0)) down_commission,
       sum(t.profits - t.refund_profits - nvl(t.sys_cost,0)) profit,
       sum(t.service_fee - t.refund_service_fee) plat_service_fee,
       sum((t.profits - t.refund_profits) - (t.service_fee - t.refund_service_fee) - nvl(t.sys_cost,0)) last_profit,
       sum(nvl(t.sys_cost,0)) sys_cost
  from dk_report_commi_profit_daily t
 group by trunc(t.snap_time, 'mm'), t.company_id, t.statistics_type, t.channel_source_system;

prompt
prompt Creating view DK_V_REPORT_SETTLE_SUMMARY
prompt ========================================
prompt
create or replace force view fd_account.dk_v_report_settle_summary as
select t.snap_time,
       t.company_id,
       t.channel_type,
       t.channel_no,
       t.account_id,
       t.statistics_type,
       t.channel_source_system,
       sum(decode(t.business_type, 5, 1, 6, 1, 8, 1, 0) * t.total_unit / 1000) total_unit,
       sum(t.total_Face) total_Face,
       sum(t.refund_total_face) refund_total_face,
       sum(t.total_Face - t.refund_total_face) real_face,
       sum((t.total_Face - t.refund_total_face)) real_Recharge_Face, --实际充值面值
       sum(t.draw_amount) draw_amount,
       sum(t.refund_draw_amount) refund_draw_amount,
       sum(t.draw_amount - t.refund_draw_amount) real_draw_amount, --实际扣款金额
       sum((t.total_Face - t.refund_total_face) -
           (t.draw_amount - t.refund_draw_amount)) One_Way_Seat_profits, --实际单向座扣毛利
       sum(t.commission - t.refund_commission) end_commission, --上游后返佣金
       sum(((t.total_Face - t.refund_total_face) -
           (t.draw_amount - t.refund_draw_amount)) +
           (t.commission - t.refund_commission)) One_Way_profits, --上游单向毛利
       sum(t.service_fee - t.refund_service_fee) last_service_fee, --第三方平台应收手续费
       sum(((t.total_Face - t.refund_total_face) -
           (t.draw_amount - t.refund_draw_amount)) +
           (t.commission - t.refund_commission) -
           (t.service_fee - t.refund_service_fee)) last_profits
  from dk_report_commi_profit_daily t
 group by t.snap_time,
          t.company_id,
          t.channel_type,
          t.channel_no,
          t.account_id,
          t.statistics_type,
          t.channel_source_system
;

prompt
prompt Creating view DK_V_REPORT_SUMMARY_MONTH
prompt =======================================
prompt
create or replace force view fd_account.dk_v_report_summary_month as
select trunc(t.snap_time, 'mm') snap_time,
       t.company_id,
       t.channel_type,
       t.channel_no,
       t.account_id,
       t.statistics_type,
       t.channel_source_system,
       sum(decode(t.business_type, 5, 1, 6, 1, 8, 1, 0) * t.total_unit / 1000) total_unit,
       sum(t.total_Face) total_Face,
       sum(t.refund_total_face) refund_total_face,
       sum(t.total_Face - t.refund_total_face) real_face,
       sum((t.total_Face - t.refund_total_face)) real_Recharge_Face, --实际充值面值
       sum(t.draw_amount) draw_amount,
       sum(t.refund_draw_amount) refund_draw_amount,
       sum(t.draw_amount - t.refund_draw_amount) real_draw_amount, --实际扣款金额
       sum((t.total_Face - t.refund_total_face) -
           (t.draw_amount - t.refund_draw_amount)) One_Way_Seat_profits, --实际单向座扣毛利
       sum(t.commission - t.refund_commission) end_commission, --上游后返佣金
       sum(((t.total_Face - t.refund_total_face) -
           (t.draw_amount - t.refund_draw_amount)) +
           (t.commission - t.refund_commission)) One_Way_profits --上游单向毛利
  from dk_report_commi_profit_daily t
 group by trunc(t.snap_time, 'mm'),
          t.company_id,
          t.channel_type,
          t.channel_no,
          t.account_id,
          t.statistics_type,
          t.channel_source_system
 order by snap_time desc,
          t.company_id,
          t.channel_no,
          t.account_id,
          t.statistics_type
;

prompt
prompt Creating view DK_V_REPORT_UPCHANNEL_DAILY
prompt =========================================
prompt
create or replace force view fd_account.dk_v_report_upchannel_daily as
select t.account_status,
       t.record_date,
       count(distinct(case
                        when nvl(t.balance, 0) > 0 then
                         t.channel_no
                      end)) up_income,
       count(distinct(case
                        when t.balance < 0 then
                         t.channel_no
                      end)) up_pay,
       count(distinct(case
                        when nvl(t.balance, 0) > 0 or t.balance < 0 then
                         t.channel_no
                      end)) all_up,
       sum(case
             when nvl(t.balance, 0) > 0 then
              t.balance
           end) up_income_amount,
       sum(case
             when t.balance < 0 then
              t.balance
           end) up_pay_amount,
       sum(nvl(t.balance, 0)) all_amount
  from (select t.account_status,
               t.record_date,
               t.channel_no,
               sum(nvl(t.balance, 0)) balance
          from FD_REPORT_ZERO_BALANCE t
         where t.account_type = 1
         group by t.account_status, t.channel_no,t.record_date) t
 group by t.account_status,t.record_date
  order by t.record_date desc, t.account_status asc;

prompt
prompt Creating view FD_V_BASE_CHANNEL_ADD
prompt ===================================
prompt
create or replace force view fd_account.fd_v_base_channel_add as
select tab.snap_time,
       tab.channel_no,
       tab.account_id,
       tab.account_type,
       sum(tab.add_amount) add_amount
from(select trunc(t.change_time) snap_time,---上游渠道加款相关数据
       t.channel_no,
       t.account_id,
       1 account_type,
       sum(decode(t.manual_change_type,
                  13,
                  -1 * t.change_amount,
                  14,
                  -1 * t.change_amount,
                  t.change_amount)) add_amount
  from fd_trade_up_manual t
 where t.manual_change_type in (11, 12, 13, 14, 15, 16, 41, 42)
 group by trunc(t.change_time), t.channel_no, t.account_id
union
select trunc(u.change_time) snap_time,---下游渠道加款相关数据
       u.channel_no,
       u.account_id,
       2 account_type,
       sum(decode(u.add_type,
                  13,
                  -1 * u.change_amount,
                  14,
                  -1 * u.change_amount,
                  u.change_amount)) add_amount
  from fd_trade_down_manual u
 where u.add_type in (11, 12, 13, 14, 15, 16, 41, 42, 51, 52)
 group by trunc(u.change_time), u.channel_no, u.account_id
 union
 select trunc(f.change_time) snap_time,---下游渠道转账退款数据
        r.channel_no,
        r.account_id,
        2 account_type,
        -1*sum(f.change_amount) add_amount
  from fd_trade_co_cap_fund f
 inner join fd_base_company_account_cap c on f.account_id = c.account_id
 inner join fd_trade_down_refund r on f.transfer_refund_id = r.record_id
 where c.account_type in (8, 10)
   and f.change_type = 2
 group by  trunc(f.change_time),r.channel_no,r.account_id) tab
 group by tab.snap_time,tab.channel_no,tab.account_id,tab.account_type
;

prompt
prompt Creating view FD_V_REPORT_BANK_DAILY
prompt ====================================
prompt
create or replace force view fd_account.fd_v_report_bank_daily as
select t.record_date,
       t.account_id,
       t.account_name,
       t.company_id,
       nvl(zt.balance, 0) start_balance,
       nvl(m.add_amount,0) add_amount,
       nvl(m.minus_amount,0) minus_amount,
       nvl(t.balance, 0) end_balance
  from fd_report_zero_balance t
  left join rpt_merge_report_trade_add m on t.record_date=m.snap_time
                                            and t.account_id=m.account_id
                                            and t.account_type=3
  left join (select z.balance, z.record_date, z.account_type, z.account_id,z.company_id
               from fd_report_zero_balance z) zt on (t.record_date - 1) =
                                                    zt.record_date
                                                and t.account_id =
                                                    zt.account_id
                                                and t.account_type =
                                                    zt.account_type
 where t.account_type = 3
 order by t.record_date, zt.company_id, t.account_id;

prompt
prompt Creating view FD_V_REPORT_BANK_DAILY1
prompt =====================================
prompt
create or replace force view fd_account.fd_v_report_bank_daily1 as
select t.record_date,
       t.account_id,
       t.account_name,
       zt.balance start_balance,
       nvl(m.add_amount,nvl(b.add_amount,0)) add_amount,
       nvl(m.minus_amount,nvl(b.minus_amount,0)) minus_amount,
       t.balance end_balance
  from fd_report_zero_balance t
  left join fd_v_base_bank_change b on t.record_date = b.snap_time
                                   and t.account_id = b.account_id
                                   and t.account_type = 3
  left join rpt_merge_report_trade_add m on t.record_date=m.snap_time
                                            and t.account_id=m.account_id
                                            and t.account_type=3
  left join (select z.balance, z.record_date, z.account_type, z.account_id
               from fd_report_zero_balance z) zt on (t.record_date - 1) =
                                                    zt.record_date
                                                and t.account_id =
                                                    zt.account_id
                                                and t.account_type =
                                                    zt.account_type
 where t.account_type = 3
 order by t.record_date, b.company_id, t.account_id;

prompt
prompt Creating view FD_V_REPORT_CHANNEL_DAILY
prompt =======================================
prompt
create or replace force view fd_account.fd_v_report_channel_daily as
select t.record_date,
       t.account_type,
       t.channel_no,
       t.account_id,
       max(t.channel_status) channel_status,
       max(t.channel_name) channel_name,
       max(t.account_name) account_name,
       max(t.company_id) company_id,
       max(nvl(z.balance,0)) begin_balance,
       max(nvl(m.add_amount,0)) add_amount,
       sum(nvl((r.draw_amount - r.refund_draw_amount),0)) draw_amount,
       max(nvl(t.balance,0)) end_balance,
       max(nvl(t.query_balance,0)) query_balance,
       (max(nvl(t.balance,0)) - max(nvl(t.query_balance,0))) balance_difference,
       max(c.warn_balance) warn_balance
  from fd_report_zero_balance t
  left join fd_base_up_channel c on t.channel_no=c.channel_no and t.account_type=1
  left join fd_report_zero_balance z on (t.record_date - 1) = z.record_date
                                    and t.account_type = z.account_type
                                    and t.channel_no = z.channel_no
                                    and t.account_id = z.account_id
  left join fd_report_commi_profit_daily r on t.record_date = r.snap_time
                                          and t.account_type =
                                              r.channel_type
                                          and t.channel_no = r.channel_no
                                          and t.account_id = r.account_id
  left join rpt_merge_report_trade_add m on t.record_date=m.snap_time
                                        and t.channel_no=m.channel_no
                                        and t.account_id=m.account_id
                                        and t.account_type=m.account_type
 where t.account_type in (1, 2)
 group by t.record_date, t.account_type, t.channel_no, t.account_id;

prompt
prompt Creating view FD_V_REPORT_CHANNEL_DAILY1
prompt ========================================
prompt
create or replace force view fd_account.fd_v_report_channel_daily1 as
select t.record_date,
       t.account_type,
       t.channel_no,
       t.account_id,
       max(t.channel_status) channel_status,
       max(t.channel_name) channel_name,
       max(t.account_name) account_name,
       max(nvl(z.balance,0)) begin_balance,
       nvl(max(m.add_amount),max(nvl(c.add_amount,0))) add_amount,---如果加款表有数据从加款表取，没有从人工操作数据里面取
       sum(nvl((r.draw_amount - r.refund_draw_amount),0)) draw_amount,
       max(t.balance) end_balance,
       max(t.query_balance) query_balance,
       (max(t.balance) - max(t.query_balance)) balance_difference
  from fd_report_zero_balance t
  left join fd_report_zero_balance z on (t.record_date - 1) = z.record_date
                                    and t.account_type = z.account_type
                                    and t.channel_no = z.channel_no
                                    and t.account_id = z.account_id
  left join fd_report_commi_profit_daily r on t.record_date = r.snap_time
                                          and t.account_type =
                                              r.channel_type
                                          and t.channel_no = r.channel_no
                                          and t.account_id = r.account_id
  left join fd_v_base_channel_add c on t.record_date = c.snap_time
                                   and t.account_type = c.account_type
                                   and t.channel_no = c.channel_no
                                   and t.account_id = c.account_id
  left join rpt_merge_report_trade_add m on t.record_date=m.snap_time
                                        and t.channel_no=m.channel_no
                                        and t.account_id=m.account_id
                                        and t.account_type=m.account_type
 where t.account_type in (1, 2)
 group by t.record_date, t.account_type, t.channel_no, t.account_id
;

prompt
prompt Creating view FD_V_REPORT_DOWNCHANNEL_DAILY
prompt ===========================================
prompt
create or replace force view fd_account.fd_v_report_downchannel_daily as
select tab.record_date,
       tab.company_id,
       tab.channel_status,
       count(distinct(tab.channel_no)) all_down ,
       sum(tab.balance) all_amount,
       count(distinct(case when tab.balance>0 then tab.channel_no else null end) ) down_pay,
       sum(case when tab.balance>0 then tab.balance end) down_pay_amount,
       count(distinct(case when tab.balance<0 then tab.channel_no else null end) )  down_income,
       sum(case when tab.balance<0 then tab.balance end) down_income_amount
     from(select t.record_date,
                 t.company_id,
                 t.channel_status,
                 t.channel_no,
                 nvl(t.balance,0) balance
          from (select t1.record_date,
                    t1.account_id,
                    t1.company_id,
                    max(nvl(t1.balance, 0)) balance,
                    t1.channel_status,
                    t1.channel_no
               from fd_report_zero_balance t1
              where t1.account_type = 2
              group by t1.record_date,
                       t1.account_id,
                       t1.channel_status,
                       t1.company_id,
                       t1.channel_no) t
          left join (select d.channel_no,
                            d.snap_time,
                            sum(d.draw_amount - d.refund_draw_amount) draw_amount
                       from fd_report_commi_profit_daily d
                       where d.channel_type=2
                      group by d.channel_no, d.snap_time) dct on t.channel_no =
                                                                 dct.channel_no
                                                             and t.record_date =
                                                                 (dct.snap_time - 1)
         where nvl(dct.draw_amount, 0) != 0
           and nvl(t.balance,0)!=0) tab
      group by tab.record_date,
               tab.company_id,
               tab.channel_status
     order by tab.record_date desc,tab.channel_status asc;

prompt
prompt Creating view FD_V_REPORT_OPERATING_RATE
prompt ========================================
prompt
create or replace force view fd_account.fd_v_report_operating_rate as
select nvl((d.snap_time-1),c.time) time,
       c.record_date,
       nvl(d.company_id,c.companyIds) companyId,
       nvl(c.all_Receivables,0) up_down_all,
       nvl(c.up_Receivables,0) up_all,
       nvl(c.fee_Receivables,0) up_fee,
       nvl(c.flow_Receivables,0) up_flow,
       nvl(c.other_Receivables,0) up_other,
       nvl(c.down_Receivables,0) down_all,
       nvl(c.all_pay,0) up_down_all_pay,
       nvl(c.up_pay,0) up_all_pay,
       nvl(c.fee_pay,0) up_fee_pay,
       nvl(c.flow_pay,0) up_flow_pay,
       nvl(c.other_pay,0) up_other_pay,
       nvl(c.down_pay,0) down_all_pay,
       nvl(c.add_all,0) add_all,
       nvl(c.add_fee,0) add_fee,
       nvl(c.add_flow,0) add_flow,
       nvl(c.add_other,0) add_other,
       nvl(d.draw_all,0) draw_all,
       nvl(d.draw_fee,0) draw_fee,
       nvl(d.draw_flow,0) draw_flow,
       nvl(d.draw_other,0) draw_other,
       nvl(c.op_balance,0) ope_balance,
       nvl(c.bank_balance,0) bank_balance,
       to_char(decode(nvl(c.fee_Receivables,0),0,1,round(nvl(d.draw_fee,0)/c.fee_Receivables,4))*100,'fm9999999990.09999')||'%' up_fee_rate,
       to_char(decode(nvl(c.flow_Receivables,0),0,1,round(nvl(d.draw_flow,0)/c.flow_Receivables,4))*100,'fm9999999990.09999')||'%' up_flow_rate,
       to_char(decode(nvl(c.other_Receivables,0),0,1,round(nvl(d.draw_other,0)/c.other_Receivables,4))*100,'fm9999999990.09999')||'%' up_other_rate,
       to_char(decode(nvl(d.draw_all,0),0,0,round(nvl(c.down_Receivables,0)/d.draw_all,4))*100,'fm9999999990.09999')||'%' down_all_rate,
       to_char(decode(nvl(d.draw_all,0),0,0,round(nvl(c.add_all,0)/d.draw_all,4))*100,'fm9999999990.09999')||'%' today_trade_rate
      from (select t.snap_time,
                   t.company_id,
                    sum(nvl(t.draw_amount, 0)) draw_all,
                    sum(decode(upc.capital_class,1, nvl(t.draw_amount, 0), 3,nvl(t.draw_amount, 0), 0)) draw_fee,
                    sum(decode(upc.capital_class,2,nvl(t.draw_amount, 0),4,nvl(t.draw_amount, 0),0)) draw_flow,
                    sum(decode(upc.capital_class,1,0,2,0,3,0,4,0,nvl(t.draw_amount, 0))) draw_other
               from FD_REPORT_COMMI_PROFIT_DAILY t
               left join FD_BASE_UP_CHANNEL upc on upc.channel_no =t.channel_no
              where t.channel_type = 1
                and t.add_status = 0
              group by t.snap_time ,t.company_id
              ) d
     full join(select nvl(trunc(a.record_date),(b.snap_time-1)) time,
                      nvl(a.a_company_id,b.company_id) companyIds,
                       a.*,
                       b.*
                  from(select  rzb.record_date,
                               rzb.company_id a_company_id,
                           sum(decode(rzb.account_type,3,decode(ai.asset_type,1,nvl(rzb.balance,0),0),0)) bank_balance,
                           sum(decode(rzb.account_type,8,nvl(rzb.balance,0),5,case when c.account_type=5 or c.account_type=1 then nvl(rzb.balance,0)else 0 end,0)) op_balance,
                           sum(decode(rzb.account_type,1,case when rzb.balance>=0 then nvl(rzb.balance,0) else 0 end,2,case when rzb.balance<0 then nvl(rzb.balance,0)*-1 else 0 end,0)) all_Receivables,
                           sum(decode(rzb.account_type,1,case when rzb.balance>=0 then nvl(rzb.balance,0) else 0  end,0)) up_Receivables,
                           sum(decode(rzb.account_type, 1,case when rzb.balance>=0 then (decode(rzb.channel_classif,1,nvl(rzb.balance, 0), 3,nvl(rzb.balance, 0),0)) else 0  end,0)) fee_Receivables,
                           sum(decode(rzb.account_type, 1,case when rzb.balance>=0 then (decode(rzb.channel_classif,2,nvl(rzb.balance, 0), 4,nvl(rzb.balance, 0),0)) else 0  end,0)) flow_Receivables,
                           sum(decode(rzb.account_type, 1,case when rzb.balance>=0 then (decode(rzb.channel_classif,1,0,2,0,3,0,4,0,nvl(rzb.balance, 0))) else 0  end,0)) other_Receivables,
                           sum(decode(rzb.account_type,2,case when rzb.balance<0 then nvl(rzb.balance,0)*-1 else 0  end,0)) down_Receivables,
                           sum(decode(rzb.account_type,1,case when rzb.balance<0 then nvl(rzb.balance,0)*-1 else 0  end,2,case when rzb.balance>=0 then nvl(rzb.balance,0) else 0  end,0)) all_pay,
                           sum(decode(rzb.account_type,1,case when rzb.balance<0 then rzb.balance  else 0 end,0))*-1 up_pay,
                           sum(decode(rzb.account_type, 1,case when rzb.balance<0 then (decode(rzb.channel_classif,1,rzb.balance, 3,rzb.balance,0))  else 0 end,0))*-1 fee_pay,
                           sum(decode(rzb.account_type, 1,case when rzb.balance<0 then (decode(rzb.channel_classif,2,rzb.balance, 4,rzb.balance,0))  else 0 end,0))*-1 flow_pay,
                           sum(decode(rzb.account_type, 1,case when rzb.balance<0 then (decode(rzb.channel_classif,1,0,2,0,3,0,4,0,rzb.balance)) else 0  end,0))*-1 other_pay,
                           sum(decode(rzb.account_type,2,case when rzb.balance>=0 then nvl(rzb.balance,0)  else 0 end,0)) down_pay
                    from (select trunc(t.created_time) record_date, t.account_id, t.account_type, max(nvl(t.balance,0)) balance,t.channel_classif,t.company_id
                              from fd_report_zero_balance t
                             group by trunc(t.created_time), t.account_id, t.account_type,t.channel_classif,t.company_id) rzb
                           left join fd_bank_account_info ai on ai.account_id = rzb.account_id
                           left join fd_base_company_account_cap c on rzb.account_id=c.account_id
                  group by rzb.record_date,rzb.company_id
                        ) a
                full join (select t.snap_time,
                                  upc.company_id,
                                    sum(nvl(t.add_amount, 0)) add_all,
                                    sum(decode(upc.capital_class,1, nvl(t.add_amount, 0),3,nvl(t.add_amount, 0), 0)) add_fee,
                                    sum(decode(upc.capital_class,2, nvl(t.add_amount, 0),4, nvl(t.add_amount, 0),0)) add_flow,
                                    sum(decode(upc.capital_class,1,0,2,0,3,0,4,0, nvl(t.add_amount, 0))) add_other
                               from fd_v_base_channel_add t
                               left join FD_BASE_UP_CHANNEL upc on upc.channel_no =t.channel_no
                              where t.account_type = 1
                              group by t.snap_time ,upc.company_id
                              ) b
                 on trunc(a.record_date)=(b.snap_time-1) and  b.company_id=a.a_company_id
                 ) c  on c.time = (d.snap_time-1) and c.companyIds=d.company_id;

prompt
prompt Creating view FD_V_REPORT_PROFIT_COMPARE
prompt ========================================
prompt
create or replace force view fd_account.fd_v_report_profit_compare as
select t.source_system_id,
       s.text system_name,
       t.record_date,
       t.profit out_profit,
       jz.profits jz_profit,
       (nvl(drv.down_amount, 0) - nvl(urv.up_amount, 0) +
       nvl(sdrv.down_amount, 0) - nvl(surv.up_amount, 0)) rv_amount,
       (t.profit - jz.profits + nvl(drv.down_amount, 0) -
       nvl(urv.up_amount, 0) + nvl(sdrv.down_amount, 0) -
       nvl(surv.up_amount, 0)) profit_differ
  from fd_report_outsys_profit t
 inner join fd_base_source_system s on t.source_system_id =
                                       s.source_system_id
 inner join (select d.snap_time,
                    d.channel_source_system,
                    sum(d.profits - d.refund_profits) profits
               from fd_report_commi_profit_daily d
              where d.channel_type in (1, 2)
              group by d.snap_time, d.channel_source_system) jz on t.source_system_id =
                                                                   jz.channel_source_system
                                                               and t.record_date =
                                                                   jz.snap_time
  left join (select trunc(dm.change_time) rv_time,
                    dsm.source_system_id,
                    sum(dm.real_amount) down_amount
               from fd_trade_down_manual dm
              inner join fd_base_down_system_map dsm on dm.channel_no =
                                                        dsm.channel_no
              where dm.add_type = 60
              group by trunc(dm.change_time), dsm.source_system_id) drv on t.source_system_id =
                                                                           drv.source_system_id
                                                                       and t.record_date =
                                                                           drv.rv_time
  left join (select trunc(um.change_time) rv_time,
                    usm.source_system_id,
                    sum(um.real_amount) up_amount
               from fd_trade_up_manual um
              inner join fd_base_up_system_map usm on um.channel_no =
                                                      usm.channel_no
              where um.manual_change_type = 60
              group by trunc(um.change_time), usm.source_system_id) urv on t.source_system_id =
                                                                           urv.source_system_id
                                                                       and t.record_date =
                                                                           urv.rv_time
  left join (select trunc(ds.change_time) rv_time,
                    dss.source_system_id,
                    sum(ds.real_amount) down_amount
               from dk_trade_up_settle ds
              inner join dk_base_up_system_map dss on ds.channel_no =
                                                      dss.channel_no
              where ds.manual_change_type = 60
              group by trunc(ds.change_time), dss.source_system_id) sdrv on t.source_system_id =
                                                                            sdrv.source_system_id
                                                                        and t.record_date =
                                                                            sdrv.rv_time
  left join (select trunc(us.change_time) rv_time,
                    uss.source_system_id,
                    sum(us.real_amount) up_amount
               from dk_trade_down_settle us
              inner join dk_base_down_system_map uss on us.channel_no =
                                                        uss.channel_no
              where us.add_type = 60
              group by trunc(us.change_time), uss.source_system_id) surv on t.source_system_id =
                                                                            surv.source_system_id
                                                                        and t.record_date =
                                                                            surv.rv_time;

prompt
prompt Creating view FD_V_REPORT_PROFIT_DAILY
prompt ======================================
prompt
create or replace force view fd_account.fd_v_report_profit_daily as
select t.snap_time,
       t.company_id,
       --decode(t.bill_type,2,0,t.business_type) business_type,
       t.statistics_type,
       sum(decode(t.channel_type, 2, (t.total_Face - t.refund_total_face) + t.up_many_face, 4, (t.total_Face - t.refund_total_face) + t.up_many_face, 0)) down_face,
       sum(decode(t.channel_type, 2, t.draw_amount, 4, t.draw_amount, 0)) down_draw,
       sum(decode(t.channel_type, 2, t.refund_draw_amount, 4, t.refund_draw_amount, 0)) down_refund,
       sum(decode(t.channel_type, 1, t.draw_amount, 3, t.draw_amount, 0)) up_draw,
       sum(decode(t.channel_type, 1, t.refund_draw_amount, 3, t.refund_draw_amount, 0)) up_refund,
       sum(decode(t.channel_type, 1, (t.draw_amount - t.real_amount), 3, (t.draw_amount - t.real_amount), 0)) up_commission,
       sum(decode(t.channel_type, 2, (t.draw_amount - t.real_amount), 4, (t.draw_amount - t.real_amount), 0)) down_commission,
       sum(t.profits - t.refund_profits) profit,
       sum(t.service_fee - t.refund_service_fee) plat_service_fee,
       sum((t.profits - t.refund_profits) -
           (t.service_fee - t.refund_service_fee)) last_profit
  from fd_report_commi_profit_daily t
 group by t.snap_time, t.company_id, t.statistics_type
;

prompt
prompt Creating view FD_V_REPORT_PROFIT_DAILY2
prompt =======================================
prompt
create or replace force view fd_account.fd_v_report_profit_daily2 as
select t.snap_time,
       t.company_id,
       decode(t.bill_type, 2, 0, t.business_type) business_type,
       sum(decode(t.channel_type, 2, t.total_face,4,t.total_face, 0)) down_face,
       sum(decode(t.channel_type, 2, t.draw_amount,4,t.draw_amount, 0)) down_draw,
       sum(decode(t.channel_type, 2, t.refund_draw_amount,4,t.refund_draw_amount, 0)) down_refund,
       sum(decode(t.channel_type, 1, t.draw_amount,3,t.draw_amount, 0)) up_draw,
       sum(decode(t.channel_type, 1, t.refund_draw_amount,3,t.refund_draw_amount, 0)) up_refund,
       sum(decode(t.channel_type, 1, (t.draw_amount - t.real_amount),3,(t.draw_amount - t.real_amount), 0)) up_commission,
       sum(decode(t.channel_type, 2, (t.draw_amount - t.real_amount),4,(t.draw_amount - t.real_amount), 0)) down_commission,
       sum(t.profits - t.refund_profits) profit,
       sum(t.service_fee - t.refund_service_fee) plat_service_fee,
       sum((t.profits - t.refund_profits) -
           (t.service_fee - t.refund_service_fee)) last_profit
  from fd_report_commi_profit_daily t
 group by t.snap_time,
          t.company_id,
          decode(t.bill_type, 2, 0, t.business_type);

prompt
prompt Creating view FD_V_REPORT_PROFIT_MONTH
prompt ======================================
prompt
create or replace force view fd_account.fd_v_report_profit_month as
select TAB2.snap_time,
       TAB2.company_id,
       TAB2.statistics_type,
       sum(TAB2.down_face) down_face,
       sum(TAB2.down_draw) + sum(TAB2.last_service_fee) down_draw,
       sum(TAB2.down_refund) down_refund,
       sum(TAB2.up_draw) up_draw,
       sum(TAB2.up_refund) up_refund,
       sum(TAB2.up_commission) up_commission,
       sum(TAB2.down_commission) down_commission,
       sum(TAB2.profit) + sum(TAB2.last_service_fee) profit,
       --sum(TAB2.plat_service_fee) plat_service_fee,
       --sum(TAB2.last_profit) last_profit,
       sum(TAB2.last_service_fee) plat_service_fee,
       sum(TAB2.profit) last_profit
  from (select TAB1.*,
               decode(tf.down_face,
                      0,
                      0,
                      nvl(trunc(f.service_fee * TAB1.down_face / tf.down_face,2), 0)) LAST_SERVICE_FEE
          from (select trunc(t.snap_time, 'mm') snap_time,
                       t.company_id,
                       t.channel_no,
                       t.statistics_type,
                       max(t.channel_name)channel_name,
                       sum(decode(t.channel_type, 2, (t.total_Face - t.refund_total_face) + t.up_many_face, 4, (t.total_Face - t.refund_total_face) + t.up_many_face, 0)) down_face,
                       sum(decode(t.channel_type, 2, t.draw_amount, 4, t.draw_amount, 0)) down_draw,
                       sum(decode(t.channel_type, 2, t.refund_draw_amount, 4, t.refund_draw_amount, 0)) down_refund,
                       sum(decode(t.channel_type, 1, t.draw_amount, 3, t.draw_amount, 0)) up_draw,
                       sum(decode(t.channel_type, 1, t.refund_draw_amount, 3, t.refund_draw_amount, 0)) up_refund,
                       sum(decode(t.channel_type, 1, (t.draw_amount - t.real_amount), 3, (t.draw_amount - t.real_amount), 0)) up_commission,
                       sum(decode(t.channel_type, 2, (t.draw_amount - t.real_amount), 4, (t.draw_amount - t.real_amount), 0)) down_commission,
                       sum(t.profits - t.refund_profits) profit
                           --sum(t.service_fee - t.refund_service_fee) plat_service_fee,
                           --sum((t.profits - t.refund_profits) -
                           --    (t.service_fee - t.refund_service_fee)) last_profit
                  from fd_report_commi_profit_daily t
                 group by trunc(t.snap_time, 'mm'),
                          t.company_id,
                          t.channel_no,
                          t.statistics_type) TAB1
          left join fd_report_service_fee f on f.channel_no =
                                               TAB1.channel_no
                                           and f.company_id =
                                               TAB1.company_id
                                           and f.report_month =
                                               TAB1.snap_time

          left join (select trunc(r.snap_time, 'mm') snap_time,
                           r.company_id,
                           r.channel_no,
                           sum((r.total_Face - r.refund_total_face) +
                               r.up_many_face) down_face
                      from fd_report_commi_profit_daily r
                     group by trunc(r.snap_time, 'mm'),
                              r.company_id,
                              r.channel_no) tf on tf.company_id =
                                                  TAB1.company_id
                                              and tf.channel_no =
                                                  TAB1.channel_no
                                              and tf.snap_time =
                                                  TAB1.snap_time) TAB2
 group by TAB2.snap_time, TAB2.company_id, TAB2.statistics_type
;

prompt
prompt Creating view FD_V_REPORT_SETTLE_SUMMARY
prompt ========================================
prompt
create or replace force view fd_account.fd_v_report_settle_summary as
select t.snap_time,
       t.company_id,
       t.channel_type,
       t.channel_no,
       t.account_id,
       t.channel_name,
       t.statistics_type,
       t.channel_source_system,
       sum(decode(t.business_type, 5, 1, 6, 1, 8, 1, 0) * t.total_unit / 1000) total_unit,
       sum(t.total_Face) total_Face,
       sum(t.refund_total_face) refund_total_face,
       sum(t.total_Face - t.refund_total_face) real_face,
       sum(t.up_many_face) up_many_face,
       sum((t.total_Face - t.refund_total_face) + t.up_many_face) real_Recharge_Face, --实际充值面值
       sum(t.draw_amount) draw_amount,
       sum(t.refund_draw_amount) refund_draw_amount,
       sum(t.draw_amount - t.refund_draw_amount) real_draw_amount, --实际扣款金额
       sum(t.up_many_amount) up_many_amount,
       sum((t.total_Face - t.refund_total_face + t.up_many_face) -
           (t.draw_amount - t.refund_draw_amount)) One_Way_Seat_profits, --实际单向座扣毛利
       sum(t.commission - t.refund_commission) end_commission, --上游后返佣金
       sum(((t.total_Face - t.refund_total_face + t.up_many_face) -
           (t.draw_amount - t.refund_draw_amount)) +
           (t.commission - t.refund_commission)) One_Way_profits, --上游单向毛利
       sum(t.service_fee - t.refund_service_fee) last_service_fee, --第三方平台应收手续费
       sum(((t.total_Face - t.refund_total_face + t.up_many_face) -
           (t.draw_amount - t.refund_draw_amount)) +
           (t.commission - t.refund_commission) -
           (t.service_fee - t.refund_service_fee)) last_profits
  from fd_report_commi_profit_daily t
 group by t.snap_time,
          t.company_id,
          t.channel_type,
          t.channel_no,
          t.account_id,
          t.channel_name,
          t.statistics_type,
          t.channel_source_system
;

prompt
prompt Creating view FD_V_REPORT_SUMMARY_MONTH
prompt =======================================
prompt
create or replace force view fd_account.fd_v_report_summary_month as
select TAB1.SNAP_TIME,
       TAB1.COMPANY_ID,
       TAB1.CHANNEL_TYPE,
       TAB1.CHANNEL_NO,
       TAB1.CHANNEL_NAME,
       TAB1.ACCOUNT_ID,
       TAB1.STATISTICS_TYPE,
       TAB1.TOTAL_UNIT,
       TAB1.TOTAL_FACE,
       TAB1.REFUND_TOTAL_FACE,
       TAB1.REAL_FACE,
       TAB1.UP_MANY_FACE,
       TAB1.REAL_RECHARGE_FACE,
       TAB1.DRAW_AMOUNT,
       TAB1.REFUND_DRAW_AMOUNT,
       TAB1.REAL_DRAW_AMOUNT,
       TAB1.UP_MANY_AMOUNT,
       TAB1.ONE_WAY_SEAT_PROFITS,
       TAB1.END_COMMISSION,
       TAB1.ONE_WAY_PROFITS,
       TAB1.channel_source_system,
       decode(tf.real_Recharge_Face,
              0,
              0,
              nvl(trunc(f.service_fee * TAB1.real_Recharge_Face / tf.real_Recharge_Face,2), 0)) LAST_SERVICE_FEE
  from (select trunc(t.snap_time, 'mm') snap_time,
               t.company_id,
               t.channel_type,
               t.channel_no,
               t.channel_name,
               t.account_id,
               t.statistics_type,
               t.channel_source_system,
               sum(decode(t.business_type, 5, 1, 6, 1, 8, 1, 0) *
                   t.total_unit / 1000) total_unit,
               sum(t.total_Face) total_Face,
               sum(t.refund_total_face) refund_total_face,
               sum(t.total_Face - t.refund_total_face) real_face,
               sum(t.up_many_face) up_many_face,
               sum((t.total_Face - t.refund_total_face) + t.up_many_face) real_Recharge_Face, --实际充值面值
               sum(t.draw_amount) draw_amount,
               sum(t.refund_draw_amount) refund_draw_amount,
               sum(t.draw_amount - t.refund_draw_amount) real_draw_amount, --实际扣款金额
               sum(t.up_many_amount) up_many_amount,
               sum((t.total_Face - t.refund_total_face + t.up_many_face) -
                   (t.draw_amount - t.refund_draw_amount)) One_Way_Seat_profits, --实际单向座扣毛利
               sum(t.commission - t.refund_commission) end_commission, --上游后返佣金
               sum(((t.total_Face - t.refund_total_face + t.up_many_face) -
                   (t.draw_amount - t.refund_draw_amount)) +
                   (t.commission - t.refund_commission)) One_Way_profits --上游单向毛利
          from fd_report_commi_profit_daily t
         group by trunc(t.snap_time, 'mm'),
                  t.company_id,
                  t.channel_type,
                  t.channel_no,
                  t.channel_name,
                  t.account_id,
                  t.statistics_type,
                  t.channel_source_system) TAB1
  left join fd_report_service_fee f on f.channel_no = TAB1.channel_no
                                   and f.company_id = TAB1.company_id
                                   and f.report_month = TAB1.snap_time
                                   and TAB1.channel_type = 2 --pkg_Channel_Type.down_channel
  left join (select trunc(r.snap_time, 'mm') snap_time,
                    r.company_id,
                    r.channel_type,
                    r.channel_no,
                    sum((r.total_Face - r.refund_total_face) + r.up_many_face) real_Recharge_Face
               from fd_report_commi_profit_daily r
              group by trunc(r.snap_time, 'mm'),
                       r.company_id,
                       r.channel_type,
                       r.channel_no) tf on tf.company_id = TAB1.company_id
                                       and tf.channel_type =
                                           TAB1.channel_type
                                       and tf.channel_no = TAB1.channel_no
                                       and tf.snap_time = TAB1.snap_time
 order by TAB1.snap_time desc,TAB1.company_id,TAB1.channel_no,TAB1.account_id,TAB1.statistics_type
;

prompt
prompt Creating view FD_V_REPORT_SYSTEM_CAP
prompt ====================================
prompt
create or replace force view fd_account.fd_v_report_system_cap as
select t.company_id,
       t.company_name,
       t.init_input_amount,
       nvl(b.balance, 0) borrow, ---运营投入
       nvl(d.balance, 0) deposit, ---押金账户
       nvl(bd.balance, 0) bond, ---保证金账户
       nvl(dbc.down_commi, 0) down_commission, ---下游未付佣金账户
       nvl(ubc.up_commi, 0) up_commission, ---上游未收佣金
       nvl(s.balance, 0) short_borrow, ---短期借债账户
       nvl(pu.balance, 0) profit_undraw, ---毛利未提账户
       nvl(sf.balance, 0) service_fee, ---汇款手续费账户
       nvl(rec.recv_balance, 0) recv_balance, ---结算收款余额
       nvl(dbc.down_balance, 0) down_balance, ---下游渠道余额
       nvl(ubc.up_balance, 0) up_balance, ---上游渠道余额
       nvl(bb.bank_balance, 0) bank_balance ---实体卡余额
  from fd_base_company_info t
  left join fd_base_company_account_cap b on t.company_id = b.company_id
                                         and b.account_type = 1 ---运营投入
                                         and b.status = 0
  left join fd_base_company_account_cap d on t.company_id = d.company_id
                                         and d.account_type = 2 ---押金账户
                                         and d.status = 0
  left join fd_base_company_account_cap bd on t.company_id = bd.company_id
                                          and bd.account_type = 3 ---保证金账户
                                          and bd.status = 0
  left join fd_base_company_account_cap s on t.company_id = s.company_id
                                         and s.account_type = 5 ---短期借债账户
                                         and s.status = 0
  left join fd_base_company_account_cap pu on t.company_id = pu.company_id
                                          and pu.account_type = 7 ---毛利未提账户
                                          and pu.status = 0
  left join fd_base_company_account_self sf on t.company_id = sf.company_id
                                           and sf.account_type = 1 ---汇款手续费账户
                                           and sf.status = 0
  left join (select ar.recv_company, sum(ar.balance) recv_balance
               from fd_base_company_account_recv ar
              group by ar.recv_company) rec on t.company_id =
                                               rec.recv_company ---结算余额
  left join (select dcl.company_id,
                    sum(da.inner_balance) down_balance,
                    sum(dcl.commi_balance) down_commi
               from fd_base_down_account_map am
              inner join fd_base_down_account da on am.account_id =
                                                    da.account_id
              inner join fd_base_down_channel dcl on am.channel_no =
                                                     dcl.channel_no
              where da.status = 0
                and dcl.status = 0
              group by dcl.company_id) dbc on t.company_id = dbc.company_id ---下游渠道余额
  left join (select buc.company_id,
                    sum(ua.inner_balance) up_balance,
                    sum(buc.commi_balance) up_commi
               from fd_base_up_account_map um
              inner join fd_base_up_account ua on um.account_id =
                                                  ua.account_id
              inner join fd_base_up_channel buc on um.channel_no =
                                                   buc.channel_no
              where ua.status = 0
                and buc.status = 0
              group by buc.company_id) ubc on t.company_id = ubc.company_id ---上有渠道余额
  left join (select bai.company_id, sum(bai.balance) bank_balance
               from fd_bank_account_info bai
              group by bai.company_id) bb on t.company_id = bb.company_id ---实体卡账户余额
;

prompt
prompt Creating view FD_V_REPORT_TRADE_SUMMARY
prompt =======================================
prompt
create or replace force view fd_account.fd_v_report_trade_summary as
select t.snap_time,
       t.company_id,
       t.channel_type,
       t.channel_no,
       t.account_id,
       --decode(t.bill_type,2,0,t.business_type) business_type,
       t.statistics_type,
       decode(t.business_type,5,1,6,1,8,1,0)*t.total_unit/1000 total_unit,
       t.total_face,
       t.refund_total_face,
       (t.total_face-t.refund_total_face) real_face,
       t.up_many_face,
       t.total_face face_amount,
       t.draw_amount,
       (t.total_face - t.draw_amount) fist_commission,
       t.refund_total_face refund_face_amount,
       t.refund_draw_amount,
       (t.refund_total_face - t.refund_draw_amount) refund_fist_commission,
       (t.draw_amount - t.refund_draw_amount) last_draw_amount,
       ((t.total_face - t.draw_amount) -
       (t.refund_total_face - t.refund_draw_amount)) last_first_commission,
       (t.commission - t.refund_commission) end_commission,
       ((t.total_face - t.draw_amount) -
       (t.refund_total_face - t.refund_draw_amount) +
       (t.commission - t.refund_commission)) total_commission,
       (t.service_fee - t.refund_service_fee) last_service_fee,
       ((t.profits - t.refund_profits) -
       (t.service_fee - t.refund_service_fee)) last_profits,
       (t.total_face - t.refund_total_face) last_face_amount
  from fd_report_commi_profit_daily t
;

prompt
prompt Creating view FD_V_REPORT_UPCHANNEL_DAILY
prompt =========================================
prompt
create or replace force view fd_account.fd_v_report_upchannel_daily as
select tab.record_date,
       tab.channel_classif,
       tab.company_id,
       tab.channel_status,
       count(distinct(tab.channel_no)) all_up ,
       sum(tab.balance) all_amount,
       count(distinct(case when tab.balance>0 then tab.channel_no else null end) ) up_income,
       sum(case when tab.balance>0 then tab.balance else 0 end) up_income_amount,
       count(distinct(case when tab.balance<0 then tab.channel_no else null end) )  up_pay,
       sum(case when tab.balance<0 then tab.balance else 0 end) up_pay_amount
     from(select t.record_date,
       t.company_id,
       t.balance,
       t.channel_status,
       t.channel_no,
       decode(buc.capital_class, 3, 1, 4, 2,1,1,2,2,0) channel_classif
 from (select t1.record_date,
                    t1.account_id,
                    t1.company_id,
                    max(nvl(t1.balance, 0)) balance,
                    t1.channel_status,
                    t1.channel_no
               from fd_report_zero_balance t1
              where t1.account_type = 1
              group by t1.record_date,
                       t1.account_id,
                       t1.channel_status,
                       t1.company_id,
                       t1.channel_no) t --用于排除同一账户多次累加的情况
    left join fd_base_up_channel buc on buc.channel_no=t.channel_no --关联上游渠道用于区分各项业务
    left join (select d.channel_no,
                    d.snap_time,
                    sum(d.draw_amount - d.refund_draw_amount) draw_amount
               from fd_report_commi_profit_daily d
               where d.channel_type=1
              group by d.channel_no, d.snap_time) dct --获取真实的上游渠道日交易量
    on t.channel_no =dct.channel_no and t.record_date = (dct.snap_time - 1) --关联交易量用于排除真实交易量为0的渠道
    where nvl(t.balance,0)!=0 and nvl(dct.draw_amount,0)!=0 ) tab  --排除交易量为0,同时余额为0的渠道
      group by tab.record_date,
               tab.channel_classif,
               tab.company_id,
               tab.channel_status
     order by tab.record_date desc,tab.channel_status asc,tab.channel_classif asc
;

prompt
prompt Creating view NEW_V_CHANNEL_RUN_DATE
prompt ====================================
prompt
create or replace force view fd_account.new_v_channel_run_date as
select t.company_id,
       t.channel_no,
       t.channel_type,
       t.account_id,
       case
         when max(t.snap_time) > trunc(sysdate - 3) then
          0
         when max(t.snap_time) > trunc(sysdate - 7) then
          1
         when max(t.snap_time) > add_months(trunc(sysdate), -1) then
          2
         when max(t.snap_time) > add_months(trunc(sysdate), -2) then
          3
         when max(t.snap_time) > add_months(trunc(sysdate), -3) then
          4
         when max(t.snap_time) > add_months(trunc(sysdate), -6) then
          5
         when max(t.snap_time) > add_months(trunc(sysdate), -12) then
          6
         else
          7
       end trade_range
  from FD_REPORT_COMMI_PROFIT_DAILY t
 group by t.company_id, t.channel_no, t.channel_type,t.account_id;

prompt
prompt Creating view NEW_V_MONTH_ADD
prompt =============================
prompt
create or replace force view fd_account.new_v_month_add as
select trunc(t.snap_time, 'mm') snap_month,
       t.account_type,
       t.channel_no,
       t.account_id,
       sum(t.add_amount - t.minus_amount) sum_add_amount,
       sum(t.add_amount) add_amount,
       sum(t.minus_amount) minus_amount
  from rpt_merge_report_trade_add t
 group by trunc(t.snap_time, 'mm'),
          t.account_type,
          t.channel_no,
          t.account_id;

prompt
prompt Creating view NEW_V_MONTH_DRAW
prompt ==============================
prompt
create or replace force view fd_account.new_v_month_draw as
select trunc(t.snap_time, 'mm') snap_month,
       t.company_id,
       t.channel_type,
       t.channel_no,
       t.account_id,
       sum(t.draw_amount - t.refund_draw_amount) draw_amount
  from fd_report_commi_profit_daily t
 group by trunc(t.snap_time, 'mm'),
          t.company_id,
          t.channel_type,
          t.channel_no,
          t.account_id;

prompt
prompt Creating view NEW_V_MONTH_START_ZBALANCE
prompt ========================================
prompt
create or replace force view fd_account.new_v_month_start_zbalance as
select (t.record_date + 1) record_date,
       t.company_id,
       t.account_type,
       t.channel_no,
       t.channel_name,
       t.account_id,
       t.account_name,
       t.channel_status,
       t.account_status,
       t.balance,
       t.query_balance,
       t.warn_balance
  from fd_report_zero_balance t
 where t.record_date = (trunc(t.record_date + 1, 'mm') - 1)
union
select add_months(trunc(sysdate, 'mm'), 1) record_date,
       d.company_id,
       d.account_type,
       d.channel_no,
       d.channel_name,
       d.account_id,
       d.account_name,
       d.channel_status,
       d.account_status,
       d.balance,
       d.query_balance,
       d.warn_balance
  from fd_report_zero_balance d
 where d.record_date = trunc(sysdate - 1)
   and d.record_date != (trunc(sysdate, 'mm') - 1);

prompt
prompt Creating view ZREPORT_UP_FUND_JOIN_HS
prompt =====================================
prompt
create or replace force view fd_account.zreport_up_fund_join_hs as
select t.record_id,
       t.fd_order_id,
       t.trade_order_no,
       t.order_source,
       t.trade_delivery_no,
       t.down_channel_no,
       t.down_account_id,
       t.down_company_id,
       t.up_channel_no,
       t.up_account_id,
       t.up_company_id,
       t.down_draw_unit,
       t.down_draw_face,
       t.down_draw_amount,
       t.down_real_amount,
       t.up_draw_unit,
       t.up_draw_face,
       t.up_draw_amount,
       t.up_real_amount,
       t.change_time,
       t.change_type,
       t.bill_type,
       t.business_type,
       t.carrier_no,
       t.province_no,
       t.balance,
       t.profits,
       t.down_commission,
       t.up_commission,
       t.settle_amount,
       t.settle_batch_id,
       t.settle_status,
       t.settle_time,
       t.memo,
       t.order_time
  from fd_trade_up_fund t
 where t.change_time >= (add_months(trunc(sysdate), -1) - 3)
   and t.change_time <= (add_months(trunc(sysdate), -1) + 3)
union
select h.record_id,
       h.fd_order_id,
       h.trade_order_no,
       h.order_source,
       h.trade_delivery_no,
       h.down_channel_no,
       h.down_account_id,
       h.down_company_id,
       h.up_channel_no,
       h.up_account_id,
       h.up_company_id,
       h.down_draw_unit,
       h.down_draw_face,
       h.down_draw_amount,
       h.down_real_amount,
       h.up_draw_unit,
       h.up_draw_face,
       h.up_draw_amount,
       h.up_real_amount,
       h.change_time,
       h.change_type,
       h.bill_type,
       h.business_type,
       h.carrier_no,
       h.province_no,
       h.balance,
       h.profits,
       h.down_commission,
       h.up_commission,
       h.settle_amount,
       h.settle_batch_id,
       h.settle_status,
       h.settle_time,
       h.memo,
       h.order_time
  from fd_trade_up_fund_hs h
 where h.change_time >= (add_months(trunc(sysdate), -1) - 3)
   and h.change_time <= (add_months(trunc(sysdate), -1) + 3);

prompt
prompt 