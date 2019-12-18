let taskScriptConfigRecord = {
  name: "taskScriptConfigRecord",
  description: "任务脚本更改配置",
  columns: {
    action: {
      name: "action",
      description: "操作类型",
      nullable: false,
      type: {
        name: "int",
        length: 11
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
  "action",
  "file",
  "id",
  "version"
];

function create() {
  return {
  action: 487,
  file: "文件725",
  id: 377,
  version: 353
};
}

taskScriptConfigRecord.columnsArray=columnsArray;
taskScriptConfigRecord.create=create;
module.exports=taskScriptConfigRecord;