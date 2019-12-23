let taskHttpHeaderConfig = {
  name: "taskHttpHeaderConfig",
  description: "任务 header 配置",
  columns: {
    createTime: {
      name: "createTime",
      description: "创建时间",
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
    key: {
      name: "key",
      description: "key",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    taskConfigMainId: {
      name: "taskConfigMainId",
      description: "主配置id",
      nullable: false,
      type: {
        name: "varchar",
        length: null
      }
    },
    value: {
      name: "value",
      description: "value",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    }
  }
};

let columnsArray = [
  "createTime",
  "id",
  "key",
  "taskConfigMainId",
  "value"
];

function create() {
  return {
  createTime: 668,
  id: 63,
  key: "key752",
  taskConfigMainId: "主配置id269",
  value: "value24"
};
}

taskHttpHeaderConfig.columnsArray=columnsArray;
taskHttpHeaderConfig.create=create;
module.exports=taskHttpHeaderConfig;