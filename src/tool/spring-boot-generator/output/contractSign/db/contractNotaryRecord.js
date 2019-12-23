let contractNotaryRecord = {
  name: "contractNotaryRecord",
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
    proposer: {
      name: "proposer",
      description: "公证申请人",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    notaryChannel: {
      name: "notaryChannel",
      description: "公证渠道",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    notaryStatus: {
      name: "notaryStatus",
      description: "公证状态",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    notaryStartTime: {
      name: "notaryStartTime",
      description: "公证发起时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    notaryEndTime: {
      name: "notaryEndTime",
      description: "公证完成时间",
      nullable: true,
      type: {
        name: "datetime"
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
  "proposer",
  "notaryChannel",
  "notaryStatus",
  "notaryStartTime",
  "notaryEndTime",
  "createTime"
];

function create() {
  return {
  id: 669,
  contractId: 128,
  proposer: 287,
  notaryChannel: 242,
  notaryStatus: 814,
  notaryStartTime: "2019-12-22 1:2:20",
  notaryEndTime: "2019-12-30 1:2:20",
  createTime: "2019-12-30 1:2:20"
};
}

contractNotaryRecord.columnsArray=columnsArray;
contractNotaryRecord.create=create;
module.exports=contractNotaryRecord;