let notaryChannel = {
  name: "notaryChannel",
  columns: {
    id: {
      name: "id",
      description: "渠道编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    channelName: {
      name: "channelName",
      description: "渠道名称",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    remark: {
      name: "remark",
      description: "渠道备注",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    apiUrl: {
      name: "apiUrl",
      description: "接口地址",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    apiKey: {
      name: "apiKey",
      description: "接口key",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    status: {
      name: "status",
      description: "状态",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
  id: 927,
  channelName: "渠道名称763",
  remark: "渠道备注766",
  apiUrl: "接口地址464",
  apiKey: "接口key374",
  status: 634,
  createTime: "2019-11-22 1:5:48"
};
}

notaryChannel.columnsArray=columnsArray;
notaryChannel.create=create;
module.exports=notaryChannel;