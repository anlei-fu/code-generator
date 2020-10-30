let crawlerAnalyze = {
	name: "crawlerAnalyze",
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
	rawName: "crawler_analyze",
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

crawlerAnalyze.columnsArray=columnsArray;
crawlerAnalyze.create=create;
module.exports.crawlerAnalyze=crawlerAnalyze;