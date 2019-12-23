let contractSignRecord = {
  name: "contractSignRecord",
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
    contractId: {
      name: "contractId",
      description: "合同编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    signId: {
      name: "signId",
      description: "签约编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    signPerson: {
      name: "signPerson",
      description: "签署人",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    signBeforeFile: {
      name: "signBeforeFile",
      description: "签署前合同",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    signBeforeHash: {
      name: "signBeforeHash",
      description: "签署前Hash",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    signAfterFile: {
      name: "signAfterFile",
      description: "签署后合同",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    signAfterHash: {
      name: "signAfterHash",
      description: "签署后Hash",
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
  "contractId",
  "signId",
  "signPerson",
  "signBeforeFile",
  "signBeforeHash",
  "signAfterFile",
  "signAfterHash",
  "createTime"
];

function create() {
  return {
  id: 668,
  contractId: 64,
  signId: 415,
  signPerson: "签署人742",
  signBeforeFile: "签署前合同35",
  signBeforeHash: "签署前Hash269",
  signAfterFile: "签署后合同424",
  signAfterHash: "签署后Hash506",
  createTime: "2019-11-23 1:2:20"
};
}

contractSignRecord.columnsArray=columnsArray;
contractSignRecord.create=create;
module.exports=contractSignRecord;