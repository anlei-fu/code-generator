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
    [ODXmlConfig(EntityConfigType.Xml, "", "~/config/econfig/FcPhoneCharge.xml")]
    public class MFcPhoneCharge : EntityBase
    {
                 private decimal _id;
                 private string _phone;
                 private decimal _face;
                 private string _remark;
                 private DateTime _createTime;
                 private string _creator;
                 private decimal _status;
                 private string _orderNo;
                 private DateTime _chargeTime;
                 private string _resultMsg;
                 private DateTime _activateTime;
 

                public decimal Id { get {return _id ;} set {_id=value;}}
                public string Phone { get {return _phone ;} set {_phone=value;}}
                public decimal Face { get {return _face ;} set {_face=value;}}
                public string Remark { get {return _remark ;} set {_remark=value;}}
                public DateTime CreateTime { get {return _createTime ;} set {_createTime=value;}}
                public string Creator { get {return _creator ;} set {_creator=value;}}
                public decimal Status { get {return _status ;} set {_status=value;}}
                public string OrderNo { get {return _orderNo ;} set {_orderNo=value;}}
                public DateTime ChargeTime { get {return _chargeTime ;} set {_chargeTime=value;}}
                public string ResultMsg { get {return _resultMsg ;} set {_resultMsg=value;}}
                public DateTime ActivateTime { get {return _activateTime ;} set {_activateTime=value;}}

    }
}