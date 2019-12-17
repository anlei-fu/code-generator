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
        length: 11
      }
    },
    holeNum: {
      name: "holeNum",
      description: "带孔数量",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
        length: 11
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
      description: "道岔位置",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    positionCategory: {
      name: "positionCategory",
      description: "焊缝位置类别",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    reinforceWelding: {
      name: "reinforceWelding",
      description: "是否加固焊接",
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
    side: {
      name: "side",
      description: "线别",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
    thighTrackId: {
      name: "thighTrackId",
      description: "股道编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    thignTrackCategory: {
      name: "thignTrackCategory",
      description: "股别",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
        length: 11
      }
    },
    turnoutId: {
      name: "turnoutId",
      description: "道岔号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    turnoutThignCategory: {
      name: "turnoutThignCategory",
      description: "道岔股别",
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
        length: 255
      }
    },
    welderUnit: {
      name: "welderUnit",
      description: "焊接人员所属单位",
      nullable: true,
      type: {
        name: "varchar",
        length: 255
      }
    },
    weldingNo: {
      name: "weldingNo",
      description: "焊缝标识",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    weldingType: {
      name: "weldingType",
      description: "焊缝类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    weldingWay: {
      name: "weldingWay",
      description: "焊缝方式",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    workareaId: {
      name: "workareaId",
      description: "工区编号",
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
  createTime: "2020-1-17 :3:35",
  direction: 48,
  holeNum: 560,
  id: 570,
  innerGlancingFlatness: 40,
  isDelete: 812,
  lineId: 883,
  miles: 972,
  operator: 916,
  position: 425,
  positionCategory: 331,
  reinforceWelding: 902,
  remark: "备注92",
  side: 322,
  stationId: 818,
  status: 788,
  thighTrackId: 591,
  thignTrackCategory: 787,
  trackGlancingFlatness: 38,
  trackId: 351,
  turnoutId: 172,
  turnoutThignCategory: 683,
  updateTime: "2019-12-17 :3:35",
  weldDate: "2019-11-17 :3:35",
  weldTrackTemperature: 932,
  weldUser: "鐒婃帴浜?170",
  welderUnit: "焊接人员所属单位255",
  weldingNo: "焊缝标识554",
  weldingType: 191,
  weldingWay: 70,
  workareaId: 328
};
}

weldingInfo.columnsArray=columnsArray;
weldingInfo.create=create;
module.exports=weldingInfo;