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
    dealRemark: {
      name: "dealRemark",
      description: "处置说明",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    dealResult: {
      name: "dealResult",
      description: "处置结果",
      nullable: true,
      type: {
        name: "int",
        length: null
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
        length: null
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
    operator: {
      name: "operator",
      description: "操作人",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    orderDetailId: {
      name: "orderDetailId",
      description: "记录编号",
      nullable: true,
      type: {
        name: "int",
        length: null
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
        length: null
      }
    },
    workshopInfoId: {
      name: "workshopInfoId",
      description: "处置车间",
      nullable: true,
      type: {
        name: "int",
        length: null
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
  cmdNo: "施工命令行636",
  createTime: "2019-12-26 1:4:50",
  dealRemark: "处置说明119",
  dealResult: 286,
  dealTime: "2019-12-19 1:4:50",
  deleteAuditStatus: 442,
  deleteTime: "2020-1-19 1:4:50",
  id: 352,
  isDelete: 132,
  operator: 580,
  orderDetailId: 146,
  updateTime: "2019-12-26 1:4:50",
  workareaId: 550,
  workshopInfoId: 550
};
}

dealRecord.columnsArray=columnsArray;
dealRecord.create=create;
module.exports=dealRecord;