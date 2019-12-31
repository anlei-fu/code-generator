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
    [ODXmlConfig(EntityConfigType.Xml, "", "~/config/econfig/QyBaseDownChannel.xml")]
    public class MQyBaseDownChannel : EntityBase
    {

    ///<summary>
    ///渠道编号
    ///</summary>
    public int? ChannelNo { get; set; }

    ///<summary>
    ///渠道名称
    ///</summary>
    public int? ChannelName { get; set; }

    ///<summary>
    ///所属公司
    ///</summary>
    public int? CompanyId { get; set; }

    ///<summary>
    ///所属系统编号
    ///</summary>
    public int? SourceSystemId { get; set; }

    ///<summary>
    ///状态
    ///</summary>
    public int? Status { get; set; }

    ///<summary>
    ///佣金余额
    ///</summary>
    public int? CommiBalance { get; set; }

    ///<summary>
    ///报警余额
    ///</summary>
    public int? WarnBalance { get; set; }

    ///<summary>
    ///下游账户id
    ///</summary>
    public int? AccountId { get; set; }

    ///<summary>
    ///创建人
    ///</summary>
    public int? CreatedUser { get; set; }

    ///<summary>
    ///创建时间
    ///</summary>
    public int? CreatedTime { get; set; }

    ///<summary>
    ///最后更新人
    ///</summary>
    public int? LastEditUser { get; set; }

    ///<summary>
    ///最后更新时间
    ///</summary>
    public int? LastEditTime { get; set; }

    }
}