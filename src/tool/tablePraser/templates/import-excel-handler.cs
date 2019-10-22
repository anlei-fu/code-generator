        public IResult ImportExcel(DataTable dt, string user)
        {
            StringBuilder sb = new StringBuilder();
            StringBuilder sbstr = new StringBuilder();
            using (IDataAccessProvider provider = dbAccess.CreateDbProvider())
            {
                provider.BeginTransaction();
                try
                {
                    for (int i = 0; i < dt.Rows.Count; i++)
                    {
                        var entity = new @table.name();
@resolver

                        var result = dbAccess.CreateNew(entity);

                        if (!result)
                        {
                            sb.AppendFormat("添加失败，第%d行", i);
                        }
                    }

                    if (sb.Length > 0)
                    {
                        provider.Rollback();
                        return new Result(false, sb.ToString());
                    }
                    else
                    {
                        provider.Commit();
                        return new Result(true, string.Format("一共导入了 {0} 条数据,  {1} ,{2}", dt.Rows.Count, sbstr, sb));
                    }
                }
                catch (Exception ex)
                {
                    provider.Rollback();
                    return new Result(false, ex.Message);
                }
            }
        }