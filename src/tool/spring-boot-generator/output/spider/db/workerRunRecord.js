let workerRunRecord = {
	name: "workerRunRecord",
	description: "worker 运行记录",
	columns: {
		endTime: {
			name: "endTime",
			description: "结束时间",
			nullable: true,
			type: {
				name: "bigint",
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
		startTime: {
			name: "startTime",
			description: "开始时间",
			nullable: true,
			type: {
				name: "bigint",
				length: null
			}
		}
	}
};

let columnsArray = [
	"endTime",
	"id",
	"startTime"
];

function create() {
  return {
	endTime: 259,
	id: 611,
	startTime: 523
};
}

workerRunRecord.columnsArray=columnsArray;
workerRunRecord.create=create;
module.exports=workerRunRecord;