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
        length: 64
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
      description: "网页下载数量",
      nullable: true,
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
      nullable: true,
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
    workerJoined: {
      name: "workerJoined",
      description: "参与worker数量",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
  endTime: 115,
  id: 242,
  pageDownloaded: 794,
  startTime: 436,
  success: 654,
  taskId: 346,
  workerJoined: 580
};
}

taskRunRecord.columnsArray=columnsArray;
taskRunRecord.create=create;
module.exports=taskRunRecord;