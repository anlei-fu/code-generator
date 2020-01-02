exports.userIpExclude = {
	name: "userIpExclude",
	rawName: "USER_IP_EXCLUDE",
	columns: {
		TYPE: {
			nullable: true,
			isPk: false,
			description: ":黑名单 :白名单",
			name: "type",
			rawName: "TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		IP_ADDRESS: {
			nullable: true,
			isPk: false,
			description: "",
			name: "ipAddress",
			rawName: "IP_ADDRESS",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "IP黑名单"
};

