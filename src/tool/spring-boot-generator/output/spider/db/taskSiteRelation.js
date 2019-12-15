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
  domain: "网站572",
  id: 868,
  siteId: 22,
  taskId: 814,
  userId: 880
};
}

taskSiteRelation.columnsArray=columnsArray;
taskSiteRelation.create=create;
module.exports=taskSiteRelation;