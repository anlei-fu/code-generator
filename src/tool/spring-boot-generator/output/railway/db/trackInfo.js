let trackInfo = {
	name: "trackInfo",
	description: "钢轨信息",
	columns: {
		id: {
			name: "id",
			description: "轨道编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		trackCode: {
			name: "trackCode",
			description: "轨道编码",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		trackType: {
			name: "trackType",
			description: "钢轨类型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		trackDivisionId: {
			name: "trackDivisionId",
			description: "工务段编号",
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
		}
	}
};

let columnsArray = [
	"id",
	"trackCode",
	"trackType",
	"trackDivisionId",
	"isDelete",
	"createTime",
	"updateTime",
	"operator"
];

function create() {
  return {};
}

trackInfo.columnsArray=columnsArray;
trackInfo.create=create;
module.exports=trackInfo;