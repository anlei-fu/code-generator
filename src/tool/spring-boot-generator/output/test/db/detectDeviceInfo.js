let detectDeviceInfo = {
  name: "detectDeviceInfo",
  description: "探伤仪器",
  columns: {
    id: {
      name: "id",
      description: "探伤仪器编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    workareaId: {
      name: "workareaId",
      description: "探伤工区编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    deviceName: {
      name: "deviceName",
      description: "仪器名称",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    deviceMode: {
      name: "deviceMode",
      description: "仪器型号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    deivceNo: {
      name: "deivceNo",
      description: "仪器编号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    manufacturer: {
      name: "manufacturer",
      description: "制造厂家",
      nullable: true,
      type: {
        name: "varchar",
        length: null
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
        length: null
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
    purchasePrice: {
      name: "purchasePrice",
      description: "购置价格",
      nullable: true,
      type: {
        name: "float"
      }
    },
    commissioningDate: {
      name: "commissioningDate",
      description: "投产日期",
      nullable: true,
      type: {
        name: "date"
      }
    },
    durableYears: {
      name: "durableYears",
      description: "可用年限",
      nullable: true,
      type: {
        name: "int",
        length: null
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
    length: {
      name: "length",
      description: "外形长度",
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
    weight: {
      name: "weight",
      description: "外形高度",
      nullable: true,
      type: {
        name: "float"
      }
    },
    useStatus: {
      name: "useStatus",
      description: "使用状态",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    status: {
      name: "status",
      description: "状态",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    isDelete: {
      name: "isDelete",
      description: "删除标记",
      nullable: false,
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
    },
    operator: {
      name: "operator",
      description: "操作人",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    }
  }
};

let columnsArray = [
  "id",
  "workareaId",
  "deviceName",
  "deviceMode",
  "deivceNo",
  "manufacturer",
  "exFactoryDate",
  "fixedAssetsNo",
  "fixedAssetsPrice",
  "purchasePrice",
  "commissioningDate",
  "durableYears",
  "scrapDate",
  "length",
  "width",
  "weight",
  "useStatus",
  "remark",
  "status",
  "isDelete",
  "createTime",
  "updateTime",
  "operator"
];

function create() {
  return {
  id: 784,
  workareaId: 112,
  deviceName: "仪器名称261",
  deviceMode: "仪器型号685",
  deivceNo: "仪器编号658",
  manufacturer: "制造厂家348",
  exFactoryDate: "2019-11-23 1:3:35",
  fixedAssetsNo: "固定资产编号679",
  fixedAssetsPrice: 369,
  purchasePrice: 902,
  commissioningDate: "2019-12-23 1:3:35",
  durableYears: 177,
  scrapDate: "2019-12-22 1:3:35",
  length: 356,
  width: 644,
  weight: 845,
  useStatus: 37,
  remark: "备注589",
  status: 746,
  isDelete: 534,
  createTime: "2019-12-30 1:3:35",
  updateTime: "2019-12-23 1:3:35",
  operator: 518
};
}

detectDeviceInfo.columnsArray=columnsArray;
detectDeviceInfo.create=create;
module.exports=detectDeviceInfo;