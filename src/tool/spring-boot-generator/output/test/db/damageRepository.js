let damageRepository = {
  name: "damageRepository",
  description: "伤损归档",
  columns: {
    orderDetailId: {
      name: "orderDetailId",
      description: "记录编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    orderNo: {
      name: "orderNo",
      description: "伤损单号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    detectTime: {
      name: "detectTime",
      description: "检测时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    detectStuff: {
      name: "detectStuff",
      description: "检查人员",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    damageType: {
      name: "damageType",
      description: "损伤类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    damageLevel: {
      name: "damageLevel",
      description: "伤损程度",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    damageDetail: {
      name: "damageDetail",
      description: "损伤详情",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    damageCode: {
      name: "damageCode",
      description: "伤损编码",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    damageOld: {
      name: "damageOld",
      description: "新旧伤",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    damageOldId: {
      name: "damageOldId",
      description: "原伤损id",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    receivingUnit: {
      name: "receivingUnit",
      description: "接收单位",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    receivingUser: {
      name: "receivingUser",
      description: "接收人",
      nullable: true,
      type: {
        name: "varchar",
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
    receivingWorkareaInfo: {
      name: "receivingWorkareaInfo",
      description: "接收线路工区",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    dealStatus: {
      name: "dealStatus",
      description: "处置状态",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    importStatus: {
      name: "importStatus",
      description: "导入状:1导入,2编辑,3已归档",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    checkEquipment: {
      name: "checkEquipment",
      description: "1.钢轨探伤仪,2.焊缝探伤仪,3.通用探伤仪,4.手工检查,5.双轨探伤仪,6.探伤车",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    analysisResult: {
      name: "analysisResult",
      description: "1.检验通过,2.数据重复,3.数据异常,4.疑似前后伤",
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
    },
    cancel: {
      name: "cancel",
      description: "销号状:-1销号成功,1未销号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    auditStatus: {
      name: "auditStatus",
      description: "删除审计状:-1审计成功,1待审计",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    lastDetectTime: {
      name: "lastDetectTime",
      description: "末次检测时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    deleteTime: {
      name: "deleteTime",
      description: "删除时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    }
  }
};

let columnsArray = [
  "orderDetailId",
  "orderNo",
  "detectTime",
  "detectStuff",
  "damageType",
  "damageLevel",
  "damageDetail",
  "damageCode",
  "damageOld",
  "damageOldId",
  "receivingUnit",
  "receivingUser",
  "remark",
  "receivingWorkareaInfo",
  "dealStatus",
  "importStatus",
  "checkEquipment",
  "analysisResult",
  "isDelete",
  "createTime",
  "updateTime",
  "operator",
  "cancel",
  "auditStatus",
  "lastDetectTime",
  "deleteTime"
];

function create() {
  return {
  orderDetailId: 238,
  orderNo: "伤损单号562",
  detectTime: "2019-12-23 1:3:35",
  detectStuff: 730,
  damageType: 160,
  damageLevel: 357,
  damageDetail: "损伤详情852",
  damageCode: "伤损编码609",
  damageOld: 387,
  damageOldId: 541,
  receivingUnit: "接收单位582",
  receivingUser: "接收人647",
  remark: "备注97",
  receivingWorkareaInfo: 275,
  dealStatus: 38,
  importStatus: 334,
  checkEquipment: 35,
  analysisResult: 656,
  isDelete: 871,
  createTime: "2019-11-23 1:3:35",
  updateTime: "2019-12-23 1:3:35",
  operator: 133,
  cancel: 67,
  auditStatus: 304,
  lastDetectTime: "2020-1-23 1:3:35",
  deleteTime: "2019-11-23 1:3:35"
};
}

damageRepository.columnsArray=columnsArray;
damageRepository.create=create;
module.exports=damageRepository;