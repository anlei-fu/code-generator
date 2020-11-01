let systemAlarm = {
	name: "systemAlarm",
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
		siteId: {
			name: "siteId",
			description: "",
			rawName: "site_id",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		msg: {
			name: "msg",
			description: "",
			rawName: "msg",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		isReaded: {
			name: "isReaded",
			description: "",
			rawName: "is_readed",
			nullable: true,
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
		}
	},
	rawName: "system_alarm",
	primaryColumn: "id",
	nameColumn: {
		name: "id",
		description: "",
		isPk: true,
		rawName: "id",
		nullable: false,
		type: {
			name: "int",
			length: 11
		}
	}
};

let columnsArray = [
	"id",
	"siteId",
	"msg",
	"isReaded",
	"createTime"
];

function create() {
  return {};
}

systemAlarm.columnsArray=columnsArray;
systemAlarm.create=create;
module.exports.systemAlarm=systemAlarm;