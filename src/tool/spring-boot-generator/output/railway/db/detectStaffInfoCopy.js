let detectStaffInfoCopy = {
	name: "detectStaffInfoCopy",
	description: "探伤人员",
	columns: {
		birthday: {
			name: "birthday",
			description: "出生日期",
			nullable: true,
			type: {
				name: "date"
			}
		},
		contact: {
			name: "contact",
			description: "联系电话",
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
		eduDegree: {
			name: "eduDegree",
			description: "文化程度",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		gender: {
			name: "gender",
			description: "性别",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		gradeGainDate: {
			name: "gradeGainDate",
			description: "职称获得时间",
			nullable: true,
			type: {
				name: "date"
			}
		},
		gradeId: {
			name: "gradeId",
			description: "职称编号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		id: {
			name: "id",
			description: "探伤人员编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		idCardNo: {
			name: "idCardNo",
			description: "身份证",
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
		name: {
			name: "name",
			description: "姓名",
			nullable: true,
			type: {
				name: "varchar",
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
		positionId: {
			name: "positionId",
			description: "职位编号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		qualificationAuditDate: {
			name: "qualificationAuditDate",
			description: "探伤资质复审日期",
			nullable: true,
			type: {
				name: "date"
			}
		},
		qualificationGainDate: {
			name: "qualificationGainDate",
			description: "探伤资质发证日期",
			nullable: true,
			type: {
				name: "date"
			}
		},
		qualificationGrade: {
			name: "qualificationGrade",
			description: "探伤资质等级",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		qualificationInvalidDate: {
			name: "qualificationInvalidDate",
			description: "探伤资质截止日期",
			nullable: true,
			type: {
				name: "date"
			}
		},
		qualificationValidTime: {
			name: "qualificationValidTime",
			description: "探伤资质有效期",
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
		tecCategory: {
			name: "tecCategory",
			description: "技术类别",
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
			description: "探伤工区编号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"birthday",
	"contact",
	"createTime",
	"eduDegree",
	"gender",
	"gradeGainDate",
	"gradeId",
	"id",
	"idCardNo",
	"isDelete",
	"name",
	"operator",
	"positionId",
	"qualificationAuditDate",
	"qualificationGainDate",
	"qualificationGrade",
	"qualificationInvalidDate",
	"qualificationValidTime",
	"remark",
	"status",
	"tecCategory",
	"updateTime",
	"workareaId"
];

function create() {
  return {};
}

detectStaffInfoCopy.columnsArray=columnsArray;
detectStaffInfoCopy.create=create;
module.exports=detectStaffInfoCopy;