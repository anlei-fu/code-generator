let site = {
	name: "site",
	description: "site info",
	columns: {
		id: {
			name: "id",
			description: "",
			isPk: true,
			autoIncrement: true,
			rawName: "id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		name: {
			name: "name",
			description: "the name of site",
			rawName: "name",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		domain: {
			name: "domain",
			description: "",
			rawName: "domain",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		description: {
			name: "description",
			description: "the description of site",
			rawName: "description",
			nullable: true,
			type: {
				name: "varchar",
				length: 200
			}
		},
		homePageUrl: {
			name: "homePageUrl",
			description: "the home page url of site",
			rawName: "home_page_url",
			nullable: false,
			type: {
				name: "varchar",
				length: 100
			}
		},
		parentSiteId: {
			name: "parentSiteId",
			description: "the parent site of the site",
			defaultValue: "the parent site of the site",
			rawName: "parent_site_id",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		crawlNeedUseCookie: {
			name: "crawlNeedUseCookie",
			description: "need use cookie",
			defaultValue: "need use cookie",
			rawName: "crawl_need_use_cookie",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		loginScriptId: {
			name: "loginScriptId",
			description: "the login script of the site",
			rawName: "login_script_id",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		loginNeedVcode: {
			name: "loginNeedVcode",
			description: "login need vcode",
			defaultValue: "login need vcode",
			rawName: "login_need_vcode",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		loginCaptaType: {
			name: "loginCaptaType",
			description: "the captaa type of the site",
			rawName: "login_capta_type",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		needUseProxy: {
			name: "needUseProxy",
			description: "need proxy",
			defaultValue: "need proxy",
			rawName: "need_use_proxy",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		ipDelayTimeout: {
			name: "ipDelayTimeout",
			description: "ip delay timeout when crawl success",
			defaultValue: "ip delay timeout when crawl success",
			rawName: "ip_delay_timeout",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		ipBlockTimeout: {
			name: "ipBlockTimeout",
			description: "ip block timeout when task be blocked",
			rawName: "ip_block_timeout",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		ipHourSpeedLimit: {
			name: "ipHourSpeedLimit",
			description: "",
			defaultValue: "",
			rawName: "ip_hour_speed_limit",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		ipMinuteSpeedLimit: {
			name: "ipMinuteSpeedLimit",
			description: "",
			defaultValue: "",
			rawName: "ip_minute_speed_limit",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		ipDaySpeedLimit: {
			name: "ipDaySpeedLimit",
			description: "",
			defaultValue: "",
			rawName: "ip_day_speed_limit",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		accountAllowCrossIp: {
			name: "accountAllowCrossIp",
			description: "",
			defaultValue: "",
			rawName: "account_allow_cross_ip",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		accountAllowMultiple: {
			name: "accountAllowMultiple",
			description: "allow use an account multiple times",
			defaultValue: "allow use an account multiple times",
			rawName: "account_allow_multiple",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		accountMinuteSpeedLimit: {
			name: "accountMinuteSpeedLimit",
			description: "",
			defaultValue: "",
			rawName: "account_minute_speed_limit",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		accountHourSpeedLimit: {
			name: "accountHourSpeedLimit",
			description: "",
			defaultValue: "",
			rawName: "account_hour_speed_limit",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		accountDaySpeedLimit: {
			name: "accountDaySpeedLimit",
			description: "",
			defaultValue: "",
			rawName: "account_day_speed_limit",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		accountMaxBlockCount: {
			name: "accountMaxBlockCount",
			description: "",
			rawName: "account_max_block_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		accountBlockTimeout: {
			name: "accountBlockTimeout",
			description: "",
			rawName: "account_block_timeout",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		accountMaxCookieCount: {
			name: "accountMaxCookieCount",
			description: "",
			defaultValue: "",
			rawName: "account_max_cookie_count",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		accountDelayTimeout: {
			name: "accountDelayTimeout",
			description: "",
			rawName: "account_delay_timeout",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		cookieMaxBlockCount: {
			name: "cookieMaxBlockCount",
			description: "",
			rawName: "cookie_max_block_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		cookieExpireTimeout: {
			name: "cookieExpireTimeout",
			description: "the timeout ookie expire",
			defaultValue: "the timeout ookie expire",
			rawName: "cookie_expire_timeout",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		cookieDelayTimeout: {
			name: "cookieDelayTimeout",
			description: "",
			rawName: "cookie_delay_timeout",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		enableStatus: {
			name: "enableStatus",
			description: "",
			defaultValue: "",
			rawName: "enable_status",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		createTime: {
			name: "createTime",
			description: "create time",
			defaultValue: "create time",
			rawName: "create_time",
			nullable: false,
			type: {
				name: "timestamp"
			}
		}
	},
	rawName: "site",
	primaryColumn: "id",
	nameColumn: {
		name: "name",
		score: 6.996942042300349,
		content: "name",
		weight: 1,
		totalTokenCount: 1
	},
	columnsArray :[
		"id",
		"name",
		"domain",
		"description",
		"homePageUrl",
		"parentSiteId",
		"crawlNeedUseCookie",
		"loginScriptId",
		"loginNeedVcode",
		"loginCaptaType",
		"needUseProxy",
		"ipDelayTimeout",
		"ipBlockTimeout",
		"ipHourSpeedLimit",
		"ipMinuteSpeedLimit",
		"ipDaySpeedLimit",
		"accountAllowCrossIp",
		"accountAllowMultiple",
		"accountMinuteSpeedLimit",
		"accountHourSpeedLimit",
		"accountDaySpeedLimit",
		"accountMaxBlockCount",
		"accountBlockTimeout",
		"accountMaxCookieCount",
		"accountDelayTimeout",
		"cookieMaxBlockCount",
		"cookieExpireTimeout",
		"cookieDelayTimeout",
		"enableStatus",
		"createTime"
	]
};

module.exports.site=site;