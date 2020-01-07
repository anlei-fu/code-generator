exports.students = {
	name: "students",
	rawName: "STUDENTS",
	columns: {
		sname: {
			nullable: false,
			isPk: false,
			description: "",
			name: "sname",
			rawName: "SNAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		class: {
			nullable: true,
			isPk: false,
			description: "",
			name: "class",
			rawName: "CLASS",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		sno: {
			nullable: false,
			isPk: false,
			description: "",
			name: "sno",
			rawName: "SNO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		sbirthday: {
			nullable: true,
			isPk: false,
			description: "",
			name: "sbirthday",
			rawName: "SBIRTHDAY",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ssex: {
			nullable: false,
			isPk: false,
			description: "",
			name: "ssex",
			rawName: "SSEX",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

