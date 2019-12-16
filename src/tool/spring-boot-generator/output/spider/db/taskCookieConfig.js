let taskCookieConfig = {
  name: "taskCookieConfig",
  description: "任务cookie配置",
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
    domainId: {
      name: "domainId",
      description: "网站id",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    expiration: {
      name: "expiration",
      description: "失效时间",
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
        name: "int",
        length: 11
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
  "domainId",
  "expiration",
  "id",
  "key",
  "taskConfigMainId",
  "value"
];

function create() {
  return {
  createTime: 987,
  domainId: 717,
  expiration: 896,
  id: 616,
  key: "key945",
  taskConfigMainId: 777,
  value: "value784"
};
}

taskCookieConfig.columnsArray=columnsArray;
taskCookieConfig.create=create;
module.exports=taskCookieConfig;