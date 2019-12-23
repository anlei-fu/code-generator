let userWallet = {
  name: "userWallet",
  description: "",
  columns: {
    id: {
      name: "id",
      description: "编号",
      isPk: true,
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
    personBalance: {
      name: "personBalance",
      description: "个人余额(份数)",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    companyBalance: {
      name: "companyBalance",
      description: "企业余额(份数)",
      nullable: true,
      type: {
        name: "int",
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
  "personBalance",
  "companyBalance",
  "createTime"
];

function create() {
  return {
  id: 448,
  userId: 855,
  personBalance: 837,
  companyBalance: 765,
  createTime: "2019-12-22 1:2:20"
};
}

userWallet.columnsArray=columnsArray;
userWallet.create=create;
module.exports=userWallet;