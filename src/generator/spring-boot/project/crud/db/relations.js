exports.relations = {
	aditionalOption: [
		{
			otherTable: "tableInfo",
			otherTableColumn: "id",
			selfColumn: "tableId",
			additionalCondition: "",
			relationType: "manyToOne"
		}
	],
	fieldInfo: [
		{
			otherTable: "tableInfo",
			otherTableColumn: "id",
			selfColumn: "tableId",
			additionalCondition: "",
			relationType: "manyToOne"
		}
	],
	moduleS: [
		{
			otherTable: "project",
			otherTableColumn: "id",
			selfColumn: "projectId",
			additionalCondition: "",
			relationType: "oneToMany"
		}
	],
	tableInfo: [
		{
			otherTable: "project",
			otherTableColumn: "id",
			selfColumn: "projectId",
			additionalCondition: "",
			relationType: "oneToMany"
		}
	],
	themeConfig: [
		{
			otherTable: "project",
			otherTableColumn: "id",
			selfColumn: "projectId",
			additionalCondition: "",
			relationType: "oneToMany"
		}
	],
	validator: [
		{
			otherTable: "fieldInfo",
			otherTableColumn: "id",
			selfColumn: "fieldId",
			additionalCondition: "",
			relationType: "manyToOne"
		}
	]
};

