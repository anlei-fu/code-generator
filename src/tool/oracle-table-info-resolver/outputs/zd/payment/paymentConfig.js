exports.paymentConfig = {
	name: "paymentConfig",
	rawName: "PAYMENT_CONFIG",
	columns: {
		ID: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		NAME: {
			nullable: false,
			isPk: false,
			description: "名字",
			name: "name",
			rawName: "NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		IMG: {
			nullable: false,
			isPk: false,
			description: "图片路径",
			name: "img",
			rawName: "IMG",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SORT_VAL: {
			nullable: false,
			isPk: false,
			description: "排序",
			name: "sortVal",
			rawName: "SORT_VAL",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		IMG_FONT: {
			nullable: true,
			isPk: false,
			description: "图片字体",
			name: "imgFont",
			rawName: "IMG_FONT",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: ""
};

