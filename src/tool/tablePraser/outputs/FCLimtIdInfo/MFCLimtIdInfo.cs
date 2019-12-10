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
    public class MFCLimtIdInfo : EntityBase
    {
        private int? _id;
        private int? _productId;
        private int? _ruleType;
        private int? _valueType;
        private string _valueA;
        private string _valueB;
        private int? _status;
        private string _createUser;
        private DateTime? _createTime;
        private string _editUser;
        private DateTime? _editTime;


        ///<summary>
        ///编号
        ///</summary>
        public int? Id { get { return _id; } set { _id = value; } }

        ///<summary>
        ///产品编号 0:所有
        ///</summary>
        public int? ProductId { get { return _productId; } set { _productId = value; } }

        ///<summary>
        ///规则类型: 1-年龄 2-身份证
        ///</summary>
        public int? RuleType { get { return _ruleType; } set { _ruleType = value; } }

        ///<summary>
        ///取值类型: 1-范围 2-等于 3-大于 4-小于 5-不等于 6-包含 7-不包含
        ///</summary>
        public int? ValueType { get { return _valueType; } set { _valueType = value; } }

        ///<summary>
        ///规则取值a
        ///</summary>
        public string ValueA { get { return _valueA; } set { _valueA = value; } }

        ///<summary>
        ///规则取值b
        ///</summary>
        public string ValueB { get { return _valueB; } set { _valueB = value; } }

        ///<summary>
        ///状态: 0-启用 1-禁用
        ///</summary>
        public int? Status { get { return _status; } set { _status = value; } }

        ///<summary>
        ///创建人
        ///</summary>
        public string CreateUser { get { return _createUser; } set { _createUser = value; } }

        ///<summary>
        ///创建时间
        ///</summary>
        public DateTime? CreateTime { get { return _createTime; } set { _createTime = value; } }

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