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
    [ODXmlConfig(EntityConfigType.Xml, "", "~/config/econfig/FCPreCharge.xml")]
    public class FCPreCharge : EntityBase
    {
        private int? _id;
        private string _phone;
        private int? _preFace;
        private DateTime? _preChargeTime;
        private int? _preChargeStatus;
        private int? _chargeFace;
        private DateTime? _chargeStartTime;
        private DateTime? _chargeEndTime;
        private int? _limitCntr;
        private int? _chargeCntr;
        private int? _chargeStatus;
        private string _creator;
        private DateTime? _createTime;
        private string _hkOrderNo;
        private DateTime? _nextTime;


        ///<summary>
        ///
        ///</summary>
        public int? Id { get { return _id; } set { _id = value; } }

        ///<summary>
        ///
        ///</summary>
        public string Phone { get { return _phone; } set { _phone = value; } }

        ///<summary>
        ///预存面值
        ///</summary>
        public int? PreFace { get { return _preFace; } set { _preFace = value; } }

        ///<summary>
        ///预存充值时间
        ///</summary>
        public DateTime? PreChargeTime { get { return _preChargeTime; } set { _preChargeTime = value; } }

        ///<summary>
        ///预存状态
        ///</summary>
        public int? PreChargeStatus { get { return _preChargeStatus; } set { _preChargeStatus = value; } }

        ///<summary>
        ///每月充值面值
        ///</summary>
        public int? ChargeFace { get { return _chargeFace; } set { _chargeFace = value; } }

        ///<summary>
        ///开始时间
        ///</summary>
        public DateTime? ChargeStartTime { get { return _chargeStartTime; } set { _chargeStartTime = value; } }

        ///<summary>
        ///结束时间
        ///</summary>
        public DateTime? ChargeEndTime { get { return _chargeEndTime; } set { _chargeEndTime = value; } }

        ///<summary>
        ///充值次数
        ///</summary>
        public int? LimitCntr { get { return _limitCntr; } set { _limitCntr = value; } }

        ///<summary>
        ///以充值次数
        ///</summary>
        public int? ChargeCntr { get { return _chargeCntr; } set { _chargeCntr = value; } }

        ///<summary>
        ///充值状态
        ///</summary>
        public int? ChargeStatus { get { return _chargeStatus; } set { _chargeStatus = value; } }

        ///<summary>
        ///
        ///</summary>
        public string Creator { get { return _creator; } set { _creator = value; } }

        ///<summary>
        ///
        ///</summary>
        public DateTime? CreateTime { get { return _createTime; } set { _createTime = value; } }

        ///<summary>
        ///号卡订单号
        ///</summary>
        public string HkOrderNo { get { return _hkOrderNo; } set { _hkOrderNo = value; } }

        ///<summary>
        ///
        ///</summary>
        public DateTime? NextTime { get { return _nextTime; } set { _nextTime = value; } }

    }
}