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
    [ODXmlConfig(EntityConfigType.Xml, "", "~/config/econfig/QyTradeDownManual.xml")]
    public class MQyTradeDownManual : EntityBase
    {

    ///<summary>
    ///编号
    ///</summary>
    public int? RecordId { get; set; }

    ///<summary>
    ///渠道编号
    ///</summary>
    public string ChannelNo { get; set; }

    ///<summary>
    ///账户编号
    ///</summary>
    public decimal? AccountId { get; set; }

    ///<summary>
    ///红冲编号
    ///</summary>
    public int? AdjustId { get; set; }

    ///<summary>
    ///是否红冲过
    ///</summary>
    public int? HasAdjust { get; set; }

    ///<summary>
    ///变动类型
    ///</summary>
    public int? AddType { get; set; }

    ///<summary>
    ///变动金额
    ///</summary>
    public int? ChangeAmount { get; set; }

    ///<summary>
    ///交易平账真实金额
    ///</summary>
    public int? RealAmount { get; set; }

    ///<summary>
    ///变动时间
    ///</summary>
    public DateTime? ChangeTime { get; set; }

    ///<summary>
    ///余额
    ///</summary>
    public int? Balance { get; set; }

    ///<summary>
    ///创建人
    ///</summary>
    public string CreateUser { get; set; }

    ///<summary>
    ///银行资金变动编号（红冲是使用）
    ///</summary>
    public int? BankFundId { get; set; }

    ///<summary>
    ///备注
    ///</summary>
    public string Memo { get; set; }

    ///<summary>
    ///外部加款记录编号
    ///</summary>
    public string ExtRecordNo { get; set; }

    ///<summary>
    ///收取手续费的记录编号
    ///</summary>
    public int? HandlingFeeId { get; set; }

    }
}