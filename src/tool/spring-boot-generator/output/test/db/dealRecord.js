let dealRecord = {
  name: "dealRecord",
  description: "探伤处置记录",
  columns: {
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
    orderDetailId: {
      name: "orderDetailId",
      description: "记录编号",
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
    dealTime: {
      name: "dealTime",
      description: "处置时间",
      nullable: true,
      type: {
        name: "datetime"
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
    dealRemark: {
      name: "dealRemark",
      description: "处置说明",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    cmdNo: {
      name: "cmdNo",
      description: "施工命令行",
      nullable: true,
      type: {
        name: "varchar",
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
    }
  }
};

let columnsArray = [
  "id",
  "orderDetailId",
  "workshopInfoId",
  "workareaId",
  "dealTime",
  "dealResult",
  "dealRemark",
  "cmdNo",
  "isDelete",
  "createTime",
  "updateTime",
  "operator",
  "deleteAuditStatus",
  "deleteTime"
];

function create() {
  return {
  id: 597,
  orderDetailId: 173,
  workshopInfoId: 795,
  workareaId: 186,
  dealTime: "2020-1-23 1:3:35",
  dealResult: 498,
  dealRemark: "处置说明224",
  cmdNo: "施工命令行666",
  isDelete: 685,
  createTime: "2019-11-23 1:3:35",
  updateTime: "2019-12-30 1:3:35",
  operator: 605,
  deleteAuditStatus: 686,
  deleteTime: "2019-11-23 1:3:35"
};
}

dealRecord.columnsArray=columnsArray;
dealRecord.create=create;
module.exports=dealRecord;