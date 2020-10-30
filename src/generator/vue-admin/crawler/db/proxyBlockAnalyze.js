let proxyBlockAnalyze = {
	name: "proxyBlockAnalyze",
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
	rawName: "proxy_block_analyze",
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

proxyBlockAnalyze.columnsArray=columnsArray;
proxyBlockAnalyze.create=create;
module.exports.proxyBlockAnalyze=proxyBlockAnalyze;