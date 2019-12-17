let damageRepository = {
  name: "damageRepository",
  description: "伤损归档",
  columns: {
    analysisResult: {
      name: "analysisResult",
      description: "1.检验通过,2.数据重复,3.数据异常,4.疑似前后伤",
      nullable: true,
      type: {
        name: "int",
        length: 32
      }
    },
    auditStatus: {
      name: "auditStatus",
      description: "删除审计状:-1审计成功,1待审计",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    cancel: {
      name: "cancel",
      description: "销号状:-1销号成功,1未销号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    checkEquipment: {
      name: "checkEquipment",
      description: "1.钢轨探伤仪,2.焊缝探伤仪,3.通用探伤仪,4.手工检查,5.双轨探伤仪,6.探伤车",
      nullable: true,
      type: {
        name: "int",
        length: 32
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
    damageCode: {
      name: "damageCode",
      description: "伤损编码",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    damageDetail: {
      name: "damageDetail",
      description: "损伤详情",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    damageLevel: {
      name: "damageLevel",
      description: "伤损程度",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    damageOld: {
      name: "damageOld",
      description: "新旧伤",
      nullable: true,
      type: {
        name: "int",
        length: 32
      }
    },
    damageOldId: {
      name: "damageOldId",
      description: "原伤损id",
      nullable: true,
      type: {
        name: "int",
        length: 32
      }
    },
    damageType: {
      name: "damageType",
      description: "损伤类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    dealStatus: {
      name: "dealStatus",
      description: "处置状态",
      nullable: true,
      type: {
        name: "int",
        length: 32
      }
    },
    deleteTime: {
      name: "deleteTime",
      description: "删除时间",
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
        length: 11
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
    importStatus: {
      name: "importStatus",
      description: "导入状:1导入,2编辑,3已归档",
      nullable: true,
      type: {
        name: "int",
        length: 32
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
    lastDetectTime: {
      name: "lastDetectTime",
      description: "末次检测时间",
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
        length: 11
      }
    },
    orderDetailId: {
      name: "orderDetailId",
      description: "记录编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    orderNo: {
      name: "orderNo",
      description: "伤损单号",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    receivingUnit: {
      name: "receivingUnit",
      description: "接收单位",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    receivingUser: {
      name: "receivingUser",
      description: "接收人",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    receivingWorkareaInfo: {
      name: "receivingWorkareaInfo",
      description: "接收线路工区",
      nullable: true,
      type: {
        name: "int",
        length: 32
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
  "analysisResult",
  "auditStatus",
  "cancel",
  "checkEquipment",
  "createTime",
  "damageCode",
  "damageDetail",
  "damageLevel",
  "damageOld",
  "damageOldId",
  "damageType",
  "dealStatus",
  "deleteTime",
  "detectStuff",
  "detectTime",
  "importStatus",
  "isDelete",
  "lastDetectTime",
  "operator",
  "orderDetailId",
  "orderNo",
  "receivingUnit",
  "receivingUser",
  "receivingWorkareaInfo",
  "remark",
  "updateTime"
];

function create() {
  return {
  analysisResult: 977,
  auditStatus: 181,
  cancel: 237,
  checkEquipment: 503,
  createTime: "2020-1-17 :3:35",
  damageCode: "伤损编码728",
  damageDetail: "损伤详情700",
  damageLevel: 954,
  damageOld: 169,
  damageOldId: 86,
  damageType: 312,
  dealStatus: 722,
  deleteTime: "2019-11-17 :3:35",
  detectStuff: 55,
  detectTime: "2019-12-17 :3:35",
  importStatus: 766,
  isDelete: 923,
  lastDetectTime: "2019-12-17 :3:35",
  operator: 751,
  orderDetailId: 643,
  orderNo: "伤损单号272",
  receivingUnit: "接收单位4",
  receivingUser: "接收人569",
  receivingWorkareaInfo: 234,
  remark: "备注869",
  updateTime: "2019-12-16 :3:35"
};
}

damageRepository.columnsArray=columnsArray;
damageRepository.create=create;
module.exports=damageRepository;