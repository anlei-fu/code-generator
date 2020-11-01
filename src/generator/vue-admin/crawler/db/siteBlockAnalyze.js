let siteBlockAnalyze = {
	name: "siteBlockAnalyze",
	description: "",
	columns: {
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
		}
	},
	rawName: "site_block_analyze",
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
	"id"
];

function create() {
  return {};
}

siteBlockAnalyze.columnsArray=columnsArray;
siteBlockAnalyze.create=create;
module.exports.siteBlockAnalyze=siteBlockAnalyze;