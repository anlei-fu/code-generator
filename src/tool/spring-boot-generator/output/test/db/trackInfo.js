let trackInfo = {
  name: "trackInfo",
  description: "钢轨信息",
  columns: {
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    id: {
      name: "id",
      description: "轨道编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    isDelete: {
      name: "isDelete",
      description: "删除标记",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    operator: {
      name: "operator",
      description: "操作人",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    trackCode: {
      name: "trackCode",
      description: "轨道编码",
      nullable: false,
      type: {
        name: "varchar",
        length: 32
      }
    },
    trackDivisionId: {
      name: "trackDivisionId",
      description: "工务段编号",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    trackType: {
      name: "trackType",
      description: "钢轨类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    updateTime: {
      name: "updateTime",
      description: "更新时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    }
  }
};

let columnsArray = [
  "createTime",
  "id",
  "isDelete",
  "operator",
  "trackCode",
  "trackDivisionId",
  "trackType",
  "updateTime"
];

function create() {
  return {
  createTime: "2019-12-24 :3:35",
  id: 509,
  isDelete: 558,
  operator: 255,
  trackCode: "轨道编码71",
  trackDivisionId: 485,
  trackType: 455,
  updateTime: "2019-12-24 :3:35"
};
}

trackInfo.columnsArray=columnsArray;
trackInfo.create=create;
module.exports=trackInfo;