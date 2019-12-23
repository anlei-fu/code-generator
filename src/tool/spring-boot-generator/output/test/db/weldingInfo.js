let weldingInfo = {
  name: "weldingInfo",
  description: "焊缝信息",
  columns: {
    id: {
      name: "id",
      description: "焊缝编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    weldingNo: {
      name: "weldingNo",
      description: "焊缝标识",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    workareaId: {
      name: "workareaId",
      description: "工区编号",
      nullable: true,
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
    thighTrackId: {
      name: "thighTrackId",
      description: "股道编号",
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
    miles: {
      name: "miles",
      description: "里程",
      nullable: true,
      type: {
        name: "float"
      }
    },
    side: {
      name: "side",
      description: "线别",
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
    turnoutId: {
      name: "turnoutId",
      description: "道岔号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    weldingType: {
      name: "weldingType",
      description: "焊缝类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    weldingWay: {
      name: "weldingWay",
      description: "焊缝方式",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    positionCategory: {
      name: "positionCategory",
      description: "焊缝位置类别",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    trackId: {
      name: "trackId",
      description: "轨道编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    thignTrackCategory: {
      name: "thignTrackCategory",
      description: "股别",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    turnoutThignCategory: {
      name: "turnoutThignCategory",
      description: "道岔股别",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    position: {
      name: "position",
      description: "道岔位置",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    holeNum: {
      name: "holeNum",
      description: "带孔数量",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    trackGlancingFlatness: {
      name: "trackGlancingFlatness",
      description: "轨面平直度",
      nullable: true,
      type: {
        name: "float"
      }
    },
    innerGlancingFlatness: {
      name: "innerGlancingFlatness",
      description: "内测平直度",
      nullable: true,
      type: {
        name: "float"
      }
    },
    weldTrackTemperature: {
      name: "weldTrackTemperature",
      description: "焊接时轨温",
      nullable: true,
      type: {
        name: "float"
      }
    },
    weldDate: {
      name: "weldDate",
      description: "焊接日期",
      nullable: true,
      type: {
        name: "date"
      }
    },
    reinforceWelding: {
      name: "reinforceWelding",
      description: "是否加固焊接",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    weldUser: {
      name: "weldUser",
      description: "鐒婃帴浜?",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    welderUnit: {
      name: "welderUnit",
      description: "焊接人员所属单位",
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
    remark: {
      name: "remark",
      description: "备注",
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
  "weldingNo",
  "workareaId",
  "stationId",
  "thighTrackId",
  "lineId",
  "miles",
  "side",
  "direction",
  "turnoutId",
  "weldingType",
  "weldingWay",
  "positionCategory",
  "trackId",
  "thignTrackCategory",
  "turnoutThignCategory",
  "position",
  "holeNum",
  "trackGlancingFlatness",
  "innerGlancingFlatness",
  "weldTrackTemperature",
  "weldDate",
  "reinforceWelding",
  "weldUser",
  "welderUnit",
  "status",
  "isDelete",
  "remark",
  "createTime",
  "updateTime",
  "operator"
];

function create() {
  return {
  id: 441,
  weldingNo: "焊缝标识448",
  workareaId: 437,
  stationId: 108,
  thighTrackId: 364,
  lineId: 656,
  miles: 497,
  side: 177,
  direction: 327,
  turnoutId: 268,
  weldingType: 19,
  weldingWay: 285,
  positionCategory: 721,
  trackId: 260,
  thignTrackCategory: 412,
  turnoutThignCategory: 30,
  position: 580,
  holeNum: 407,
  trackGlancingFlatness: 270,
  innerGlancingFlatness: 651,
  weldTrackTemperature: 703,
  weldDate: "2019-12-23 1:3:35",
  reinforceWelding: 913,
  weldUser: "鐒婃帴浜?670",
  welderUnit: "焊接人员所属单位921",
  status: 856,
  isDelete: 684,
  remark: "备注48",
  createTime: "2019-12-23 1:3:35",
  updateTime: "2019-12-23 1:3:35",
  operator: 640
};
}

weldingInfo.columnsArray=columnsArray;
weldingInfo.create=create;
module.exports=weldingInfo;