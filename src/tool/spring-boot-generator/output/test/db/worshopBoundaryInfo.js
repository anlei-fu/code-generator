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
  createTime: "2019-12-16 2:3:41",
  direction: 87,
  endMiles: 660,
  id: 59,
  isDelete: 163,
  lineId: 911,
  longChain: 716,
  operateStatus: 414,
  operator: 33,
  remark: "备注146",
  startMiles: 80,
  status: 688,
  trackCategory: 444,
  trackType: 313,
  updateTime: "2019-12-15 2:3:41",
  workshopId: 936
};
}

worshopBoundaryInfo.columnsArray=columnsArray;
worshopBoundaryInfo.create=create;
module.exports=worshopBoundaryInfo;