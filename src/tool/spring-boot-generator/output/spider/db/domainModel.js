let domainModel = {
	name: "domainModel",
	description: "网站提取模型",
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
		taskId: {
			name: "taskId",
			description: "任务id",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		domainId: {
			name: "domainId",
			description: "domainid",
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
		}
	}
};

let columnsArray = [
	"id",
	"taskId",
	"domainId",
	"model"
];

function create() {
  return {};
}

domainModel.columnsArray=columnsArray;
domainModel.create=create;
module.exports=domainModel;