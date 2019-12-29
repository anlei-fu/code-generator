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
				name: "number",
				length: 10
			}
		},
		cno: {
			nullable: false,
			isPk: false,
			description: "",
			name: "cno",
			rawName: "CNO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		sno: {
			nullable: false,
			isPk: false,
			description: "",
			name: "sno",
			rawName: "SNO",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

