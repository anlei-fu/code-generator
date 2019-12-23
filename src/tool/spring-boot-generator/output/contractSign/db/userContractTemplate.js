let userContractTemplate = {
  name: "userContractTemplate",
  description: "",
  columns: {
    id: {
      name: "id",
      description: "编号",
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
      description: "创建人编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    belongType: {
      name: "belongType",
      description: "模板归属类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    belongId: {
      name: "belongId",
      description: "模板归属编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    contractName: {
      name: "contractName",
      description: "合同名称",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    contractFile: {
      name: "contractFile",
      description: "合同文件",
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
  "belongType",
  "belongId",
  "contractName",
  "contractFile",
  "createTime"
];

function create() {
  return {
  id: 893,
  userId: 174,
  belongType: 755,
  belongId: 380,
  contractName: "合同名称995",
  contractFile: "合同文件934",
  createTime: "2019-12-23 1:2:20"
};
}

userContractTemplate.columnsArray=columnsArray;
userContractTemplate.create=create;
module.exports=userContractTemplate;