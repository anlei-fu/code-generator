let fieldInfo = {
	name: "fieldInfo",
	description: "",
	columns: {
		batchEditable: {
			name: "batchEditable",
			description: "",
			defaultValue: "",
			rawName: "batch_editable",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		defaultShow: {
			name: "defaultShow",
			description: "",
			defaultValue: "",
			rawName: "default_show",
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
		editable: {
			name: "editable",
			description: "",
			defaultValue: "",
			rawName: "editable",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		filterType: {
			name: "filterType",
			description: "",
			rawName: "filter_type",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		formatPattern: {
			name: "formatPattern",
			description: "",
			rawName: "format_pattern",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		formatType: {
			name: "formatType",
			description: "",
			rawName: "format_type",
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
		insertNullable: {
			name: "insertNullable",
			description: "",
			defaultValue: "",
			rawName: "insert_nullable",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
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
		isName: {
			name: "isName",
			description: "",
			defaultValue: "",
			rawName: "is_name",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		isPk: {
			name: "isPk",
			description: "",
			defaultValue: "",
			rawName: "is_pk",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		javaType: {
			name: "javaType",
			description: "",
			defaultValue: "",
			rawName: "java_type",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
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
		noticeText: {
			name: "noticeText",
			description: "",
			rawName: "notice_text",
			nullable: true,
			type: {
				name: "varchar",
				length: 256
			}
		},
		order: {
			name: "order",
			description: "",
			defaultValue: "",
			rawName: "order",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
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
		realColumn: {
			name: "realColumn",
			description: "",
			defaultValue: "",
			rawName: "real_column",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		tableId: {
			name: "tableId",
			description: "",
			rawName: "table_id",
			nullable: false,
			type: {
				name: "int",
				length: 11
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
	rawName: "field_info",
	primaryColumn: "id",
	nameColumn: {
		name: "name",
		score: 2.3553921690811057,
		content: "name",
		weight: 1,
		totalTokenCount: 1
	}
};

let columnsArray = [
	"batchEditable",
	"defaultShow",
	"description",
	"editable",
	"filterType",
	"formatPattern",
	"formatType",
	"id",
	"insertNullable",
	"insertable",
	"isName",
	"isPk",
	"javaType",
	"name",
	"noticeText",
	"order",
	"rawName",
	"realColumn",
	"tableId",
	"title"
];

function create() {
  return {};
}

fieldInfo.columnsArray=columnsArray;
fieldInfo.create=create;
module.exports.fieldInfo=fieldInfo;