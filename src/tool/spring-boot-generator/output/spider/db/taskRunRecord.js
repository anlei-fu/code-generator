let taskRunRecord = {
  name: "taskRunRecord",
  description: "任务运行记录",
  columns: {
    endTime: {
      name: "endTime",
      description: "结束时间",
      nullable: true,
      type: {
        name: "bigint",
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
    pageDownloaded: {
      name: "pageDownloaded",
      description: "网页下载数量",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    startTime: {
      name: "startTime",
      description: "开始时间",
      nullable: true,
      type: {
        name: "bigint",
        length: null
      }
    },
    success: {
      name: "success",
      description: "成功提取数量",
      nullable: true,
      type: {
        name: "int",
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
    workerJoined: {
      name: "workerJoined",
      description: "参与worker数量",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    }
  }
};

let columnsArray = [
  "endTime",
  "id",
  "pageDownloaded",
  "startTime",
  "success",
  "taskId",
  "workerJoined"
];

function create() {
  return {
  endTime: 871,
  id: 794,
  pageDownloaded: 679,
  startTime: 560,
  success: 255,
  taskId: 193,
  workerJoined: 76
};
}

taskRunRecord.columnsArray=columnsArray;
taskRunRecord.create=create;
module.exports=taskRunRecord;