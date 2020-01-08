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
			description: "删除审计状态",
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
	"deleteAuditStatus"
];

function create() {
  return {};
}

dealRecord.columnsArray=columnsArray;
dealRecord.create=create;
module.exports=dealRecord;