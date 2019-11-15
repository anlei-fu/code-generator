let userContractTemplate = {
  name: "userContractTemplate",
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
      description: "创建人编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    belongType: {
      name: "belongType",
      description: "模板归属类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    belongId: {
      name: "belongId",
      description: "模板归属编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    contractName: {
      name: "contractName",
      description: "合同名称",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    contractFile: {
      name: "contractFile",
      description: "合同文件",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
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
  "belongType",
  "belongId",
  "contractName",
  "contractFile",
  "createTime"
];

function create() {
  return {
  id: 771,
  userId: 873,
  belongType: 462,
  belongId: 997,
  contractName: "合同名称875",
  contractFile: "合同文件397",
  createTime: "2019-10-15 1:5:48"
};
}

userContractTemplate.columnsArray=columnsArray;
userContractTemplate.create=create;
module.exports=userContractTemplate;