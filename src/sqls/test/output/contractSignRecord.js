let contractSignRecord = {
  name: "contractSignRecord",
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
    contractId: {
      name: "contractId",
      description: "合同编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    signId: {
      name: "signId",
      description: "签约编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    signPerson: {
      name: "signPerson",
      description: "签署人",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    signBeforeFile: {
      name: "signBeforeFile",
      description: "签署前合同",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    signBeforeHash: {
      name: "signBeforeHash",
      description: "签署前Hash",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    signAfterFile: {
      name: "signAfterFile",
      description: "签署后合同",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    signAfterHash: {
      name: "signAfterHash",
      description: "签署后Hash",
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
  id: 318,
  contractId: 40,
  signId: 533,
  signPerson: "签署人151",
  signBeforeFile: "签署前合同3",
  signBeforeHash: "签署前Hash220",
  signAfterFile: "签署后合同302",
  signAfterHash: "签署后Hash179",
  createTime: "2019-11-22 1:5:48"
};
}

contractSignRecord.columnsArray=columnsArray;
contractSignRecord.create=create;
module.exports=contractSignRecord;