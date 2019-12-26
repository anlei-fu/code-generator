using System;
using System.Collections.Generic;
using System.Text;
using Lib4Net.Comm;
using Lib4Net.ORM;

namespace SettleAccount.Entity
{
    ///<summary>
    /// undefined
    ///</summary>
    [ODXmlConfig(EntityConfigType.Xml, "", "~/config/econfig/QyBaseDownAccount.xml")]
    public class MQyBaseDownAccount : EntityBase
    {

    ///<summary>
    ///账户编号
    ///</summary>
    public int? AccountId { get; set; }

    ///<summary>
    ///账号名称
    ///</summary>
    public string AccountName { get; set; }

    ///<summary>
    ///查询余额
    ///</summary>
    public int? QueryBalance { get; set; }

    ///<summary>
    ///理论余额
    ///</summary>
    public int? InnerBalance { get; set; }

    ///<summary>
    ///授信金额
    ///</summary>
    public int? CreditMoney { get; set; }

    ///<summary>
    ///创建人
    ///</summary>
    public string CreatedUser { get; set; }

    ///<summary>
    ///创建时间
    ///</summary>
    public DateTime? CreatedTime { get; set; }

    ///<summary>
    ///最后更新人
    ///</summary>
    public string LastEditUser { get; set; }

    ///<summary>
    ///最后更新时间
    ///</summary>
    public DateTime? LastEditTime { get; set; }

    }
}