let workTaskRecord = {
  name: "workTaskRecord",
  description: "worker 运行记录",
  columns: {
    downloadSucess: {
      name: "downloadSucess",
      description: "",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    endTime: {
      name: "endTime",
      description: "结束时间",
      nullable: true,
      type: {
        name: "bigint",
        length: 64
      }
    },
    exitCode: {
      name: "exitCode",
      description: "错误码",
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
    pageDownloaded: {
      name: "pageDownloaded",
      description: "页面笑在数量",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    startTime: {
      name: "startTime",
      description: "开始时间",
      nullable: true,
      type: {
        name: "bigint",
        length: 64
      }
    },
    success: {
      name: "success",
      description: "成功提取数量",
      nullable: false,
      type: {
        name: "int",
        length: 11
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
    taskMainConfigId: {
      name: "taskMainConfigId",
      description: "主配置id",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    workerId: {
      name: "workerId",
      description: "wroker id",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    }
  }
};

let columnsArray = [
  "downloadSucess",
  "endTime",
  "exitCode",
  "id",
  "pageDownloaded",
  "startTime",
  "success",
  "taskId",
  "taskMainConfigId",
  "workerId"
];

function create() {
  return {
  downloadSucess: 212,
  endTime: 431,
  exitCode: 269,
  id: 997,
  pageDownloaded: 439,
  startTime: 533,
  success: 275,
  taskId: 529,
  taskMainConfigId: 427,
  workerId: 369
};
}

workTaskRecord.columnsArray=columnsArray;
workTaskRecord.create=create;
module.exports=workTaskRecord;