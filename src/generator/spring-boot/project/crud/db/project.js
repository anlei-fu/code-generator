let project = {
	name: "project",
	description: "",
	columns: {
		company: {
			name: "company",
			description: "",
			rawName: "company",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		createTime: {
			name: "createTime",
			description: "",
			defaultValue: "",
			rawName: "create_time",
			nullable: true,
			type: {
				name: "timestamp"
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
		name: {
			name: "name",
			description: "",
			rawName: "name",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		}
	},
	rawName: "project",
	primaryColumn: "id",
	nameColumn: {
		name: "name",
		score: 2.2020867690744006,
		content: "name",
		weight: 1,
		totalTokenCount: 1
	}
};

let columnsArray = [
	"company",
	"createTime",
	"description",
	"id",
	"name"
];

function create() {
  return {};
}

project.columnsArray=columnsArray;
project.create=create;
module.exports.project=project;