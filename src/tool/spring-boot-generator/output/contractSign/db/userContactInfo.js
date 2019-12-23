let userContactInfo = {
  name: "userContactInfo",
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
    contractName: {
      name: "contractName",
      description: "联系人",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    contractPhone: {
      name: "contractPhone",
      description: "联系电话",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    contractEmail: {
      name: "contractEmail",
      description: "联系邮箱",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    }
  }
};

let columnsArray = [
  "id",
  "userId",
  "contractName",
  "contractPhone",
  "contractEmail"
];

function create() {
  return {
  id: 492,
  userId: 5,
  contractName: "联系人82",
  contractPhone: "联系电话28",
  contractEmail: "联系邮箱208"
};
}

userContactInfo.columnsArray=columnsArray;
userContactInfo.create=create;
module.exports=userContactInfo;