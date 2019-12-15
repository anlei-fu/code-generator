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
        length: 45
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
    ip: {
      name: "ip",
      description: "ip",
      nullable: false,
      type: {
        name: "varchar",
        length: 20
      }
    },
    joinTime: {
      name: "joinTime",
      description: "加入时间",
      nullable: true,
      type: {
        name: "bigint",
        length: 64
      }
    },
    lastRunTime: {
      name: "lastRunTime",
      description: "最后运行时间",
      nullable: true,
      type: {
        name: "bigint",
        length: 64
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
  description: "描述755",
  id: 76,
  ip: "ip3",
  joinTime: 699,
  lastRunTime: 101
};
}

workerInfo.columnsArray=columnsArray;
workerInfo.create=create;
module.exports=workerInfo;