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
    thighTrackNo: {
      name: "thighTrackNo",
      description: "股道号",
      nullable: true,
      type: {
        name: "varchar",
        length: 16
      }
    },
    thignTrackLength: {
      name: "thignTrackLength",
      description: "股道长度",
      nullable: true,
      type: {
        name: "float"
      }
    },
    thignTrackType: {
      name: "thignTrackType",
      description: "股道类型",
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
    workshopId: {
      name: "workshopId",
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
  "thighTrackNo",
  "thignTrackLength",
  "thignTrackType",
  "tieCategory",
  "updateTime",
  "workshopId"
];

function create() {
  return {
  createTime: "2019-12-23 2:3:41",
  curveRadius: 126,
  direction: 829,
  gradeSectionLength: 858,
  id: 767,
  isDelete: 637,
  lineId: 848,
  maxGradient: 456,
  operator: 548,
  sortNum: "排序编号220",
  stationId: 73,
  status: 341,
  thighTrackNo: "股道号656",
  thignTrackLength: 296,
  thignTrackType: 725,
  tieCategory: 923,
  updateTime: "2019-11-16 2:3:41",
  workshopId: 728
};
}

thighTrackInfo.columnsArray=columnsArray;
thighTrackInfo.create=create;
module.exports=thighTrackInfo;