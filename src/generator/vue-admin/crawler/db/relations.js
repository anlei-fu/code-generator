exports.relations = {
	crawlScript: [
		{
			otherTable: "site",
			otherTableColumn: "id",
			selfColumn: "siteId",
			additionalCondition: "",
			relationType: "manyToOne"
		}
	],
	crawlTask: [
		{
			otherTable: "crawler",
			otherTableColumn: "id",
			selfColumn: "crawlerId",
			additionalCondition: "",
			relationType: "manayToOne"
		},
		{
			otherTable: "site",
			otherTableColumn: "id",
			selfColumn: "siteId",
			additionalCondition: "",
			relationType: "ManyToOne"
		},
		{
			otherTable: "proxy",
			otherTableColumn: "id",
			selfColumn: "proxyId",
			additionalCondition: "",
			relationType: "manyToOne"
		},
		{
			otherTable: "siteAccount",
			otherTableColumn: "id",
			selfColumn: "siteAccountId",
			additionalCondition: "",
			relationType: "manyToOne"
		}
	],
	news: [
		{
			otherTable: "site",
			otherTableColumn: "id",
			selfColumn: "siteId",
			additionalCondition: "",
			relationType: "oneToOne"
		}
	],
	site: [
		{
			otherTable: "script",
			otherTableColumn: "id",
			selfColumn: "crawlScriptId",
			additionalCondition: "",
			relationType: "oneToOne"
		},
		{
			otherTable: "script",
			otherTableColumn: "id",
			selfColumn: "loginScriptId",
			additionalCondition: "",
			relationType: "oneToOne"
		}
	],
	siteAccount: [
		{
			otherTable: "site",
			otherTableColumn: "id",
			selfColumn: "siteId",
			additionalCondition: "",
			relationType: "oneToOne"
		}
	],
	siteAccountBlockMap: [
		{
			otherTable: "siteAccount",
			otherTableColumn: "id",
			selfColumn: "accountId",
			additionalCondition: "",
			relationType: "oneToOne"
		}
	],
	siteBadUrlBloom: [
		{
			otherTable: "site",
			otherTableColumn: "id",
			selfColumn: "siteId",
			additionalCondition: "",
			relationType: "oneToOne"
		}
	],
	siteBlockRule: [
		{
			otherTable: "site",
			otherTableColumn: "id",
			selfColumn: "siteId",
			additionalCondition: "",
			relationType: "oneToOne"
		}
	],
	siteIpBlockMap: [
		{
			otherTable: "site",
			otherTableColumn: "id",
			selfColumn: "siteId",
			additionalCondition: "",
			relationType: "oneToOne"
		}
	],
	siteIpDelayMap: [
		{
			otherTable: "site",
			otherTableColumn: "id",
			selfColumn: "siteId",
			additionalCondition: "",
			relationType: "oneToOne"
		}
	],
	siteUrlBloom: [
		{
			otherTable: "site",
			otherTableColumn: "id",
			selfColumn: "siteId",
			additionalCondition: "",
			relationType: "oneToOne"
		}
	],
	url: [
		{
			otherTable: "site",
			otherTableColumn: "id",
			selfColumn: "siteId",
			additionalCondition: "",
			relationType: "oneToMany"
		}
	]
};

