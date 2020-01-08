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
		damageLeve: {
			name: "damageLeve",
			description: "损伤程度",
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
			description: "浼ゆ崯缂栫爜",
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
			description: "销号状态",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		auditStatus: {
			name: "auditStatus",
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
	"orderDetailId",
	"orderNo",
	"detectTime",
	"detectStuff",
	"damageType",
	"damageLeve",
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
	"isDelete",
	"createTime",
	"updateTime",
	"operator",
	"cancel",
	"auditStatus"
];

function create() {
  return {};
}

damageRepository.columnsArray=columnsArray;
damageRepository.create=create;
module.exports=damageRepository;