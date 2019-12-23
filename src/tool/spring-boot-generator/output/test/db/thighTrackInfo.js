let thighTrackInfo = {
  name: "thighTrackInfo",
  description: "股道信息",
  columns: {
    id: {
      name: "id",
      description: "股道编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    stationId: {
      name: "stationId",
      description: "车站编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    lineId: {
      name: "lineId",
      description: "线路编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    workareaId: {
      name: "workareaId",
      description: "宸ュ尯缂栧彿",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    thighTrackNo: {
      name: "thighTrackNo",
      description: "股道号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    thighTrackType: {
      name: "thighTrackType",
      description: "鑲￠亾绫诲瀷",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    direction: {
      name: "direction",
      description: "行别",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    tieCategory: {
      name: "tieCategory",
      description: "轨枕类别",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    maxGradient: {
      name: "maxGradient",
      description: "最大坡度",
      nullable: true,
      type: {
        name: "int",
        length: null
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
    gradeSectionLength: {
      name: "gradeSectionLength",
      description: "坡段长度",
      nullable: true,
      type: {
        name: "float"
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
    sortNum: {
      name: "sortNum",
      description: "排序编号",
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
    isDelete: {
      name: "isDelete",
      description: "删除标记",
      nullable: false,
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
    },
    updateTime: {
      name: "updateTime",
      description: "更新时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    operator: {
      name: "operator",
      description: "操作人",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    }
  }
};

let columnsArray = [
  "id",
  "stationId",
  "lineId",
  "workareaId",
  "thighTrackNo",
  "thighTrackType",
  "direction",
  "tieCategory",
  "maxGradient",
  "curveRadius",
  "gradeSectionLength",
  "thighTrackLength",
  "sortNum",
  "status",
  "isDelete",
  "createTime",
  "updateTime",
  "operator"
];

function create() {
  return {
  id: 813,
  stationId: 420,
  lineId: 913,
  workareaId: 870,
  thighTrackNo: "股道号802",
  thighTrackType: 792,
  direction: 153,
  tieCategory: 311,
  maxGradient: 260,
  curveRadius: 253,
  gradeSectionLength: 106,
  thighTrackLength: 991,
  sortNum: "排序编号661",
  status: 228,
  isDelete: 513,
  createTime: "2019-11-23 1:3:35",
  updateTime: "2019-11-23 1:3:35",
  operator: 447
};
}

thighTrackInfo.columnsArray=columnsArray;
thighTrackInfo.create=create;
module.exports=thighTrackInfo;