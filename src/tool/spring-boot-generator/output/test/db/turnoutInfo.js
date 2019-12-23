let turnoutInfo = {
  name: "turnoutInfo",
  description: "道岔信息",
  columns: {
    id: {
      name: "id",
      description: "道岔编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    turnoutNo: {
      name: "turnoutNo",
      description: "岔道号",
      nullable: false,
      type: {
        name: "varchar",
        length: null
      }
    },
    stationId: {
      name: "stationId",
      description: "车站编号",
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    lineId: {
      name: "lineId",
      description: "线路编号",
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    workareaId: {
      name: "workareaId",
      description: "宸ュ尯缂栧彿",
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    thighTrackId: {
      name: "thighTrackId",
      description: "股道号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    position: {
      name: "position",
      description: "岔道位置",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    frogNo: {
      name: "frogNo",
      description: "辙叉号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    frogStructure: {
      name: "frogStructure",
      description: "辙叉构造",
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
    turnoutKind: {
      name: "turnoutKind",
      description: "道岔种类",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    turnoutType: {
      name: "turnoutType",
      description: "道岔类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    trackType: {
      name: "trackType",
      description: "轨型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    switchRailType: {
      name: "switchRailType",
      description: "尖轨类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    hasSwitchRail: {
      name: "hasSwitchRail",
      description: "是否包含道岔尖轨",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    hasMovablePointFrog: {
      name: "hasMovablePointFrog",
      description: "是否包含可动心轨",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    miles: {
      name: "miles",
      description: "里程",
      nullable: true,
      type: {
        name: "float"
      }
    },
    turnoutLength: {
      name: "turnoutLength",
      description: "道岔全长",
      nullable: true,
      type: {
        name: "float"
      }
    },
    commissioningDate: {
      name: "commissioningDate",
      description: "投产日期",
      nullable: true,
      type: {
        name: "date"
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
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    isDelete: {
      name: "isDelete",
      description: "删除标记",
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
  "turnoutNo",
  "stationId",
  "lineId",
  "workareaId",
  "thighTrackId",
  "position",
  "frogNo",
  "frogStructure",
  "direction",
  "turnoutKind",
  "turnoutType",
  "trackType",
  "switchRailType",
  "hasSwitchRail",
  "hasMovablePointFrog",
  "miles",
  "turnoutLength",
  "commissioningDate",
  "sortNum",
  "status",
  "remark",
  "isDelete",
  "createTime",
  "updateTime",
  "operator"
];

function create() {
  return {
  id: 977,
  turnoutNo: "岔道号811",
  stationId: 147,
  lineId: 157,
  workareaId: 489,
  thighTrackId: 816,
  position: 598,
  frogNo: "辙叉号122",
  frogStructure: 647,
  direction: 273,
  turnoutKind: 145,
  turnoutType: 564,
  trackType: 970,
  switchRailType: 537,
  hasSwitchRail: 897,
  hasMovablePointFrog: 281,
  miles: 863,
  turnoutLength: 318,
  commissioningDate: "2020-1-23 1:3:35",
  sortNum: "排序编号216",
  status: 444,
  remark: "备注426",
  isDelete: 993,
  createTime: "2019-12-22 1:3:35",
  updateTime: "2019-12-22 1:3:35",
  operator: 879
};
}

turnoutInfo.columnsArray=columnsArray;
turnoutInfo.create=create;
module.exports=turnoutInfo;