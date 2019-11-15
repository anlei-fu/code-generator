let userRealInfo = {
  name: "userRealInfo",
  columns: {
    userId: {
      name: "userId",
      description: "用户编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    realName: {
      name: "realName",
      description: "用户姓名",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    idCardNo: {
      name: "idCardNo",
      description: "身份证号",
      nullable: true,
      type: {
        name: "varchar",
        length: 24
      }
    },
    idCardPicFront: {
      name: "idCardPicFront",
      description: "身份证国徽照",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    idCardPicBack: {
      name: "idCardPicBack",
      description: "身份证人像照",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    idCardPicHand: {
      name: "idCardPicHand",
      description: "身份证手持照",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
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
  userId: 405,
  realName: "用户姓名157",
  idCardNo: "身份证号508",
  idCardPicFront: "身份证国徽照692",
  idCardPicBack: "身份证人像照774",
  idCardPicHand: "身份证手持照436",
  verifyStartTime: "2019-11-15 1:5:48",
  verifyEndTime: "2019-11-15 1:5:48"
};
}

userRealInfo.columnsArray=columnsArray;
userRealInfo.create=create;
module.exports=userRealInfo;