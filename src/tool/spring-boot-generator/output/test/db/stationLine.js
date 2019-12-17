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
  centDistance: 247,
  createTime: "2019-12-24 2:3:19",
  direction: 680,
  endDistance: 602,
  id: 617,
  isDelete: 575,
  lineId: 846,
  operator: 604,
  sortNum: "排序编号326",
  startDistance: 287,
  stationId: 324,
  status: 978,
  updateTime: "2019-12-16 2:3:19"
};
}

stationLine.columnsArray=columnsArray;
stationLine.create=create;
module.exports=stationLine;