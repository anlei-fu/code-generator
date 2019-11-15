let userWallet = {
  name: "userWallet",
  columns: {
    id: {
      name: "id",
      description: "编号",
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
    personBalance: {
      name: "personBalance",
      description: "个人余额(份数)",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    companyBalance: {
      name: "companyBalance",
      description: "企业余额(份数)",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
  "personBalance",
  "companyBalance",
  "createTime"
];

function create() {
  return {
  id: 813,
  userId: 262,
  personBalance: 926,
  companyBalance: 266,
  createTime: "2019-11-22 1:5:48"
};
}

userWallet.columnsArray=columnsArray;
userWallet.create=create;
module.exports=userWallet;