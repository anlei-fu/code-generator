let domainModel = {
	name: "domainModel",
	description: "网站提取模型",
	columns: {
		domainId: {
			name: "domainId",
			description: "domainid",
			nullable: false,
			type: {
				name: "int",
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
		model: {
			name: "model",
			description: "模型",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		taskId: {
			name: "taskId",
			description: "任务id",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"domainId",
	"id",
	"model",
	"taskId"
];

function create() {
  return {
	domainId: 902,
	id: 255,
	model: "模型859",
	taskId: 65
};
}

domainModel.columnsArray=columnsArray;
domainModel.create=create;
module.exports=domainModel;