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
        length: 64
      }
    },
    domainId: {
      name: "domainId",
      description: "网站id",
      nullable: false,
      type: {
        name: "int",
        length: 11
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
        length: 11
      }
    },
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
        length: 45
      }
    },
    taskId: {
      name: "taskId",
      description: "任务id",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    userId: {
      name: "userId",
      description: "用户id",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    workerId: {
      name: "workerId",
      description: "",
      nullable: false,
      type: {
        name: "int",
        length: 11
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
  blockTime: 827,
  domainId: 425,
  id: 357,
  remark: "备注36",
  taskId: 169,
  userId: 665,
  workerId: 158
};
}

domainBlockRecord.columnsArray=columnsArray;
domainBlockRecord.create=create;
module.exports=domainBlockRecord;