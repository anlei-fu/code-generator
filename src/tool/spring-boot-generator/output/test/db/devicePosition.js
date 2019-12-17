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
        length: 32
      }
    },
    deviceNo: {
      name: "deviceNo",
      description: "设备编号(对应导入标号)",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
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
    id: {
      name: "id",
      description: "主键",
      isPk: true,
      autoIncrement: true,
      nullable: false,
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
    trackId: {
      name: "trackId",
      description: "钢轨id",
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
  createTime: "2019-11-17 :3:35",
  deviceCode: "设备位置唯一编号537",
  deviceNo: "设备编号(对应导入标号)845",
  direction: 842,
  id: 798,
  lineCategory: 97,
  lineId: 974,
  lineName: "线名834",
  miles: 412,
  stationId: 331,
  stockExchange: 264,
  thighTrackId: 202,
  trackId: 500,
  updateTime: "2020-1-17 :3:35"
};
}

devicePosition.columnsArray=columnsArray;
devicePosition.create=create;
module.exports=devicePosition;