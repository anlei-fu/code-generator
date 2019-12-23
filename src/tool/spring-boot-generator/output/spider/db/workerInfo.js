let workerInfo = {
  name: "workerInfo",
  description: "worker info",
  columns: {
    description: {
      name: "description",
      description: "描述",
      nullable: true,
      type: {
        name: "varchar",
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
    ip: {
      name: "ip",
      description: "ip",
      nullable: false,
      type: {
        name: "varchar",
        length: null
      }
    },
    joinTime: {
      name: "joinTime",
      description: "加入时间",
      nullable: true,
      type: {
        name: "bigint",
        length: null
      }
    },
    lastRunTime: {
      name: "lastRunTime",
      description: "最后运行时间",
      nullable: true,
      type: {
        name: "bigint",
        length: null
      }
    }
  }
};

let columnsArray = [
  "description",
  "id",
  "ip",
  "joinTime",
  "lastRunTime"
];

function create() {
  return {
  description: "描述998",
  id: 80,
  ip: "ip838",
  joinTime: 888,
  lastRunTime: 245
};
}

workerInfo.columnsArray=columnsArray;
workerInfo.create=create;
module.exports=workerInfo;