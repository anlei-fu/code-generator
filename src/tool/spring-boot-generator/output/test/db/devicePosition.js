let devicePosition = {
  name: "devicePosition",
  description: "设备-位置映射",
  columns: {
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
    deviceCode: {
      name: "deviceCode",
      description: "设备位置唯一编号",
      nullable: true,
      type: {
        name: "varchar",
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
    deviceNo: {
      name: "deviceNo",
      description: "设备编号(对应导入标号)",
      nullable: true,
      type: {
        name: "varchar",
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
  "id",
  "deviceCode",
  "trackId",
  "deviceNo",
  "lineId",
  "lineName",
  "lineCategory",
  "direction",
  "stationId",
  "miles",
  "thighTrackId",
  "stockExchange",
  "createTime",
  "updateTime"
];

function create() {
  return {
  id: 178,
  deviceCode: "设备位置唯一编号25",
  trackId: 880,
  deviceNo: "设备编号(对应导入标号)76",
  lineId: 12,
  lineName: "线名114",
  lineCategory: 984,
  direction: 71,
  stationId: 610,
  miles: 268,
  thighTrackId: 730,
  stockExchange: 260,
  createTime: "2019-11-23 1:3:35",
  updateTime: "2020-1-23 1:3:35"
};
}

devicePosition.columnsArray=columnsArray;
devicePosition.create=create;
module.exports=devicePosition;