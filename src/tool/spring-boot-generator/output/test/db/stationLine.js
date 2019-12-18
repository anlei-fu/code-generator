let stationLine = {
  name: "stationLine",
  description: "车站线路",
  columns: {
    centDistance: {
      name: "centDistance",
      description: "中心点距离",
      nullable: true,
      type: {
        name: "float"
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
        length: 11
      }
    },
    endDistance: {
      name: "endDistance",
      description: "终端距离",
      nullable: true,
      type: {
        name: "float"
      }
    },
    id: {
      name: "id",
      description: "编号",
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
      nullable: false,
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
    startDistance: {
      name: "startDistance",
      description: "开始距离",
      nullable: true,
      type: {
        name: "float"
      }
    },
    stationId: {
      name: "stationId",
      description: "车站编号",
      nullable: false,
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
    updateTime: {
      name: "updateTime",
      description: "更新时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    }
  }
};

let columnsArray = [
  "centDistance",
  "createTime",
  "direction",
  "endDistance",
  "id",
  "isDelete",
  "lineId",
  "operator",
  "sortNum",
  "startDistance",
  "stationId",
  "status",
  "updateTime"
];

function create() {
  return {
  centDistance: 939,
  createTime: "2019-11-18 1::37",
  direction: 871,
  endDistance: 96,
  id: 884,
  isDelete: 229,
  lineId: 225,
  operator: 661,
  sortNum: "排序编号797",
  startDistance: 949,
  stationId: 225,
  status: 178,
  updateTime: "2019-11-18 1::37"
};
}

stationLine.columnsArray=columnsArray;
stationLine.create=create;
module.exports=stationLine;