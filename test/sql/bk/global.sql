create or replace procedure sp_warn_order_global as
  ----------------------------------------------------------------------
  -- 主要功能: 全局监控：信息流【白天：7点-24点】10分钟【晚上：0点-7点】30分钟未产生订单、
  -- 订单失败率大于【45%】
  -- 创建人: yuhao
  -- 创建时间: 2020-09-04
  ----------------------------------------------------------------------
  -- 警告阈值
  l_value       number := 50;
  l_vcode_value number := 30;
  --警告模型
  l_title            varchar2(100);
  l_content          varchar2(1000);
  l_proc_name        varchar2(32) := 'sp_warn_order_global';
  l_key_words        varchar2(32);
  l_level            number;
  l_lastwarn_time    date;
  l_check_time_10    date := sysdate - 10 / 24 / 60;
  l_check_time_30    date := sysdate - 30 / 24 / 60;
  l_check_time       date;
  l_time             number;
  l_status           boolean;
  l_vcode_count      number;
  l_vcode_fail_count number;
  l_rate             number;--成功率

begin
  select t.warning_level, t.key_words, t.last_warn_time, t.title
    into l_level, l_key_words, l_lastwarn_time, l_title
    from dm_warn_config t
   where t.prc_name = l_proc_name;

  if (0 <= to_char(sysdate, 'HH24') and to_char(sysdate, 'HH24') <= 7) then
    l_check_time := l_check_time_30;
    l_time       := 40;
  elsif (7 < to_char(sysdate, 'HH24') and to_char(sysdate, 'HH24') <= 24) then
    l_check_time := l_check_time_10;
    l_time       := 10;
  end if;

  if (l_check_time <= l_lastwarn_time) then
    return;
  end if;

  -- 验证码异常告警
  select count(1),
         nvl(sum(case
                   when t.send_status = 90 then
                    1
                   else
                    0
                 end),
             0)
    into l_vcode_count, l_vcode_fail_count
    from dm_order_vcode t
   where t.create_time > l_check_time;
  if l_vcode_count != 0 and
     100 * round(l_vcode_fail_count / l_vcode_count, 2) > l_vcode_value then
    l_content := '下发验证码失败率大于' || l_vcode_value || '%，失败率：' ||
                 100 * round(l_vcode_fail_count / l_vcode_count, 2) || '%';
    l_status  := f_warn_insert(l_title, l_content, l_key_words, l_level);
  end if;

  -- 业务类型错误告警
  for warn in (select sd.name,
                      nvl(d.total_count, 0) totalCount,
                      nvl(d.fail_count, 0) failCount,
                      nvl(n.count, 0) count
                 from dm_system_dictionary sd
                 left join (select count(1) total_count,
                                  nvl(sum(case
                                            when t.order_status = 90 then
                                             1
                                            else
                                             0
                                          end),
                                      0) fail_count,
                                  t.business_type type
                             from dm_order_main t
                            where t.create_time >= l_check_time
                            group by t.business_type) d
                   on d.type = sd.value
                 left join (select count(1) count, t.business_type type
                             from dm_order_main t
                            where t.create_time >= sysdate - 1
                            group by t.business_type) n
                   on n.type = sd.value
                where sd.type = 'BusinessType'
                  and sd.value <> 0
                  and nvl(n.count, 0) > 0) loop
    if warn.totalCount = 0 then
      l_content := '信息流业务类型：' || warn.name || '，' || l_time || '分钟内未产生订单';
    elsif(100 * round(warn.failCount / warn.totalCount, 2) > l_value and warn.totalCount>=15 ) then
      l_content := '信息流业务类型：' || warn.name || '，' || l_time || '分钟内订单失败率大于' ||
                   l_value || '%，总订单数：' || warn.totalCount || '，总失败数：' ||
                   warn.failCount || '，失败率：' ||
                   100 * round(warn.failCount / warn.totalCount, 4) || '%';
    end if;
    if l_content is not null then
      l_status  := f_warn_insert(l_title, l_content, l_key_words, l_level);
      l_content := '';
    end if;
  end loop;

  --更新最近报警时间
  update dm_warn_config c
     set c.last_warn_time = sysdate
   where c.prc_name = l_proc_name;
  commit;

exception
  when others then
    rollback;
    sp_system_log_add('sp_warn_order_global',
                      1,
                      substr(to_char(sqlerrm), 0, 1000));
    return;
end;
