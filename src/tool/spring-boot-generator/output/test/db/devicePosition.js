let devicePosition = {
  name: "devicePosition",
  description: "设备-位置映射",
  columns: {
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    deviceCode: {
      name: "deviceCode",
      description: "设备位置唯一编号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    deviceNo: {
      name: "deviceNo",
      description: "设备编号(对应导入标号)",
      nullable: true,
      type: {
        name: "varchar",
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
    id: {
      name: "id",
      description: "主键",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
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
    miles: {
      name: "miles",
      description: "里程",
      nullable: true,
      type: {
        name: "float"
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
    stockExchange: {
      name: "stockExchange",
      description: "股别",
      nullable: true,
      type: {
        name: "int",
        length: null
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
    trackId: {
      name: "trackId",
      description: "钢轨id",
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
    }
  }
};

let columnsArray = [
  "createTime",
  "deviceCode",
  "deviceNo",
  "direction",
  "id",
  "lineCategory",
  "lineId",
  "lineName",
  "miles",
  "stationId",
  "stockExchange",
  "thighTrackId",
  "trackId",
  "updateTime"
];

function create() {
  return {
  createTime: "2020-1-19 1:4:50",
  deviceCode: "设备位置唯一编号78",
  deviceNo: "设备编号(对应导入标号)521",
  direction: 640,
  id: 707,
  lineCategory: 431,
  lineId: 233,
  lineName: "线名587",
  miles: 555,
  stationId: 575,
  stockExchange: 360,
  thighTrackId: 868,
  trackId: 411,
  updateTime: "2019-11-19 1:4:50"
};
}

devicePosition.columnsArray=columnsArray;
devicePosition.create=create;
module.exports=devicePosition;