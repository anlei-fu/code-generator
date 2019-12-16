let detectDeviceInfo = {
  name: "detectDeviceInfo",
  description: "探伤仪器",
  columns: {
    commissioningDate: {
      name: "commissioningDate",
      description: "投产日期",
      nullable: true,
      type: {
        name: "date"
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
    deivceNo: {
      name: "deivceNo",
      description: "仪器编号",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    deviceMode: {
      name: "deviceMode",
      description: "仪器型号",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    deviceName: {
      name: "deviceName",
      description: "仪器名称",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    durableYears: {
      name: "durableYears",
      description: "可用年限",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    exFactoryDate: {
      name: "exFactoryDate",
      description: "出厂日期",
      nullable: true,
      type: {
        name: "date"
      }
    },
    fixedAssetsNo: {
      name: "fixedAssetsNo",
      description: "固定资产编号",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    fixedAssetsPrice: {
      name: "fixedAssetsPrice",
      description: "固定资产值",
      nullable: true,
      type: {
        name: "float"
      }
    },
    id: {
      name: "id",
      description: "探伤仪器编号",
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
    length: {
      name: "length",
      description: "外形长度",
      nullable: true,
      type: {
        name: "float"
      }
    },
    manufacturer: {
      name: "manufacturer",
      description: "制造厂家",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
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
    purchasePrice: {
      name: "purchasePrice",
      description: "购置价格",
      nullable: true,
      type: {
        name: "float"
      }
    },
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    scrapDate: {
      name: "scrapDate",
      description: "报废日期",
      nullable: true,
      type: {
        name: "date"
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
    },
    useStatus: {
      name: "useStatus",
      description: "使用状态",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    weight: {
      name: "weight",
      description: "外形高度",
      nullable: true,
      type: {
        name: "float"
      }
    },
    width: {
      name: "width",
      description: "外形宽度",
      nullable: true,
      type: {
        name: "float"
      }
    },
    workareaId: {
      name: "workareaId",
      description: "探伤工区编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    }
  }
};

let columnsArray = [
  "commissioningDate",
  "createTime",
  "deivceNo",
  "deviceMode",
  "deviceName",
  "durableYears",
  "exFactoryDate",
  "fixedAssetsNo",
  "fixedAssetsPrice",
  "id",
  "isDelete",
  "length",
  "manufacturer",
  "operator",
  "purchasePrice",
  "remark",
  "scrapDate",
  "status",
  "updateTime",
  "useStatus",
  "weight",
  "width",
  "workareaId"
];

function create() {
  return {
  commissioningDate: "2019-12-15 2:3:41",
  createTime: "2019-12-16 2:3:41",
  deivceNo: "仪器编号138",
  deviceMode: "仪器型号468",
  deviceName: "仪器名称777",
  durableYears: 983,
  exFactoryDate: "2020-1-16 2:3:41",
  fixedAssetsNo: "固定资产编号10",
  fixedAssetsPrice: 657,
  id: 149,
  isDelete: 359,
  length: 938,
  manufacturer: "制造厂家883",
  operator: 530,
  purchasePrice: 559,
  remark: "备注270",
  scrapDate: "2019-12-16 2:3:41",
  status: 695,
  updateTime: "2019-12-16 2:3:41",
  useStatus: 358,
  weight: 139,
  width: 567,
  workareaId: 191
};
}

detectDeviceInfo.columnsArray=columnsArray;
detectDeviceInfo.create=create;
module.exports=detectDeviceInfo;