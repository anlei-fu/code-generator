let siteInfo = {
	name: "siteInfo",
	description: "网站信息",
	columns: {
		description: {
			name: "description",
			description: "描述",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		id: {
			name: "id",
			description: "编号",
			isPk: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		mainDomain: {
			name: "mainDomain",
			description: "主站",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		type: {
			name: "type",
			description: "网站类型",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		}
	}
};

let columnsArray = [
	"description",
	"id",
	"mainDomain",
	"type"
];

function create() {
  return {
	description: "描述20",
	id: 356,
	mainDomain: "主站725",
	type: "网站类型981"
};
}

siteInfo.columnsArray=columnsArray;
siteInfo.create=create;
module.exports=siteInfo;