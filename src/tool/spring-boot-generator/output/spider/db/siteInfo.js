let siteInfo = {
	name: "siteInfo",
	description: "网站信息",
	columns: {
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
		description: {
			name: "description",
			description: "描述",
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
	"id",
	"mainDomain",
	"description",
	"type"
];

function create() {
  return {};
}

siteInfo.columnsArray=columnsArray;
siteInfo.create=create;
module.exports=siteInfo;