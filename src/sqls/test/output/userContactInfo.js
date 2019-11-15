let userContactInfo = {
  name: "userContactInfo",
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
    contractName: {
      name: "contractName",
      description: "联系人",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    contractPhone: {
      name: "contractPhone",
      description: "联系电话",
      nullable: true,
      type: {
        name: "varchar",
        length: 24
      }
    },
    contractEmail: {
      name: "contractEmail",
      description: "联系邮箱",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
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
  id: 342,
  userId: 287,
  contractName: "联系人195",
  contractPhone: "联系电话727",
  contractEmail: "联系邮箱828"
};
}

userContactInfo.columnsArray=columnsArray;
userContactInfo.create=create;
module.exports=userContactInfo;