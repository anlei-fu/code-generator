let userRealInfo = {
  name: "userRealInfo",
  description: "",
  columns: {
    userId: {
      name: "userId",
      description: "用户编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    realName: {
      name: "realName",
      description: "用户姓名",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    idCardNo: {
      name: "idCardNo",
      description: "身份证号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    idCardPicFront: {
      name: "idCardPicFront",
      description: "身份证国徽照",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    idCardPicBack: {
      name: "idCardPicBack",
      description: "身份证人像照",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    idCardPicHand: {
      name: "idCardPicHand",
      description: "身份证手持照",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    verifyStartTime: {
      name: "verifyStartTime",
      description: "认证开始时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    verifyEndTime: {
      name: "verifyEndTime",
      description: "认证完成时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    }
  }
};

let columnsArray = [
  "userId",
  "realName",
  "idCardNo",
  "idCardPicFront",
  "idCardPicBack",
  "idCardPicHand",
  "verifyStartTime",
  "verifyEndTime"
];

function create() {
  return {
  userId: 402,
  realName: "用户姓名108",
  idCardNo: "身份证号735",
  idCardPicFront: "身份证国徽照689",
  idCardPicBack: "身份证人像照652",
  idCardPicHand: "身份证手持照805",
  verifyStartTime: "2019-12-22 1:2:20",
  verifyEndTime: "2019-12-22 1:2:20"
};
}

userRealInfo.columnsArray=columnsArray;
userRealInfo.create=create;
module.exports=userRealInfo;