let systemLog = {
  name: "systemLog",
  columns: {
    id: {
      name: "id",
      description: "编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    module: {
      name: "module",
      description: "模块名称",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    summary: {
      name: "summary",
      description: "日志摘要",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    content: {
      name: "content",
      description: "日志内容",
      nullable: true,
      type: {
        name: "varchar",
        length: 256
      }
    },
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    }
  }
};

let columnsArray = [
  "id",
  "module",
  "summary",
  "content",
  "createTime"
];

function create() {
  return {
  id: 705,
  module: "模块名称782",
  summary: "日志摘要700",
  content: "日志内容259",
  createTime: "2019-11-15 1:5:48"
};
}

systemLog.columnsArray=columnsArray;
systemLog.create=create;
module.exports=systemLog;