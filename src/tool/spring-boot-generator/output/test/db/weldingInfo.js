let weldingInfo = {
  name: "weldingInfo",
  description: "焊缝信息",
  columns: {
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
    holeNum: {
      name: "holeNum",
      description: "带孔数量",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
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
    innerGlancingFlatness: {
      name: "innerGlancingFlatness",
      description: "内测平直度",
      nullable: true,
      type: {
        name: "float"
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
      description: "道岔位置",
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
    reinforceWelding: {
      name: "reinforceWelding",
      description: "是否加固焊接",
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
    side: {
      name: "side",
      description: "线别",
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
    status: {
      name: "status",
      description: "状态",
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
    thignTrackCategory: {
      name: "thignTrackCategory",
      description: "股别",
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
    trackId: {
      name: "trackId",
      description: "轨道编号",
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
    turnoutThignCategory: {
      name: "turnoutThignCategory",
      description: "道岔股别",
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
    weldDate: {
      name: "weldDate",
      description: "焊接日期",
      nullable: true,
      type: {
        name: "date"
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
    weldingNo: {
      name: "weldingNo",
      description: "焊缝标识",
      nullable: true,
      type: {
        name: "varchar",
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
    workareaId: {
      name: "workareaId",
      description: "工区编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    }
  }
};

let columnsArray = [
  "createTime",
  "direction",
  "holeNum",
  "id",
  "innerGlancingFlatness",
  "isDelete",
  "lineId",
  "miles",
  "operator",
  "position",
  "positionCategory",
  "reinforceWelding",
  "remark",
  "side",
  "stationId",
  "status",
  "thighTrackId",
  "thignTrackCategory",
  "trackGlancingFlatness",
  "trackId",
  "turnoutId",
  "turnoutThignCategory",
  "updateTime",
  "weldDate",
  "weldTrackTemperature",
  "weldUser",
  "welderUnit",
  "weldingNo",
  "weldingType",
  "weldingWay",
  "workareaId"
];

function create() {
  return {
  createTime: "2019-12-19 1:4:50",
  direction: 297,
  holeNum: 441,
  id: 433,
  innerGlancingFlatness: 804,
  isDelete: 399,
  lineId: 925,
  miles: 333,
  operator: 918,
  position: 811,
  positionCategory: 215,
  reinforceWelding: 129,
  remark: "备注374",
  side: 807,
  stationId: 112,
  status: 447,
  thighTrackId: 12,
  thignTrackCategory: 412,
  trackGlancingFlatness: 521,
  trackId: 744,
  turnoutId: 719,
  turnoutThignCategory: 465,
  updateTime: "2019-12-18 1:4:50",
  weldDate: "2020-1-19 1:4:50",
  weldTrackTemperature: 953,
  weldUser: "鐒婃帴浜?393",
  welderUnit: "焊接人员所属单位810",
  weldingNo: "焊缝标识366",
  weldingType: 845,
  weldingWay: 556,
  workareaId: 949
};
}

weldingInfo.columnsArray=columnsArray;
weldingInfo.create=create;
module.exports=weldingInfo;