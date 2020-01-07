exports.scores = {
	name: "scores",
	rawName: "SCORES",
	columns: {
		degree: {
			nullable: false,
			isPk: false,
			description: "",
			name: "degree",
			rawName: "DEGREE",
			type: {
				name: "NUMBER",
				length: "10"
			}
		},
		cno: {
			nullable: false,
			isPk: false,
			description: "",
			name: "cno",
			rawName: "CNO",
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
		}
	}
};

