let contractSign = {
  name: "contractSign",
  description: "",
  columns: {
    id: {
      name: "id",
      description: "签约编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    userId: {
      name: "userId",
      description: "用户编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    signSubject: {
      name: "signSubject",
      description: "签署主体",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    subjectType: {
      name: "subjectType",
      description: "主体类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    signPerson: {
      name: "signPerson",
      description: "签署人",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    signStatus: {
      name: "signStatus",
      description: "签署状态",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    signSort: {
      name: "signSort",
      description: "签署顺序",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    needPay: {
      name: "needPay",
      description: "需要付费",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    notifyPhone: {
      name: "notifyPhone",
      description: "通知号码",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    notifyEmail: {
      name: "notifyEmail",
      description: "通知邮箱",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    notifyCount: {
      name: "notifyCount",
      description: "通知次数",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    shortMsg: {
      name: "shortMsg",
      description: "私信内容",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    signUrl: {
      name: "signUrl",
      description: "签署URL",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    signTime: {
      name: "signTime",
      description: "签署时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    signIp: {
      name: "signIp",
      description: "签署IP",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    }
  }
};

let columnsArray = [
  "id",
  "userId",
  "signSubject",
  "subjectType",
  "signPerson",
  "signStatus",
  "signSort",
  "needPay",
  "notifyPhone",
  "notifyEmail",
  "notifyCount",
  "shortMsg",
  "signUrl",
  "signTime",
  "signIp",
  "createTime"
];

function create() {
  return {
  id: 601,
  userId: 853,
  signSubject: "签署主体103",
  subjectType: 909,
  signPerson: "签署人830",
  signStatus: 917,
  signSort: 78,
  needPay: 830,
  notifyPhone: "通知号码504",
  notifyEmail: "通知邮箱135",
  notifyCount: 907,
  shortMsg: "私信内容2",
  signUrl: "签署URL618",
  signTime: "2019-12-30 1:2:20",
  signIp: "签署IP767",
  createTime: "2020-1-23 1:2:20"
};
}

contractSign.columnsArray=columnsArray;
contractSign.create=create;
module.exports=contractSign;