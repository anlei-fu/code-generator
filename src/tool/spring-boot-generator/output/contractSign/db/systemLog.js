let systemLog = {
  name: "systemLog",
  description: "",
  columns: {
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
    module: {
      name: "module",
      description: "模块名称",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    summary: {
      name: "summary",
      description: "日志摘要",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    content: {
      name: "content",
      description: "日志内容",
      nullable: true,
      type: {
        name: "varchar",
        length: null
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
  id: 280,
  module: "模块名称845",
  summary: "日志摘要971",
  content: "日志内容649",
  createTime: "2019-12-23 1:2:20"
};
}

systemLog.columnsArray=columnsArray;
systemLog.create=create;
module.exports=systemLog;