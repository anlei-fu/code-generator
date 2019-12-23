let domainBlockRecord = {
  name: "domainBlockRecord",
  description: "屏蔽记录",
  columns: {
    blockTime: {
      name: "blockTime",
      description: "屏蔽时间",
      nullable: true,
      type: {
        name: "bigint",
        length: null
      }
    },
    domainId: {
      name: "domainId",
      description: "网站id",
      nullable: false,
      type: {
        name: "int",
        length: null
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
        length: null
      }
    },
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    taskId: {
      name: "taskId",
      description: "任务id",
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    userId: {
      name: "userId",
      description: "用户id",
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    workerId: {
      name: "workerId",
      description: "",
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    }
  }
};

let columnsArray = [
  "blockTime",
  "domainId",
  "id",
  "remark",
  "taskId",
  "userId",
  "workerId"
];

function create() {
  return {
  blockTime: 642,
  domainId: 411,
  id: 502,
  remark: "备注876",
  taskId: 698,
  userId: 405,
  workerId: 605
};
}

domainBlockRecord.columnsArray=columnsArray;
domainBlockRecord.create=create;
module.exports=domainBlockRecord;