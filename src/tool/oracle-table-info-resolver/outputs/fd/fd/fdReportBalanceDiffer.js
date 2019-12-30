exports.fdReportBalanceDiffer = {
	name: "fdReportBalanceDiffer",
	rawName: "FD_REPORT_BALANCE_DIFFER",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ACCOUNT_TYPE: {
			nullable: "N",
			isPk: false,
			description: "账户类型：1、上游渠道账户，2、下游渠道账户",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BALANCE_DIFFERENCE: {
			nullable: "N",
			isPk: false,
			description: "余额差异",
			name: "balanceDifference",
			rawName: "BALANCE_DIFFERENCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		NOTE_TIME: {
			nullable: "N",
			isPk: false,
			description: "记录时间",
			name: "noteTime",
			rawName: "NOTE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		NOTE_USER: {
			nullable: "N",
			isPk: false,
			description: "记录人",
			name: "noteUser",
			rawName: "NOTE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

