let userWallet = {
  name: "userWallet",
  description: "用户钱包",
  columns: {
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "bigint",
        length: 64
      }
    },
    id: {
      name: "id",
      description: "编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    total: {
      name: "total",
      description: "余额",
      nullable: false,
      type: {
        name: "float"
      }
    },
    userId: {
      name: "userId",
      description: "用户id",
      nullable: false,
      type: {
        name: "varchar",
        length: 45
      }
    }
  }
};

let columnsArray = [
  "createTime",
  "id",
  "total",
  "userId"
];

function create() {
  return {
  createTime: 878,
  id: 848,
  total: 741,
  userId: "用户id209"
};
}

userWallet.columnsArray=columnsArray;
userWallet.create=create;
module.exports=userWallet;