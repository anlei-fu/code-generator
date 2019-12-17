let damageRepositoryPosition = {
  name: "damageRepositoryPosition",
  description: "伤损归档-受伤位置扩展",
  columns: {
    bridgeTunnel: {
      name: "bridgeTunnel",
      description: "桥隧道口",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
    damagePosition: {
      name: "damagePosition",
      description: "损伤位置",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
    holePosition: {
      name: "holePosition",
      description: "孔裂位置",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    lineCategory: {
      name: "lineCategory",
      description: "线别",
      nullable: true,
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
    lineName: {
      name: "lineName",
      description: "线名",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
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
    orderDetailId: {
      name: "orderDetailId",
      description: "记录编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
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
    stockExchange: {
      name: "stockExchange",
      description: "股别",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    thighTrackId: {
      name: "thighTrackId",
      description: "股道号",
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
  "bridgeTunnel",
  "createTime",
  "damagePosition",
  "direction",
  "holePosition",
  "lineCategory",
  "lineId",
  "lineName",
  "miles",
  "orderDetailId",
  "stationId",
  "stockExchange",
  "thighTrackId",
  "updateTime"
];

function create() {
  return {
  bridgeTunnel: 654,
  createTime: "2019-12-24 2:3:19",
  damagePosition: 855,
  direction: 695,
  holePosition: 64,
  lineCategory: 649,
  lineId: 776,
  lineName: "线名738",
  miles: 383,
  orderDetailId: 499,
  stationId: 993,
  stockExchange: 949,
  thighTrackId: 659,
  updateTime: "2019-12-17 2:3:19"
};
}

damageRepositoryPosition.columnsArray=columnsArray;
damageRepositoryPosition.create=create;
module.exports=damageRepositoryPosition;