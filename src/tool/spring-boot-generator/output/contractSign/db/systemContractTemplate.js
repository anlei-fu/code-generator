let systemContractTemplate = {
  name: "systemContractTemplate",
  description: "",
  columns: {
    id: {
      name: "id",
      description: "编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    contractType: {
      name: "contractType",
      description: "合同分类",
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
      description: "合同内容",
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
  "contractType",
  "contractName",
  "contractFile",
  "createTime"
];

function create() {
  return {
  id: 85,
  contractType: 432,
  contractName: "合同名称419",
  contractFile: "合同内容651",
  createTime: "2019-12-22 1:2:20"
};
}

systemContractTemplate.columnsArray=columnsArray;
systemContractTemplate.create=create;
module.exports=systemContractTemplate;