exports.sysDictionary = {
	name: "sysDictionary",
	rawName: "SYS_DICTIONARY",
	columns: {
		type: {
			nullable: false,
			isPk: false,
			description: "",
			name: "type",
			rawName: "TYPE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		short: {
			nullable: true,
			isPk: false,
			description: "",
			name: "short",
			rawName: "SHORT",
			type: {
				name: "NUMBER",
				length: "10"
			}
		},
		name: {
			nullable: false,
			isPk: false,
			description: "",
			name: "name",
			rawName: "NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		value: {
			nullable: false,
			isPk: false,
			description: "",
			name: "value",
			rawName: "VALUE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		dicid: {
			nullable: false,
			isPk: false,
			description: "",
			name: "dicid",
			rawName: "DICID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	},
	description: ""
};

