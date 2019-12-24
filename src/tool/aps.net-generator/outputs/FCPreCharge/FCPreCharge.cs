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
        private string _taskId;
        private string _phone;
        private string _idno;
        private int? _activeStatus;
        private DateTime? _activeTime;
        private int? _firstChargeStatus;
        private DateTime? _firstChargeTime;
        private int? _dealStatus;
        private string _dealMsg;
        private DateTime? _createTime;


        ///<summary>
        ///
        ///</summary>
        public int? Id { get { return _id; } set { _id = value; } }

        ///<summary>
        ///
        ///</summary>
        public string TaskId { get { return _taskId; } set { _taskId = value; } }

        ///<summary>
        ///
        ///</summary>
        public string Phone { get { return _phone; } set { _phone = value; } }

        ///<summary>
        ///
        ///</summary>
        public string Idno { get { return _idno; } set { _idno = value; } }

        ///<summary>
        ///
        ///</summary>
        public int? ActiveStatus { get { return _activeStatus; } set { _activeStatus = value; } }

        ///<summary>
        ///
        ///</summary>
        public DateTime? ActiveTime { get { return _activeTime; } set { _activeTime = value; } }

        ///<summary>
        ///
        ///</summary>
        public int? FirstChargeStatus { get { return _firstChargeStatus; } set { _firstChargeStatus = value; } }

        ///<summary>
        ///
        ///</summary>
        public DateTime? FirstChargeTime { get { return _firstChargeTime; } set { _firstChargeTime = value; } }

        ///<summary>
        ///
        ///</summary>
        public int? DealStatus { get { return _dealStatus; } set { _dealStatus = value; } }

        ///<summary>
        ///
        ///</summary>
        public string DealMsg { get { return _dealMsg; } set { _dealMsg = value; } }

        ///<summary>
        ///
        ///</summary>
        public DateTime? CreateTime { get { return _createTime; } set { _createTime = value; } }

    }
}