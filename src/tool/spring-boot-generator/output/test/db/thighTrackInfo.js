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
  createTime: "2019-12-17 1::37",
  curveRadius: 977,
  direction: 315,
  gradeSectionLength: 500,
  id: 106,
  isDelete: 366,
  lineId: 551,
  maxGradient: 410,
  operator: 595,
  sortNum: "排序编号586",
  stationId: 869,
  status: 823,
  thighTrackLength: 224,
  thighTrackNo: "股道号283",
  thighTrackType: 795,
  tieCategory: 5,
  updateTime: "2019-11-18 1::37",
  workareaId: 781
};
}

thighTrackInfo.columnsArray=columnsArray;
thighTrackInfo.create=create;
module.exports=thighTrackInfo;