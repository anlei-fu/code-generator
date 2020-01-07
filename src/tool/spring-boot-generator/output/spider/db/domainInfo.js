let domainInfo = {
	name: "domainInfo",
	description: "domain信息",
	columns: {
		id: {
			name: "id",
			description: "编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		domainId: {
			name: "domainId",
			description: "网站id",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		domain: {
			name: "domain",
			description: "网站名字",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		maxSpeed: {
			name: "maxSpeed",
			description: "最大速度",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		needCookie: {
			name: "needCookie",
			description: "需要cookie",
			nullable: false,
			type: {
				name: "smallint",
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
		encoding: {
			name: "encoding",
			description: "编码",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		httpProtocal: {
			name: "httpProtocal",
			description: "协议类型",
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
	"domainId",
	"domain",
	"maxSpeed",
	"needCookie",
	"remark",
	"encoding",
	"httpProtocal",
	"type"
];

function create() {
  return {};
}

domainInfo.columnsArray=columnsArray;
domainInfo.create=create;
module.exports=domainInfo;