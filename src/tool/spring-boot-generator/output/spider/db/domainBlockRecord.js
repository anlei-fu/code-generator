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
  blockTime: 871,
  domainId: 457,
  id: 648,
  remark: "备注13",
  taskId: 682,
  userId: 109,
  workerId: 261
};
}

domainBlockRecord.columnsArray=columnsArray;
domainBlockRecord.create=create;
module.exports=domainBlockRecord;