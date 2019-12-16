let detectBoundaryInfo = {
  name: "detectBoundaryInfo",
  description: "探伤管界",
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
      description: "探伤管界编号",
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
    longChain: {
      name: "longChain",
      description: "长链标记",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    operateStatus: {
      name: "operateStatus",
      description: "运营状态",
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
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
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
        length: 11
      }
    },
    trackDisCategory: {
      name: "trackDisCategory",
      description: "轨距类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    trackType: {
      name: "trackType",
      description: "轨道类型",
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
  "trackDisCategory",
  "trackType",
  "updateTime",
  "workshopId"
];

function create() {
  return {
  createTime: "2019-12-23 2:3:41",
  direction: 196,
  endMiles: 115,
  id: 102,
  isDelete: 259,
  lineId: 921,
  longChain: 253,
  operateStatus: 618,
  operator: 777,
  remark: "备注322",
  startMiles: 788,
  status: 608,
  trackDisCategory: 110,
  trackType: 735,
  updateTime: "2019-12-15 2:3:41",
  workshopId: 846
};
}

detectBoundaryInfo.columnsArray=columnsArray;
detectBoundaryInfo.create=create;
module.exports=detectBoundaryInfo;