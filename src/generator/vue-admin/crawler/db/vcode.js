let vcode = {
	name: "vcode",
	description: "",
	columns: {
		id: {
			name: "id",
			description: "",
			isPk: true,
			rawName: "id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		accountId: {
			name: "accountId",
			description: "",
			rawName: "account_id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		vcodeType: {
			name: "vcodeType",
			description: "",
			defaultValue: "",
			rawName: "vcode_type",
			nullable: false,
			type: {
				name: "smallint",
				length: 6
			}
		},
		createTime: {
			name: "createTime",
			description: "",
			defaultValue: "",
			rawName: "create_time",
			nullable: false,
			type: {
				name: "timestamp"
			}
		},
		content: {
			name: "content",
			description: "",
			rawName: "content",
			nullable: false,
			type: {
				name: "varchar",
				length: 300
			}
		}
	},
	rawName: "vcode",
	primaryColumn: "id",
	nameColumn: {
		name: "vcodeType",
		score: 1.5571104871736834,
		content: "vcode_type",
		weight: 1,
		totalTokenCount: 2
	}
};

let columnsArray = [
	"id",
	"accountId",
	"vcodeType",
	"createTime",
	"content"
];

function create() {
  return {};
}

vcode.columnsArray=columnsArray;
vcode.create=create;
module.exports.vcode=vcode;