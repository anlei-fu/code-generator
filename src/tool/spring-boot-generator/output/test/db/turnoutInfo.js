let turnoutInfo = {
  name: "turnoutInfo",
  description: "道岔信息",
  columns: {
    commissioningDate: {
      name: "commissioningDate",
      description: "投产日期",
      nullable: true,
      type: {
        name: "date"
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
    direction: {
      name: "direction",
      description: "行别",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    frogNo: {
      name: "frogNo",
      description: "辙叉号",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    frogStructure: {
      name: "frogStructure",
      description: "辙叉构造",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    hasMovablePointFrog: {
      name: "hasMovablePointFrog",
      description: "是否包含可动心轨",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    hasSwitchRail: {
      name: "hasSwitchRail",
      description: "是否包含道岔尖轨",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    id: {
      name: "id",
      description: "道岔编号",
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
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    lineId: {
      name: "lineId",
      description: "线路编号",
      nullable: false,
      type: {
        name: "int",
        length: 11
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
    operator: {
      name: "operator",
      description: "操作人",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    position: {
      name: "position",
      description: "岔道位置",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
        length: 225
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
      nullable: false,
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
    switchRailType: {
      name: "switchRailType",
      description: "尖轨类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    thighTrackId: {
      name: "thighTrackId",
      description: "股道号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    trackType: {
      name: "trackType",
      description: "轨型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    turnoutKind: {
      name: "turnoutKind",
      description: "道岔种类",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
    turnoutNo: {
      name: "turnoutNo",
      description: "岔道号",
      nullable: false,
      type: {
        name: "varchar",
        length: 32
      }
    },
    turnoutType: {
      name: "turnoutType",
      description: "道岔类型",
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
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    }
  }
};

let columnsArray = [
  "commissioningDate",
  "createTime",
  "direction",
  "frogNo",
  "frogStructure",
  "hasMovablePointFrog",
  "hasSwitchRail",
  "id",
  "isDelete",
  "lineId",
  "miles",
  "operator",
  "position",
  "remark",
  "sortNum",
  "stationId",
  "status",
  "switchRailType",
  "thighTrackId",
  "trackType",
  "turnoutKind",
  "turnoutLength",
  "turnoutNo",
  "turnoutType",
  "updateTime",
  "workareaId"
];

function create() {
  return {
  commissioningDate: "2019-11-18 1::37",
  createTime: "2019-12-25 1::37",
  direction: 453,
  frogNo: "辙叉号166",
  frogStructure: 624,
  hasMovablePointFrog: 205,
  hasSwitchRail: 659,
  id: 2,
  isDelete: 533,
  lineId: 479,
  miles: 332,
  operator: 410,
  position: 820,
  remark: "备注371",
  sortNum: "排序编号84",
  stationId: 249,
  status: 6,
  switchRailType: 402,
  thighTrackId: 783,
  trackType: 259,
  turnoutKind: 47,
  turnoutLength: 535,
  turnoutNo: "岔道号797",
  turnoutType: 129,
  updateTime: "2019-12-25 1::37",
  workareaId: 883
};
}

turnoutInfo.columnsArray=columnsArray;
turnoutInfo.create=create;
module.exports=turnoutInfo;