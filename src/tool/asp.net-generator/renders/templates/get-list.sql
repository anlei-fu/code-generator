          SELECT 
@columns      
          FROM 
            (SELECT RID
                  FROM (SELECT R.RID, ROWNUM LINENUM
                          FROM (SELECT t.rowid RID
                                 FROM  @name t
                                 WHERE 
@conditions
                                   ) R
                           WHERE ROWNUM <= { :PS} * { :PI})
                  WHERE LINENUM > { :PS} * ({ :PI} - 1)) tab
           INNER JOIN @name t on tab.rid = t.rowid
@joins
@orderBy