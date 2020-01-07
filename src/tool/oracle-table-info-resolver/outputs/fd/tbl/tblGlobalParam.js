exports.tblGlobalParam = {
	name: "tblGlobalParam",
	rawName: "TBL_GLOBAL_PARAM",
	columns: {
		timeVal: {
			nullable: true,
			isPk: false,
			description: "",
			name: "timeVal",
			rawName: "TIME_VAL",
			type: {
				name: "DATE",
				length: ""
			}
		},
		numberVal: {
			nullable: true,
			isPk: false,
			description: "",
			name: "numberVal",
			rawName: "NUMBER_VAL",
			type: {
				name: "NUMBER",
				length: "10"
			}
		},
		paramDesc: {
			nullable: true,
			isPk: false,
			description: "",
			name: "paramDesc",
			rawName: "PARAM_DESC",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		stringVal: {
			nullable: true,
			isPk: false,
			description: "",
			name: "stringVal",
			rawName: "STRING_VAL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		paramName: {
			nullable: false,
			isPk: false,
			description: "",
			name: "paramName",
			rawName: "PARAM_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

