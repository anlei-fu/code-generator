let dealRecord = {
  name: "dealRecord",
  description: "探伤处置记录",
  columns: {
    cmdNo: {
      name: "cmdNo",
      description: "施工命令行",
      nullable: true,
      type: {
        name: "varchar",
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
    dealRemark: {
      name: "dealRemark",
      description: "处置说明",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    dealResult: {
      name: "dealResult",
      description: "处置结果",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    dealTime: {
      name: "dealTime",
      description: "处置时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    deleteAuditStatus: {
      name: "deleteAuditStatus",
      description: "删除审计状:-1审计成功,1待审计",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
    id: {
      name: "id",
      description: "处置记录编号",
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
    workareaId: {
      name: "workareaId",
      description: "处置人",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    workshopInfoId: {
      name: "workshopInfoId",
      description: "处置车间",
      nullable: true,
      type: {
        name: "int",
        length: 32
      }
    }
  }
};

let columnsArray = [
  "cmdNo",
  "createTime",
  "dealRemark",
  "dealResult",
  "dealTime",
  "deleteAuditStatus",
  "deleteTime",
  "id",
  "isDelete",
  "operator",
  "orderDetailId",
  "updateTime",
  "workareaId",
  "workshopInfoId"
];

function create() {
  return {
  cmdNo: "施工命令行662",
  createTime: "2019-12-25 1::37",
  dealRemark: "处置说明582",
  dealResult: 959,
  dealTime: "2019-12-25 1::37",
  deleteAuditStatus: 377,
  deleteTime: "2019-12-18 1::37",
  id: 36,
  isDelete: 836,
  operator: 372,
  orderDetailId: 213,
  updateTime: "2020-1-18 1::37",
  workareaId: 178,
  workshopInfoId: 964
};
}

dealRecord.columnsArray=columnsArray;
dealRecord.create=create;
module.exports=dealRecord;