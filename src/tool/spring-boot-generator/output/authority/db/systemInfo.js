let systemInfo = {
	name: "systemInfo",
	description: "system info",
	columns: {
		createTime: {
			name: "createTime",
			description: "create time",
			nullable: false,
			type: {
				name: "timestamp",
				length: null
			}
		},
		createUser: {
			name: "createUser",
			description: "crceate user",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		description: {
			name: "description",
			description: "description",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		id: {
			name: "id",
			description: "",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		name: {
			name: "name",
			description: "name",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		}
	}
};

let columnsArray = [
	"createTime",
	"createUser",
	"description",
	"id",
	"name"
];

function create() {
  return {};
}

systemInfo.columnsArray=columnsArray;
systemInfo.create=create;
module.exports=systemInfo;