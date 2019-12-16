let damageRepositoryDevice = {
  name: "damageRepositoryDevice",
  description: "伤损归档-设备扩展",
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
      description: "钢轨号/焊缝号/岔道号",
      nullable: true,
      type: {
        name: "varchar",
        length: 225
      }
    },
    deviceName: {
      name: "deviceName",
      description: "设备名称",
      nullable: true,
      type: {
        name: "varchar",
        length: 225
      }
    },
    deviceType: {
      name: "deviceType",
      description: "设备类型",
      nullable: true,
      type: {
        name: "int",
        length: 32
      }
    },
    deviceTypeCode: {
      name: "deviceTypeCode",
      description: "道岔配轨/焊缝(类型)号",
      nullable: true,
      type: {
        name: "varchar",
        length: 225
      }
    },
    factory: {
      name: "factory",
      description: "生产厂",
      nullable: true,
      type: {
        name: "varchar",
        length: 225
      }
    },
    nature: {
      name: "nature",
      description: "材质",
      nullable: true,
      type: {
        name: "varchar",
        length: 225
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
    radius: {
      name: "radius",
      description: "曲线半径",
      nullable: true,
      type: {
        name: "float"
      }
    },
    railType: {
      name: "railType",
      description: "轨型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    sealNumber: {
      name: "sealNumber",
      description: "钢轨热印号",
      nullable: true,
      type: {
        name: "varchar",
        length: 225
      }
    },
    sleeper: {
      name: "sleeper",
      description: "轨枕",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
    updateTime: {
      name: "updateTime",
      description: "更新时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    userDate: {
      name: "userDate",
      description: "出厂年月",
      nullable: true,
      type: {
        name: "varchar",
        length: 225
      }
    }
  }
};

let columnsArray = [
  "createTime",
  "deviceCode",
  "deviceName",
  "deviceType",
  "deviceTypeCode",
  "factory",
  "nature",
  "orderDetailId",
  "radius",
  "railType",
  "sealNumber",
  "sleeper",
  "totalWeight",
  "updateTime",
  "userDate"
];

function create() {
  return {
  createTime: "2019-12-23 2:3:41",
  deviceCode: "钢轨号/焊缝号/岔道号77",
  deviceName: "设备名称57",
  deviceType: 625,
  deviceTypeCode: "道岔配轨/焊缝(类型)号646",
  factory: "生产厂449",
  nature: "材质503",
  orderDetailId: 743,
  radius: 247,
  railType: 40,
  sealNumber: "钢轨热印号678",
  sleeper: 757,
  totalWeight: 39,
  updateTime: "2019-12-15 2:3:41",
  userDate: "出厂年月146"
};
}

damageRepositoryDevice.columnsArray=columnsArray;
damageRepositoryDevice.create=create;
module.exports=damageRepositoryDevice;