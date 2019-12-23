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
        length: null
      }
    },
    domainId: {
      name: "domainId",
      description: "网站id",
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    expiration: {
      name: "expiration",
      description: "失效时间",
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
        name: "int",
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
  "domainId",
  "expiration",
  "id",
  "key",
  "taskConfigMainId",
  "value"
];

function create() {
  return {
  createTime: 896,
  domainId: 682,
  expiration: 850,
  id: 730,
  key: "key235",
  taskConfigMainId: 116,
  value: "value842"
};
}

taskCookieConfig.columnsArray=columnsArray;
taskCookieConfig.create=create;
module.exports=taskCookieConfig;