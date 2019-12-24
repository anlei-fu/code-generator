let domainInfo = {
	name: "domainInfo",
	description: "domain信息",
	columns: {
		domain: {
			name: "domain",
			description: "网站名字",
			nullable: true,
			type: {
				name: "varchar",
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
	"domain",
	"domainId",
	"encoding",
	"httpProtocal",
	"id",
	"maxSpeed",
	"needCookie",
	"remark",
	"type"
];

function create() {
  return {
	domain: "网站名字825",
	domainId: 474,
	encoding: "编码742",
	httpProtocal: "协议类型455",
	id: 152,
	maxSpeed: 861,
	needCookie: 985,
	remark: "备注957",
	type: "网站类型999"
};
}

domainInfo.columnsArray=columnsArray;
domainInfo.create=create;
module.exports=domainInfo;