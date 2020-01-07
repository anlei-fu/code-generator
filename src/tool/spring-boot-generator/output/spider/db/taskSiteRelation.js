let taskSiteRelation = {
	name: "taskSiteRelation",
	description: "任务 网站关联",
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
		},
		domain: {
			name: "domain",
			description: "网站",
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
	"siteId",
	"taskId",
	"userId",
	"domain"
];

function create() {
  return {};
}

taskSiteRelation.columnsArray=columnsArray;
taskSiteRelation.create=create;
module.exports=taskSiteRelation;