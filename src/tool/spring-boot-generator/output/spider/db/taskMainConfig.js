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
        length: null
      }
    },
    encoding: {
      name: "encoding",
      description: "编码",
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
    pattern: {
      name: "pattern",
      description: "pattern",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    scriptVersion: {
      name: "scriptVersion",
      description: "脚本版本",
      nullable: true,
      type: {
        name: "varchar",
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
    timeout: {
      name: "timeout",
      description: "超时",
      nullable: true,
      type: {
        name: "int",
        length: null
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
  agent: "浏览器代理134",
  encoding: "编码446",
  id: 926,
  pattern: "pattern753",
  scriptVersion: "脚本版本820",
  taskId: 457,
  timeout: 155
};
}

taskMainConfig.columnsArray=columnsArray;
taskMainConfig.create=create;
module.exports=taskMainConfig;