let stationLine = {
  name: "stationLine",
  description: "车站线路",
  columns: {
    id: {
      name: "id",
      description: "编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    stationId: {
      name: "stationId",
      description: "车站编号",
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    lineId: {
      name: "lineId",
      description: "线路编号",
      nullable: false,
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
    centDistance: {
      name: "centDistance",
      description: "中心点距离",
      nullable: true,
      type: {
        name: "float"
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
    endDistance: {
      name: "endDistance",
      description: "终端距离",
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
    sortNum: {
      name: "sortNum",
      description: "排序编号",
      nullable: true,
      type: {
        name: "varchar",
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
  "stationId",
  "lineId",
  "direction",
  "centDistance",
  "startDistance",
  "endDistance",
  "status",
  "sortNum",
  "isDelete",
  "createTime",
  "updateTime",
  "operator"
];

function create() {
  return {
  id: 659,
  stationId: 232,
  lineId: 466,
  direction: 729,
  centDistance: 214,
  startDistance: 219,
  endDistance: 758,
  status: 974,
  sortNum: "排序编号939",
  isDelete: 377,
  createTime: "2019-12-22 1:3:35",
  updateTime: "2019-12-22 1:3:35",
  operator: 828
};
}

stationLine.columnsArray=columnsArray;
stationLine.create=create;
module.exports=stationLine;