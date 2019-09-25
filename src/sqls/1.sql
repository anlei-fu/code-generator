/**
* @Description
*@Param { number} v_record_id
*@Param { varchar2} v_create_user
*@Param { varchar2} v_memo
*@Author
*@Date 1569300917032
*/

select t.*，
                 t1.name StatusName,
                 t2.name RuleTypeName,
                 t3.name RuleConditionName
                 from (
                      select RID 
                      from (
                              select R.RID,ROWNUM LINENUM 
                              from (
                                    select t.rowid RID
                                    from Dm_Term_Product_Rule t
                                    where 1=1
                                    order by t.create_time desc
                                  ) R where ROWNUM <= {:PS} * {:PI}
                            )where LINENUM > {:PS} * ({:PI} -1)
                    )TAB1
                  inner join Dm_Term_Product_Rule t  on t.rowid=TAB1.RID
                  
                   left join DM_SYSTEM_DICTIONARY t1 on t.status = t1.value and t1.type = 'Status'
                   left join DM_SYSTEM_DICTIONARY t2 on t.RuleType = t1.value and t1.type = 'RuleType'
                   left join DM_SYSTEM_DICTIONARY t3 on t.RuleCondition= t1.value and t1.type = 'RuleCondition'
                   left join DM_TERM_INFO  t4  on t.TermNo=t4.TermNo
                   left join DM_TERM_PRODUCT t5 on t.ProductNo=t5.ProductNo
                   
                   where 
                        1=1
                       {&@t5.ProductName} {&@t4.TermName}
                   
                  order by t.create_time desc