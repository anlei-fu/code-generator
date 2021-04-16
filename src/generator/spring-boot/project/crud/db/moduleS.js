let moduleS = {
	name: "moduleS",
	description: "",
	columns: {
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
		level: {
			name: "level",
			description: "",
			defaultValue: "",
			rawName: "level",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
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
		parentMouduleId: {
			name: "parentMouduleId",
			description: "",
			defaultValue: "",
			rawName: "parent_moudule_id",
			nullable: true,
			type: {
				name: "int",
				length: 11
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
		}
	},
	rawName: "module_s",
	primaryColumn: "id",
	nameColumn: {
		name: "name",
		score: 1.6916469974080208,
		content: "name",
		weight: 1,
		totalTokenCount: 1
	}
};

let columnsArray = [
	"description",
	"id",
	"level",
	"name",
	"parentMouduleId",
	"projectId"
];

function create() {
  return {};
}

moduleS.columnsArray=columnsArray;
moduleS.create=create;
module.exports.moduleS=moduleS;