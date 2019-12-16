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
    status: {
      name: "status",
      description: "状态",
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
    weldUserId: {
      name: "weldUserId",
      description: "焊接人",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
  "remark",
  "side",
  "status",
  "thignTrackCategory",
  "trackGlancingFlatness",
  "trackId",
  "turnoutId",
  "turnoutThignCategory",
  "updateTime",
  "weldDate",
  "weldTrackTemperature",
  "weldUserId",
  "weldingNo",
  "weldingType",
  "weldingWay",
  "workareaId"
];

function create() {
  return {
  createTime: "2019-12-15 2:3:41",
  direction: 156,
  holeNum: 283,
  id: 468,
  innerGlancingFlatness: 983,
  isDelete: 199,
  lineId: 891,
  miles: 796,
  operator: 755,
  position: 423,
  positionCategory: 377,
  remark: "备注549",
  side: 471,
  status: 807,
  thignTrackCategory: 466,
  trackGlancingFlatness: 749,
  trackId: 667,
  turnoutId: 534,
  turnoutThignCategory: 828,
  updateTime: "2019-12-15 2:3:41",
  weldDate: "2019-12-15 2:3:41",
  weldTrackTemperature: 700,
  weldUserId: 901,
  weldingNo: "焊缝标识421",
  weldingType: 205,
  weldingWay: 290,
  workareaId: 916
};
}

weldingInfo.columnsArray=columnsArray;
weldingInfo.create=create;
module.exports=weldingInfo;