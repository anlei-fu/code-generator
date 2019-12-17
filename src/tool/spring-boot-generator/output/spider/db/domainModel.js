let domainModel = {
  name: "domainModel",
  description: "网站提取模型",
  columns: {
    domainId: {
      name: "domainId",
      description: "domainid",
      nullable: false,
      type: {
        name: "int",
        length: 11
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
    model: {
      name: "model",
      description: "模型",
      nullable: true,
      type: {
        name: "varchar",
        length: 1000
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
    }
  }
};

let columnsArray = [
  "domainId",
  "id",
  "model",
  "taskId"
];

function create() {
  return {
  domainId: 960,
  id: 694,
  model: "模型488",
  taskId: 178
};
}

domainModel.columnsArray=columnsArray;
domainModel.create=create;
module.exports=domainModel;