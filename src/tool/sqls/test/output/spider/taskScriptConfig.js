let taskScriptConfig = {
  name: "taskScriptConfig",
  description: "任务脚本配置",
  columns: {
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "varchar",
        length: 45
      }
    },
    file: {
      name: "file",
      description: "文件",
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
    taskConfigMainId: {
      name: "taskConfigMainId",
      description: "这配置id",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    version: {
      name: "version",
      description: "版本",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    }
  }
};

let columnsArray = [
  "createTime",
  "file",
  "id",
  "taskConfigMainId",
  "version"
];

function create() {
  return {
  createTime: "创建时间955",
  file: "文件678",
  id: 959,
  taskConfigMainId: 658,
  version: 891
};
}

taskScriptConfig.columnsArray=columnsArray;
taskScriptConfig.create=create;
module.exports=taskScriptConfig;