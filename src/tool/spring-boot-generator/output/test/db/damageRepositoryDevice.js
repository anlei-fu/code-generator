let damageRepositoryDevice = {
  name: "damageRepositoryDevice",
  description: "伤损归档-设备扩展",
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
    deviceName: {
      name: "deviceName",
      description: "设备名称",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    deviceCode: {
      name: "deviceCode",
      description: "位置唯一钢轨号/焊缝号/岔道号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    deviceTypeCode: {
      name: "deviceTypeCode",
      description: "道岔配轨/焊缝(类型)号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    trackNo: {
      name: "trackNo",
      description: "钢轨号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    turnoutNo: {
      name: "turnoutNo",
      description: "道岔号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    deviceType: {
      name: "deviceType",
      description: "设备类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    sealNumber: {
      name: "sealNumber",
      description: "钢轨热印号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    factory: {
      name: "factory",
      description: "生产厂",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    nature: {
      name: "nature",
      description: "材质",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    totalWeight: {
      name: "totalWeight",
      description: "累计通过总重",
      nullable: true,
      type: {
        name: "float"
      }
    },
    userDate: {
      name: "userDate",
      description: "出厂年月",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    radius: {
      name: "radius",
      description: "曲线半径",
      nullable: true,
      type: {
        name: "float"
      }
    },
    sleeper: {
      name: "sleeper",
      description: "轨枕",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    railType: {
      name: "railType",
      description: "铁轨类型",
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
  "deviceName",
  "deviceCode",
  "deviceTypeCode",
  "trackNo",
  "turnoutNo",
  "deviceType",
  "sealNumber",
  "factory",
  "nature",
  "totalWeight",
  "userDate",
  "radius",
  "sleeper",
  "railType",
  "createTime",
  "updateTime"
];

function create() {
  return {
  orderDetailId: 82,
  deviceName: "设备名称549",
  deviceCode: "位置唯一钢轨号/焊缝号/岔道号526",
  deviceTypeCode: "道岔配轨/焊缝(类型)号253",
  trackNo: "钢轨号490",
  turnoutNo: "道岔号504",
  deviceType: 53,
  sealNumber: "钢轨热印号468",
  factory: "生产厂117",
  nature: "材质601",
  totalWeight: 679,
  userDate: "出厂年月246",
  radius: 602,
  sleeper: 851,
  railType: 420,
  createTime: "2019-12-30 1:3:35",
  updateTime: "2019-12-23 1:3:35"
};
}

damageRepositoryDevice.columnsArray=columnsArray;
damageRepositoryDevice.create=create;
module.exports=damageRepositoryDevice;