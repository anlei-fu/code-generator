using System;
using System.Collections.Generic;
using System.Text;
using Lib4Net.Comm;
using Lib4Net.ORM;
using Lib4Net.DB;
using @project.name.Interfaces.DBAccess;
using @project.name.Entity;



namespace @project.name.DBAccess
{
      ///<summary>
      ///关于@table.chineseName的数据操作对象
      ///</summary>
    public class @table.nameDataAccess:DataAccessObjects<M@table.name>,I@table.nameDataAccess
    {
    
    }
}