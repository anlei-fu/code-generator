using System;
using System.Collections.Generic;
using System.Text;
using Lib4Net.Comm;
using Lib4Net.ORM;


namespace QXFC.Entity
{

    ///<summary>
    ///实体：下游渠道表
    ///</summary>
    [ODXmlConfig(EntityConfigType.Xml, "", "~/config/econfig/@table.name.xml")]
    public class @table.name : EntityBase
    {
      @field

      @property
    }
}