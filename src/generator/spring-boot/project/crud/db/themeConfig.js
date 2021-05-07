let themeConfig = {
	name: "themeConfig",
	description: "",
	columns: {
		baseColor1: {
			name: "baseColor1",
			description: "",
			rawName: "base_color1",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		baseColor2: {
			name: "baseColor2",
			description: "",
			rawName: "base_color2",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
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
		login: {
			name: "login",
			description: "",
			rawName: "login",
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
		}
	},
	rawName: "theme_config",
	primaryColumn: "id",
	nameColumn: {
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
	}
};

let columnsArray = [
	"baseColor1",
	"baseColor2",
	"id",
	"login",
	"projectId"
];

function create() {
  return {};
}

themeConfig.columnsArray=columnsArray;
themeConfig.create=create;
module.exports.themeConfig=themeConfig;