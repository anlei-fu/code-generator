let taskSiteRelation = {
  name: "taskSiteRelation",
  description: "任务 网站关联",
  columns: {
    domain: {
      name: "domain",
      description: "网站",
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
    siteId: {
      name: "siteId",
      description: "网站id",
      nullable: false,
      type: {
        name: "int",
        length: 11
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
    userId: {
      name: "userId",
      description: "用户id",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    }
  }
};

let columnsArray = [
  "domain",
  "id",
  "siteId",
  "taskId",
  "userId"
];

function create() {
  return {
  domain: "网站558",
  id: 166,
  siteId: 230,
  taskId: 78,
  userId: 676
};
}

taskSiteRelation.columnsArray=columnsArray;
taskSiteRelation.create=create;
module.exports=taskSiteRelation;