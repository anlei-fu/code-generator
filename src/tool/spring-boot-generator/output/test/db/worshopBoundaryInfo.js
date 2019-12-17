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
      description: "车间管界编号",
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
    trackCategory: {
      name: "trackCategory",
      description: "轨道类别",
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
  "trackCategory",
  "trackType",
  "updateTime",
  "workshopId"
];

function create() {
  return {
  createTime: "2019-11-17 2:3:19",
  direction: 908,
  endMiles: 532,
  id: 344,
  isDelete: 480,
  lineId: 654,
  longChain: 745,
  operateStatus: 344,
  operator: 973,
  remark: "备注752",
  startMiles: 842,
  status: 843,
  trackCategory: 76,
  trackType: 379,
  updateTime: "2019-12-17 2:3:19",
  workshopId: 24
};
}

worshopBoundaryInfo.columnsArray=columnsArray;
worshopBoundaryInfo.create=create;
module.exports=worshopBoundaryInfo;