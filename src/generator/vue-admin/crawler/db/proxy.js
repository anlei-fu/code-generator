let proxy = {
	name: "proxy",
	description: "proxy info",
	columns: {
		id: {
			name: "id",
			description: "identifier",
			isPk: true,
			autoIncrement: true,
			rawName: "id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		ip: {
			name: "ip",
			description: "the hos:port of proxy server",
			rawName: "ip",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		port: {
			name: "port",
			description: "",
			rawName: "port",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		account: {
			name: "account",
			description: "the account of the proxy",
			rawName: "account",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		password: {
			name: "password",
			description: "the password of the proxy",
			rawName: "password",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		protocol: {
			name: "protocol",
			description: "the protocol that proxy used",
			rawName: "protocol",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		proxyType: {
			name: "proxyType",
			description: "the type of proxy",
			rawName: "proxy_type",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		maxUseCount: {
			name: "maxUseCount",
			description: "the max use count of proxy",
			rawName: "max_use_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		currentUseCount: {
			name: "currentUseCount",
			description: "the current use count of proxy",
			rawName: "current_use_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		blockMaxCount: {
			name: "blockMaxCount",
			description: "",
			defaultValue: "",
			rawName: "block_max_count",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		blockCurrentCount: {
			name: "blockCurrentCount",
			description: "",
			defaultValue: "",
			rawName: "block_current_count",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		blockTimeout: {
			name: "blockTimeout",
			description: "",
			rawName: "block_timeout",
			nullable: true,
			type: {
				name: "timestamp"
			}
		},
		enableStatus: {
			name: "enableStatus",
			description: "enable status",
			defaultValue: "enable status",
			rawName: "enable_status",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		createTime: {
			name: "createTime",
			description: "create time",
			defaultValue: "create time",
			rawName: "create_time",
			nullable: false,
			type: {
				name: "timestamp"
			}
		}
	},
	rawName: "proxy",
	primaryColumn: "id",
	nameColumn: {
		name: "proxyType",
		score: 3.2136731202118325,
		content: "proxy_type",
		weight: 1,
		totalTokenCount: 2
	}
};

let columnsArray = [
	"id",
	"ip",
	"port",
	"account",
	"password",
	"protocol",
	"proxyType",
	"maxUseCount",
	"currentUseCount",
	"blockMaxCount",
	"blockCurrentCount",
	"blockTimeout",
	"enableStatus",
	"createTime"
];

function create() {
  return {};
}

proxy.columnsArray=columnsArray;
proxy.create=create;
module.exports.proxy=proxy;