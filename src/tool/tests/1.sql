
          select  t.*,
                 decode(t.Active_Status,'0','已激活','10','无需','90','未激活') activestatusname,
                 decode(t.first_charge_status,'0','已首充','10','无需','90','未首充') chargestatusname
                    from (SELECT RID
                            FROM (SELECT R.RID, ROWNUM LINENUM
                                    FROM (SELECT t.rowid RID
                                          FROM  FC_ACTIVE_RECORD t
                                            WHERE 
                                            1=1
                                            
                                            
                                            
                                            
                                            
                                            AND t.CREATE_TIME >= to_date(:p1,'YYYY-MM-DD')
                                            AND t.CREATE_TIME < to_date(:p2,'YYYY-MM-DD')
                                           ORDER BY t.Create_Time DESC) R
                                   WHERE ROWNUM <= 10 * 3)
                           WHERE LINENUM > 10 * (3 - 1)) tab
                   inner join FC_ACTIVE_RECORD t on tab.rid = t.rowid