exports.fdReportBalanceDiffer = {
	name: "fdReportBalanceDiffer",
	rawName: "FD_REPORT_BALANCE_DIFFER",
	columns: {
		id: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "id",
			rawName: "ID",
			type: {
				name: "number",
				length: 20
			}
		},
		accountType: {
			nullable: false,
			isPk: false,
			description: "账户类型：1、上游渠道账户，2、下游渠道账户",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		balanceDifference: {
			nullable: false,
			isPk: false,
			description: "余额差异",
			name: "balanceDifference",
			rawName: "BALANCE_DIFFERENCE",
			type: {
				name: "number",
				length: 20
			}
		},
		noteTime: {
			nullable: false,
			isPk: false,
			description: "记录时间",
			name: "noteTime",
			rawName: "NOTE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		noteUser: {
			nullable: false,
			isPk: false,
			description: "记录人",
			name: "noteUser",
			rawName: "NOTE_USER",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

