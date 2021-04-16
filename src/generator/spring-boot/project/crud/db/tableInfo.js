let tableInfo = {
	name: "tableInfo",
	description: "",
	columns: {
		apiPrefix: {
			name: "apiPrefix",
			description: "",
			rawName: "api_prefix",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		batchDelete: {
			name: "batchDelete",
			description: "",
			defaultValue: "",
			rawName: "batch_delete",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		batchEidit: {
			name: "batchEidit",
			description: "",
			defaultValue: "",
			rawName: "batch_eidit",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		deletable: {
			name: "deletable",
			description: "",
			defaultValue: "",
			rawName: "deletable",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		description: {
			name: "description",
			description: "",
			rawName: "description",
			nullable: true,
			type: {
				name: "varchar",
				length: 256
			}
		},
		eiditable: {
			name: "eiditable",
			description: "",
			defaultValue: "",
			rawName: "eiditable",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
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
		insertable: {
			name: "insertable",
			description: "",
			defaultValue: "",
			rawName: "insertable",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		mouduleId: {
			name: "mouduleId",
			description: "",
			rawName: "moudule_id",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		name: {
			name: "name",
			description: "",
			rawName: "name",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		projectId: {
			name: "projectId",
			description: "",
			rawName: "project_id",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		rawName: {
			name: "rawName",
			description: "",
			rawName: "raw_name",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		title: {
			name: "title",
			description: "",
			rawName: "title",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		}
	},
	rawName: "table_info",
	primaryColumn: "id",
	nameColumn: {
		name: "name",
		score: 2.15128700202432,
		content: "name",
		weight: 1,
		totalTokenCount: 1
	}
};

let columnsArray = [
	"apiPrefix",
	"batchDelete",
	"batchEidit",
	"deletable",
	"description",
	"eiditable",
	"id",
	"insertable",
	"mouduleId",
	"name",
	"projectId",
	"rawName",
	"title"
];

function create() {
  return {};
}

tableInfo.columnsArray=columnsArray;
tableInfo.create=create;
module.exports.tableInfo=tableInfo;