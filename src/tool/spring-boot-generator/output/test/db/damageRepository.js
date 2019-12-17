let damageRepository = {
  name: "damageRepository",
  description: "伤损归档",
  columns: {
    auditStatus: {
      name: "auditStatus",
      description: "删除审计状态",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    cancel: {
      name: "cancel",
      description: "销号状态",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
      description: "浼ゆ崯缂栫爜",
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
    damageLeve: {
      name: "damageLeve",
      description: "损伤程度",
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
  "auditStatus",
  "cancel",
  "createTime",
  "damageCode",
  "damageDetail",
  "damageLeve",
  "damageOld",
  "damageOldId",
  "damageType",
  "dealStatus",
  "detectStuff",
  "detectTime",
  "importStatus",
  "isDelete",
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
  auditStatus: 767,
  cancel: 698,
  createTime: "2019-11-17 2:3:19",
  damageCode: "浼ゆ崯缂栫爜893",
  damageDetail: "损伤详情974",
  damageLeve: 249,
  damageOld: 487,
  damageOldId: 616,
  damageType: 560,
  dealStatus: 709,
  detectStuff: 606,
  detectTime: "2020-1-17 2:3:19",
  importStatus: 8,
  isDelete: 583,
  operator: 646,
  orderDetailId: 0,
  orderNo: "伤损单号941",
  receivingUnit: "接收单位468",
  receivingUser: "接收人54",
  receivingWorkareaInfo: 387,
  remark: "备注662",
  updateTime: "2020-1-17 2:3:19"
};
}

damageRepository.columnsArray=columnsArray;
damageRepository.create=create;
module.exports=damageRepository;