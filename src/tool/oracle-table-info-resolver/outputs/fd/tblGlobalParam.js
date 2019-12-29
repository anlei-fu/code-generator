exports.tblGlobalParam = {
	name: "tblGlobalParam",
	rawName: "TBL_GLOBAL_PARAM",
	columns: {
		timeVal: {
			nullable: false,
			isPk: false,
			description: "",
			name: "timeVal",
			rawName: "TIME_VAL",
			type: {
				name: "date",
				length: null
			}
		},
		numberVal: {
			nullable: false,
			isPk: false,
			description: "",
			name: "numberVal",
			rawName: "NUMBER_VAL",
			type: {
				name: "number",
				length: 10
			}
		},
		paramDesc: {
			nullable: false,
			isPk: false,
			description: "",
			name: "paramDesc",
			rawName: "PARAM_DESC",
			type: {
				name: "varchar2",
				length: null
			}
		},
		stringVal: {
			nullable: false,
			isPk: false,
			description: "",
			name: "stringVal",
			rawName: "STRING_VAL",
			type: {
				name: "varchar2",
				length: null
			}
		},
		paramName: {
			nullable: false,
			isPk: false,
			description: "",
			name: "paramName",
			rawName: "PARAM_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

