exports.fdVReportSystemCap = {
	name: "fdVReportSystemCap",
	rawName: "FD_V_REPORT_SYSTEM_CAP",
	columns: {
		bond: {
			nullable: true,
			isPk: false,
			description: "",
			name: "bond",
			rawName: "BOND",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		profitUndraw: {
			nullable: true,
			isPk: false,
			description: "",
			name: "profitUndraw",
			rawName: "PROFIT_UNDRAW",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		upCommission: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upCommission",
			rawName: "UP_COMMISSION",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		downBalance: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downBalance",
			rawName: "DOWN_BALANCE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		companyId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		recvBalance: {
			nullable: true,
			isPk: false,
			description: "",
			name: "recvBalance",
			rawName: "RECV_BALANCE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		deposit: {
			nullable: true,
			isPk: false,
			description: "",
			name: "deposit",
			rawName: "DEPOSIT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		bankBalance: {
			nullable: true,
			isPk: false,
			description: "",
			name: "bankBalance",
			rawName: "BANK_BALANCE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		shortBorrow: {
			nullable: true,
			isPk: false,
			description: "",
			name: "shortBorrow",
			rawName: "SHORT_BORROW",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		upBalance: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upBalance",
			rawName: "UP_BALANCE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		companyName: {
			nullable: false,
			isPk: false,
			description: "",
			name: "companyName",
			rawName: "COMPANY_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		initInputAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "initInputAmount",
			rawName: "INIT_INPUT_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		borrow: {
			nullable: true,
			isPk: false,
			description: "",
			name: "borrow",
			rawName: "BORROW",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		downCommission: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downCommission",
			rawName: "DOWN_COMMISSION",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		serviceFee: {
			nullable: true,
			isPk: false,
			description: "",
			name: "serviceFee",
			rawName: "SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	}
};

