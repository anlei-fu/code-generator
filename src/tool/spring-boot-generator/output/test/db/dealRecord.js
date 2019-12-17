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
      description: "删除审计状态",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
  cmdNo: "施工命令行560",
  createTime: "2019-12-17 2:3:19",
  dealRemark: "处置说明481",
  dealResult: 210,
  dealTime: "2019-11-17 2:3:19",
  deleteAuditStatus: 235,
  id: 486,
  isDelete: 837,
  operator: 450,
  orderDetailId: 938,
  updateTime: "2019-11-17 2:3:19",
  workareaId: 265,
  workshopInfoId: 134
};
}

dealRecord.columnsArray=columnsArray;
dealRecord.create=create;
module.exports=dealRecord;