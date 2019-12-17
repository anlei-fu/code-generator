let thighTrackInfo = {
  name: "thighTrackInfo",
  description: "股道信息",
  columns: {
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    curveRadius: {
      name: "curveRadius",
      description: "曲线半径",
      nullable: true,
      type: {
        name: "float"
      }
    },
    direction: {
      name: "direction",
      description: "行别",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    gradeSectionLength: {
      name: "gradeSectionLength",
      description: "坡段长度",
      nullable: true,
      type: {
        name: "float"
      }
    },
    id: {
      name: "id",
      description: "股道编号",
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
    lineId: {
      name: "lineId",
      description: "线路编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    maxGradient: {
      name: "maxGradient",
      description: "最大坡度",
      nullable: true,
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
    sortNum: {
      name: "sortNum",
      description: "排序编号",
      nullable: true,
      type: {
        name: "varchar",
        length: 16
      }
    },
    stationId: {
      name: "stationId",
      description: "车站编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
    thighTrackLength: {
      name: "thighTrackLength",
      description: "鑲￠亾闀垮害",
      nullable: true,
      type: {
        name: "float"
      }
    },
    thighTrackNo: {
      name: "thighTrackNo",
      description: "股道号",
      nullable: true,
      type: {
        name: "varchar",
        length: 16
      }
    },
    thighTrackType: {
      name: "thighTrackType",
      description: "鑲￠亾绫诲瀷",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    tieCategory: {
      name: "tieCategory",
      description: "轨枕类别",
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
    },
    workareaId: {
      name: "workareaId",
      description: "宸ュ尯缂栧彿",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    }
  }
};

let columnsArray = [
  "createTime",
  "curveRadius",
  "direction",
  "gradeSectionLength",
  "id",
  "isDelete",
  "lineId",
  "maxGradient",
  "operator",
  "sortNum",
  "stationId",
  "status",
  "thighTrackLength",
  "thighTrackNo",
  "thighTrackType",
  "tieCategory",
  "updateTime",
  "workareaId"
];

function create() {
  return {
  createTime: "2020-1-17 :3:35",
  curveRadius: 668,
  direction: 789,
  gradeSectionLength: 802,
  id: 996,
  isDelete: 470,
  lineId: 227,
  maxGradient: 656,
  operator: 298,
  sortNum: "排序编号897",
  stationId: 357,
  status: 96,
  thighTrackLength: 679,
  thighTrackNo: "股道号762",
  thighTrackType: 40,
  tieCategory: 328,
  updateTime: "2020-1-17 :3:35",
  workareaId: 641
};
}

thighTrackInfo.columnsArray=columnsArray;
thighTrackInfo.create=create;
module.exports=thighTrackInfo;