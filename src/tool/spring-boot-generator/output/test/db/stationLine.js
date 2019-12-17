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
  centDistance: 193,
  createTime: "2019-12-24 :3:35",
  direction: 525,
  endDistance: 206,
  id: 36,
  isDelete: 189,
  lineId: 246,
  operator: 104,
  sortNum: "排序编号557",
  startDistance: 190,
  stationId: 476,
  status: 813,
  updateTime: "2019-12-24 :3:35"
};
}

stationLine.columnsArray=columnsArray;
stationLine.create=create;
module.exports=stationLine;