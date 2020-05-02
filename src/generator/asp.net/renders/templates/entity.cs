using System;
using System.Collections.Generic;
using System.Text;
using Lib4Net.Comm;
using Lib4Net.ORM;

namespace @project.Entity
{
    ///<summary>
    /// @description
    ///</summary>
    [ODXmlConfig(EntityConfigType.Xml, "", "~/config/econfig/@name.xml")]
    public class @prefix@name : EntityBase
    {

@content
    }
}