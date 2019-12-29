let systemContractTemplate = {
  name: "systemContractTemplate",
  columns: {
    id: {
      name: "id",
      description: "编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    contractType: {
      name: "contractType",
      description: "合同分类",
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
      description: "合同内容",
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
  "contractType",
  "contractName",
  "contractFile",
  "createTime"
];

function create() {
  return {
  id: 832,
  contractType: 676,
  contractName: "合同名称882",
  contractFile: "合同内容85",
  createTime: "2019-11-14 1:5:48"
};
}

systemContractTemplate.columnsArray=columnsArray;
systemContractTemplate.create=create;
module.exports=systemContractTemplate;