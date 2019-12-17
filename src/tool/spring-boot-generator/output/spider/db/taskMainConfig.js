let taskMainConfig = {
  name: "taskMainConfig",
  description: "任务主配置",
  columns: {
    agent: {
      name: "agent",
      description: "浏览器代理",
      nullable: true,
      type: {
        name: "varchar",
        length: 45
      }
    },
    encoding: {
      name: "encoding",
      description: "编码",
      nullable: true,
      type: {
        name: "varchar",
        length: 10
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
    pattern: {
      name: "pattern",
      description: "pattern",
      nullable: true,
      type: {
        name: "varchar",
        length: 100
      }
    },
    scriptVersion: {
      name: "scriptVersion",
      description: "脚本版本",
      nullable: true,
      type: {
        name: "varchar",
        length: 45
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
    timeout: {
      name: "timeout",
      description: "超时",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    }
  }
};

let columnsArray = [
  "agent",
  "encoding",
  "id",
  "pattern",
  "scriptVersion",
  "taskId",
  "timeout"
];

function create() {
  return {
  agent: "浏览器代理570",
  encoding: "编码632",
  id: 10,
  pattern: "pattern97",
  scriptVersion: "脚本版本218",
  taskId: 435,
  timeout: 612
};
}

taskMainConfig.columnsArray=columnsArray;
taskMainConfig.create=create;
module.exports=taskMainConfig;