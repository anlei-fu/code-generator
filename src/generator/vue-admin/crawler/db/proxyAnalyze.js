let proxyAnalyze = {
	name: "proxyAnalyze",
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
	rawName: "proxy_analyze",
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

proxyAnalyze.columnsArray=columnsArray;
proxyAnalyze.create=create;
module.exports.proxyAnalyze=proxyAnalyze;