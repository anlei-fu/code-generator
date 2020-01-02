exports.sysDictionary = {
	name: "sysDictionary",
	rawName: "SYS_DICTIONARY",
	columns: {
		TYPE: {
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
		SHORT: {
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
		NAME: {
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
		VALUE: {
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
		DICID: {
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

