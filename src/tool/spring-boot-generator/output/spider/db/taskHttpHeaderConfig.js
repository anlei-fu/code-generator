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
    key: {
      name: "key",
      description: "key",
      nullable: true,
      type: {
        name: "varchar",
        length: 45
      }
    },
    taskConfigMainId: {
      name: "taskConfigMainId",
      description: "主配置id",
      nullable: false,
      type: {
        name: "varchar",
        length: 45
      }
    },
    value: {
      name: "value",
      description: "value",
      nullable: true,
      type: {
        name: "varchar",
        length: 100
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
  createTime: 106,
  id: 397,
  key: "key848",
  taskConfigMainId: "主配置id567",
  value: "value396"
};
}

taskHttpHeaderConfig.columnsArray=columnsArray;
taskHttpHeaderConfig.create=create;
module.exports=taskHttpHeaderConfig;