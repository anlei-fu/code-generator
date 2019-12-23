let damageRepositoryPosition = {
  name: "damageRepositoryPosition",
  description: "伤损归档-受伤位置扩展",
  columns: {
    orderDetailId: {
      name: "orderDetailId",
      description: "记录编号",
      isPk: true,
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
    lineName: {
      name: "lineName",
      description: "线名",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    lineCategory: {
      name: "lineCategory",
      description: "线别",
      nullable: true,
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
    stationId: {
      name: "stationId",
      description: "车站编号",
      nullable: true,
      type: {
        name: "int",
        length: null
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
    thighTrackId: {
      name: "thighTrackId",
      description: "股道号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    stockExchange: {
      name: "stockExchange",
      description: "股别",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    damagePosition: {
      name: "damagePosition",
      description: "损伤位置",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    holePosition: {
      name: "holePosition",
      description: "孔裂位置",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    bridgeTunnel: {
      name: "bridgeTunnel",
      description: "桥隧道口",
      nullable: true,
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
    }
  }
};

let columnsArray = [
  "orderDetailId",
  "lineId",
  "lineName",
  "lineCategory",
  "direction",
  "stationId",
  "miles",
  "thighTrackId",
  "stockExchange",
  "damagePosition",
  "holePosition",
  "bridgeTunnel",
  "createTime",
  "updateTime"
];

function create() {
  return {
  orderDetailId: 406,
  lineId: 118,
  lineName: "线名173",
  lineCategory: 871,
  direction: 264,
  stationId: 31,
  miles: 479,
  thighTrackId: 849,
  stockExchange: 340,
  damagePosition: 631,
  holePosition: 673,
  bridgeTunnel: 198,
  createTime: "2019-12-23 1:3:35",
  updateTime: "2019-12-22 1:3:35"
};
}

damageRepositoryPosition.columnsArray=columnsArray;
damageRepositoryPosition.create=create;
module.exports=damageRepositoryPosition;