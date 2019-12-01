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
    [ODXmlConfig(EntityConfigType.Xml, "", "~/config/econfig/FCLimtIdInfo.xml")]
    public class FCLimtIdInfo : EntityBase
    {
        private int? _id;
        private string _idName;
        private string _idNo;
        private int? _status;
        private string _createdUser;
        private DateTime? _createdTime;
        private string _editUser;
        private DateTime? _editTime;


        ///<summary>
        ///
        ///</summary>
        public int? Id { get { return _id; } set { _id = value; } }

        ///<summary>
        ///
        ///</summary>
        public string IdName { get { return _idName; } set { _idName = value; } }

        ///<summary>
        ///
        ///</summary>
        public string IdNo { get { return _idNo; } set { _idNo = value; } }

        ///<summary>
        ///状态;0:启用;1:禁用
        ///</summary>
        public int? Status { get { return _status; } set { _status = value; } }

        ///<summary>
        ///创建者
        ///</summary>
        public string CreatedUser { get { return _createdUser; } set { _createdUser = value; } }

        ///<summary>
        ///创建时间
        ///</summary>
        public DateTime? CreatedTime { get { return _createdTime; } set { _createdTime = value; } }

        ///<summary>
        ///更新人
        ///</summary>
        public string EditUser { get { return _editUser; } set { _editUser = value; } }

        ///<summary>
        ///更新时间
        ///</summary>
        public DateTime? EditTime { get { return _editTime; } set { _editTime = value; } }

    }
}