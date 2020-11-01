let dispatchTaskRecord = {
	name: "dispatchTaskRecord",
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
		crawlTaskId: {
			name: "crawlTaskId",
			description: "",
			rawName: "crawl_task_id",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		dispatchStatus: {
			name: "dispatchStatus",
			description: "",
			rawName: "dispatch_status",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		dispatchMsg: {
			name: "dispatchMsg",
			description: "",
			rawName: "dispatch_msg",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		createTime: {
			name: "createTime",
			description: "",
			rawName: "create_time",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		}
	},
	rawName: "dispatch_task_record",
	primaryColumn: "id",
	nameColumn: {
		name: "crawlTaskId",
		score: 0.6356876944520093,
		content: "crawl_task_id",
		weight: 1,
		totalTokenCount: 3
	}
};

let columnsArray = [
	"id",
	"crawlTaskId",
	"dispatchStatus",
	"dispatchMsg",
	"createTime"
];

function create() {
  return {};
}

dispatchTaskRecord.columnsArray=columnsArray;
dispatchTaskRecord.create=create;
module.exports.dispatchTaskRecord=dispatchTaskRecord;