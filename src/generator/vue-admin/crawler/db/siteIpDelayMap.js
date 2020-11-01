let siteIpDelayMap = {
	name: "siteIpDelayMap",
	description: "",
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
		siteId: {
			name: "siteId",
			description: "",
			rawName: "site_id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		delayTimeoutTime: {
			name: "delayTimeoutTime",
			description: "",
			rawName: "delay_timeout_time",
			nullable: false,
			type: {
				name: "timestamp"
			}
		},
		ip: {
			name: "ip",
			description: "",
			rawName: "ip",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		}
	},
	rawName: "site_ip_delay_map",
	primaryColumn: "id",
	nameColumn: {
		name: "ip",
		score: 0.734434033813357,
		content: "ip",
		weight: 1,
		totalTokenCount: 1
	}
};

let columnsArray = [
	"id",
	"siteId",
	"delayTimeoutTime",
	"ip"
];

function create() {
  return {};
}

siteIpDelayMap.columnsArray=columnsArray;
siteIpDelayMap.create=create;
module.exports.siteIpDelayMap=siteIpDelayMap;