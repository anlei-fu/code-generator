exports.paymentConfig = {
	name: "paymentConfig",
	rawName: "PAYMENT_CONFIG",
	columns: {
		id: {
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
		name: {
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
		img: {
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
		sortVal: {
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
		imgFont: {
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

