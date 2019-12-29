let workerRunRecord = {
  name: "workerRunRecord",
  description: "worker 运行记录",
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
    startTime: {
      name: "startTime",
      description: "开始时间",
      nullable: true,
      type: {
        name: "bigint",
        length: 64
      }
    }
  }
};

let columnsArray = [
  "endTime",
  "id",
  "startTime"
];

function create() {
  return {
  endTime: 365,
  id: 434,
  startTime: 112
};
}

workerRunRecord.columnsArray=columnsArray;
workerRunRecord.create=create;
module.exports=workerRunRecord;