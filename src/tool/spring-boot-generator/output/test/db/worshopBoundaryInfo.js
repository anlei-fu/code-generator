let worshopBoundaryInfo = {
  name: "worshopBoundaryInfo",
  description: "线路车间管界",
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
    endMiles: {
      name: "endMiles",
      description: "终点里程",
      nullable: true,
      type: {
        name: "float"
      }
    },
    id: {
      name: "id",
      description: "车间管界编号",
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
    longChain: {
      name: "longChain",
      description: "长链标记",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    operateStatus: {
      name: "operateStatus",
      description: "运营状态",
      nullable: true,
      type: {
        name: "int",
        length: null
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
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    startMiles: {
      name: "startMiles",
      description: "起点里程",
      nullable: true,
      type: {
        name: "float"
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
    trackCategory: {
      name: "trackCategory",
      description: "轨道类别",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    trackType: {
      name: "trackType",
      description: "轨道类型",
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
  "endMiles",
  "id",
  "isDelete",
  "lineId",
  "longChain",
  "operateStatus",
  "operator",
  "remark",
  "startMiles",
  "status",
  "trackCategory",
  "trackType",
  "updateTime",
  "workareaId"
];

function create() {
  return {
  createTime: "2019-12-19 1:4:50",
  direction: 968,
  endMiles: 734,
  id: 526,
  isDelete: 586,
  lineId: 104,
  longChain: 577,
  operateStatus: 28,
  operator: 199,
  remark: "备注476",
  startMiles: 431,
  status: 50,
  trackCategory: 312,
  trackType: 190,
  updateTime: "2019-12-18 1:4:50",
  workareaId: 484
};
}

worshopBoundaryInfo.columnsArray=columnsArray;
worshopBoundaryInfo.create=create;
module.exports=worshopBoundaryInfo;