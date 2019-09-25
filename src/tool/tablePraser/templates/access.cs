using System;
using System.Collections.Generic;
using System.Text;
using Lib4Net.Comm;
using Lib4Net.ORM;
using Lib4Net.DB;
using QXFC.Interfaces.DBAccess;
using QXFC.Entity;



namespace QXFC.DBAccess
{

      ///<summary>
      ///关于的数据操作对象
      ///</summary>
    public class @TableNameDataAccess:DataAccessObjects<@TableName>,I@TableNameDataAccess
    {
    
    }
}