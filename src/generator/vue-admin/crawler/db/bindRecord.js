let bindRecord = {
	name: "bindRecord",
	description: "",
	columns: {
		id: {
			name: "id",
			description: "",
			isPk: true,
			autoIncrement: true,
			rawName: "id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		crawlTaskId: {
			name: "crawlTaskId",
			description: "",
			rawName: "crawl_task_id",
			nullable: false,
			type: {
				name: "int",
				length: 11
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
		msg: {
			name: "msg",
			description: "",
			rawName: "msg",
			nullable: true,
			type: {
				name: "varchar",
				length: 100
			}
		},
		bindStatus: {
			name: "bindStatus",
			description: "",
			rawName: "bind_status",
			nullable: false,
			type: {
				name: "smallint",
				length: 6
			}
		}
	},
	rawName: "bind_record",
	primaryColumn: "id",
	nameColumn: {
		name: "bindStatus",
		score: 1.0380736581157888,
		content: "bind_status",
		weight: 1,
		totalTokenCount: 2
	}
};

let columnsArray = [
	"id",
	"crawlTaskId",
	"createTime",
	"msg",
	"bindStatus"
];

function create() {
  return {};
}

bindRecord.columnsArray=columnsArray;
bindRecord.create=create;
module.exports.bindRecord=bindRecord;