exports.tblGlobalParam = {
	name: "tblGlobalParam",
	rawName: "TBL_GLOBAL_PARAM",
	columns: {
		TIME_VAL: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "timeVal",
			rawName: "TIME_VAL",
			type: {
				name: "DATE",
				length: ""
			}
		},
		NUMBER_VAL: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "numberVal",
			rawName: "NUMBER_VAL",
			type: {
				name: "NUMBER",
				length: "10"
			}
		},
		PARAM_DESC: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "paramDesc",
			rawName: "PARAM_DESC",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		STRING_VAL: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "stringVal",
			rawName: "STRING_VAL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PARAM_NAME: {
			nullable: "N",
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

