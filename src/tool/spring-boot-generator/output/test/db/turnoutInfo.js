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
    hasMovablePointFrog: {
      name: "hasMovablePointFrog",
      description: "是否包含可动心轨",
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
    isDelete: {
      name: "isDelete",
      description: "删除标记",
      nullable: true,
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
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
        length: null
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
    stationId: {
      name: "stationId",
      description: "车站编号",
      nullable: false,
      type: {
        name: "int",
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
    switchRailType: {
      name: "switchRailType",
      description: "尖轨类型",
      nullable: true,
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
    trackType: {
      name: "trackType",
      description: "轨型",
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
        length: null
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
  commissioningDate: "2019-12-19 1:4:50",
  createTime: "2019-12-26 1:4:50",
  direction: 935,
  frogNo: "辙叉号900",
  frogStructure: 218,
  hasMovablePointFrog: 534,
  hasSwitchRail: 703,
  id: 718,
  isDelete: 634,
  lineId: 876,
  miles: 278,
  operator: 544,
  position: 169,
  remark: "备注981",
  sortNum: "排序编号241",
  stationId: 267,
  status: 782,
  switchRailType: 682,
  thighTrackId: 60,
  trackType: 785,
  turnoutKind: 574,
  turnoutLength: 722,
  turnoutNo: "岔道号698",
  turnoutType: 810,
  updateTime: "2019-12-19 1:4:50",
  workareaId: 770
};
}

turnoutInfo.columnsArray=columnsArray;
turnoutInfo.create=create;
module.exports=turnoutInfo;