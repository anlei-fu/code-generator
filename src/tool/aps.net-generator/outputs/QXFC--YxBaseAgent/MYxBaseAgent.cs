using System;
using System.Collections.Generic;
using System.Text;
using Lib4Net.Comm;
using Lib4Net.ORM;

namespace QXFC.Entity
{
    ///<summary>
    /// 
    ///</summary>
    [ODXmlConfig(EntityConfigType.Xml, "", "~/config/econfig/YxBaseAgent.xml")]
    public class MYxBaseAgent : EntityBase
    {

    ///<summary>
    ///代理人编号
    ///</summary>
    public string AgentId { get; set; }

    ///<summary>
    ///代理人名称
    ///</summary>
    public string AgentName { get; set; }

    ///<summary>
    ///代理人类型0
    ///</summary>
    public int? AgentType { get; set; }

    ///<summary>
    ///身份证/纳税识别号
    ///</summary>
    public string CertificateNo { get; set; }

    ///<summary>
    ///手机号码
    ///</summary>
    public string Mobile { get; set; }

    ///<summary>
    ///省份
    ///</summary>
    public string ProvinceNo { get; set; }

    ///<summary>
    ///公司性质1
    ///</summary>
    public int? CompanyNature { get; set; }

    ///<summary>
    ///公司编号
    ///</summary>
    public int? CompanyId { get; set; }

    ///<summary>
    ///纳税人规模1
    ///</summary>
    public int? TaxpayerSize { get; set; }

    ///<summary>
    ///余额
    ///</summary>
    public int? Balance { get; set; }

    ///<summary>
    ///状态
    ///</summary>
    public int? Status { get; set; }

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

    ///<summary>
    ///下游渠道
    ///</summary>
    public string DownChannelNo { get; set; }

    ///<summary>
    ///交易系统代理人编号
    ///</summary>
    public string OutAgentId { get; set; }

    ///<summary>
    ///0
    ///</summary>
    public int? GroupAgent { get; set; }

    ///<summary>
    ///组合数量
    ///</summary>
    public int? GroupCount { get; set; }

    }
}