let downSystemAnalyze = {
	name: "downSystemAnalyze",
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
		}
	},
	rawName: "down_system_analyze",
	primaryColumn: "id",
	nameColumn: {
		name: "id",
		description: "",
		isPk: true,
		rawName: "id",
		nullable: false,
		type: {
			name: "int",
			length: 11
		}
	}
};

let columnsArray = [
	"id"
];

function create() {
  return {};
}

downSystemAnalyze.columnsArray=columnsArray;
downSystemAnalyze.create=create;
module.exports.downSystemAnalyze=downSystemAnalyze;