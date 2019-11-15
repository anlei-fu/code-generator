let contractSign = {
  name: "contractSign",
  columns: {
    id: {
      name: "id",
      description: "签约编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    userId: {
      name: "userId",
      description: "用户编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    signSubject: {
      name: "signSubject",
      description: "签署主体",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    subjectType: {
      name: "subjectType",
      description: "主体类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    signPerson: {
      name: "signPerson",
      description: "签署人",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    signStatus: {
      name: "signStatus",
      description: "签署状态",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    signSort: {
      name: "signSort",
      description: "签署顺序",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    needPay: {
      name: "needPay",
      description: "需要付费",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    notifyPhone: {
      name: "notifyPhone",
      description: "通知号码",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    notifyEmail: {
      name: "notifyEmail",
      description: "通知邮箱",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    notifyCount: {
      name: "notifyCount",
      description: "通知次数",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    shortMsg: {
      name: "shortMsg",
      description: "私信内容",
      nullable: true,
      type: {
        name: "varchar",
        length: 256
      }
    },
    signUrl: {
      name: "signUrl",
      description: "签署URL",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
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
        length: 16
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
  id: 108,
  userId: 485,
  signSubject: "签署主体320",
  subjectType: 831,
  signPerson: "签署人952",
  signStatus: 442,
  signSort: 664,
  needPay: 980,
  notifyPhone: "通知号码265",
  notifyEmail: "通知邮箱607",
  notifyCount: 515,
  shortMsg: "私信内容475",
  signUrl: "签署URL193",
  signTime: "2019-11-14 1:5:48",
  signIp: "签署IP298",
  createTime: "2019-11-15 1:5:48"
};
}

contractSign.columnsArray=columnsArray;
contractSign.create=create;
module.exports=contractSign;