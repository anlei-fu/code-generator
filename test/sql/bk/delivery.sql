create or replace procedure sp_warn_delivery_failed as
  ----------------------------------------------------------------------
  -- 主要功能: 发货失败 中稍后重试 告警
  -- 10分钟内超过10次 每分钟检查一次
  -- 创建人: yuhao
  -- 创建时间: 2021-01-14
  ----------------------------------------------------------------------
  -- 警告阈值
  l_value number := 10;
  --警告模型
  l_title         varchar2(100);
  l_content       varchar2(1000);
  l_proc_name     varchar2(32) := 'sp_warn_delivery_failed';
  l_key_words     varchar2(32);
  l_level         number;
  l_lastwarn_time date;
  l_check_time    date := sysdate - 1 / 24 / 60;
  l_status        boolean;

begin
  select t.warning_level, t.key_words, t.last_warn_time, t.title
    into l_level, l_key_words, l_lastwarn_time, l_title
    from dm_warn_config t
   where t.prc_name = l_proc_name;

  if (l_check_time <= l_lastwarn_time) then
    return;
  end if;

  -- 发货异常告警
  for warn in (select uc.channel_name, t.result_msg, count(1) total_count
                 from dm_order_bind t
                 left join dm_up_channel uc
                   on t.up_channel_no = uc.channel_no
                where t.create_time between sysdate - 10 / 24 / 60 and
                      sysdate
                  and t.bind_status = 90
                  and (t.result_msg like '%稍后再试%' or
                      t.result_msg like '%稍后试试%' or
                      t.result_msg like '%活动火爆%' or
                       t.result_msg like '%程序猿哥哥%' or
                      t.result_msg like '%JSON文本为空%')
                group by uc.channel_name, t.result_msg) loop
    if warn.total_count > l_value then
      l_content := '上游渠道: ' || warn.channel_name || '10分钟内失败次数:' ||
                   warn.total_count || ',内容: ' || warn.result_msg;
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
    sp_system_log_add('sp_warn_delivery_failed',
                      1,
                      substr(to_char(sqlerrm), 0, 1000));
    return;
end;
