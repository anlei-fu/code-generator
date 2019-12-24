let taskSiteRelation = {
	name: "taskSiteRelation",
	description: "任务 网站关联",
	columns: {
		domain: {
			name: "domain",
			description: "网站",
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
		siteId: {
			name: "siteId",
			description: "网站id",
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
		userId: {
			name: "userId",
			description: "用户id",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"domain",
	"id",
	"siteId",
	"taskId",
	"userId"
];

function create() {
  return {
	domain: "网站156",
	id: 303,
	siteId: 495,
	taskId: 375,
	userId: 680
};
}

taskSiteRelation.columnsArray=columnsArray;
taskSiteRelation.create=create;
module.exports=taskSiteRelation;