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
    [ODXmlConfig(EntityConfigType.Xml, "", "~/config/econfig/QyTradeDownFund.xml")]
    public class MQyTradeDownFund : EntityBase
    {

    ///<summary>
    ///下游变动编号
    ///</summary>
    public int? RecordId { get; set; }

    ///<summary>
    ///记账系统订单号
    ///</summary>
    public int? QyOrderId { get; set; }

    ///<summary>
    ///交易系统订单号(激活编号)
    ///</summary>
    public string TradeOrderNo { get; set; }

    ///<summary>
    ///扩展订单号交易(权益卡号)
    ///</summary>
    public string ExtOrderNo { get; set; }

    ///<summary>
    ///扩展号(合同编号)
    ///</summary>
    public string ExtContractNo { get; set; }

    ///<summary>
    ///权益包名称
    ///</summary>
    public string ProductName { get; set; }

    ///<summary>
    ///订单来源（系统编号）
    ///</summary>
    public int? OrderSource { get; set; }

    ///<summary>
    ///下游渠道编号
    ///</summary>
    public string DownChannelNo { get; set; }

    ///<summary>
    ///下游支付账号
    ///</summary>
    public int? DownAccountId { get; set; }

    ///<summary>
    ///变动创建时间
    ///</summary>
    public DateTime? ChangeTime { get; set; }

    ///<summary>
    ///订单日期(激活时间)
    ///</summary>
    public DateTime? OrderTime { get; set; }

    ///<summary>
    ///变更类型
    ///</summary>
    public int? ChangeType { get; set; }

    ///<summary>
    ///订单金额
    ///</summary>
    public int? OrderAmount { get; set; }

    ///<summary>
    ///变动金额(销售金额)
    ///</summary>
    public int? ChangeAmount { get; set; }

    ///<summary>
    ///订单面值(权益包价值)
    ///</summary>
    public int? OrderFace { get; set; }

    ///<summary>
    ///变动面值
    ///</summary>
    public int? ChangeFace { get; set; }

    ///<summary>
    ///账户余额
    ///</summary>
    public int? Balance { get; set; }

    ///<summary>
    ///备注
    ///</summary>
    public string Memo { get; set; }

    }
}