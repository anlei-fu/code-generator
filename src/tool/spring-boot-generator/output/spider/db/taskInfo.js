let taskInfo = {
  name: "taskInfo",
  description: "任务信息",
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
    description: {
      name: "description",
      description: "描述",
      nullable: true,
      type: {
        name: "varchar",
        length: 100
      }
    },
    endTime: {
      name: "endTime",
      description: "结束时间",
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
    level: {
      name: "level",
      description: "任务等级",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    mainConfigId: {
      name: "mainConfigId",
      description: "主配置id",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    queueId: {
      name: "queueId",
      description: "queue id",
      nullable: true,
      type: {
        name: "varchar",
        length: 30
      }
    },
    status: {
      name: "status",
      description: "任务状态",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    topicId: {
      name: "topicId",
      description: "topic id",
      nullable: true,
      type: {
        name: "int",
        length: 30
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
  "createTime",
  "description",
  "endTime",
  "id",
  "level",
  "mainConfigId",
  "queueId",
  "status",
  "topicId",
  "userId"
];

function create() {
  return {
  createTime: 874,
  description: "描述217",
  endTime: 623,
  id: 516,
  level: 664,
  mainConfigId: 975,
  queueId: "queue id819",
  status: 568,
  topicId: 513,
  userId: 868
};
}

taskInfo.columnsArray=columnsArray;
taskInfo.create=create;
module.exports=taskInfo;