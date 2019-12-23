let notaryChannel = {
  name: "notaryChannel",
  description: "",
  columns: {
    id: {
      name: "id",
      description: "渠道编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    channelName: {
      name: "channelName",
      description: "渠道名称",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    remark: {
      name: "remark",
      description: "渠道备注",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    apiUrl: {
      name: "apiUrl",
      description: "接口地址",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    apiKey: {
      name: "apiKey",
      description: "接口key",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    status: {
      name: "status",
      description: "状态",
      nullable: true,
      type: {
        name: "int",
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
  "channelName",
  "remark",
  "apiUrl",
  "apiKey",
  "status",
  "createTime"
];

function create() {
  return {
  id: 93,
  channelName: "渠道名称843",
  remark: "渠道备注696",
  apiUrl: "接口地址743",
  apiKey: "接口key109",
  status: 633,
  createTime: "2019-11-23 1:2:20"
};
}

notaryChannel.columnsArray=columnsArray;
notaryChannel.create=create;
module.exports=notaryChannel;