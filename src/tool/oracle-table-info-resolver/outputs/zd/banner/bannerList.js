exports.bannerList = {
	name: "bannerList",
	rawName: "BANNER_LIST",
	columns: {
		titId: {
			nullable: false,
			isPk: false,
			description: "id",
			name: "titId",
			rawName: "TIT_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		titMsg: {
			nullable: false,
			isPk: false,
			description: "banner信息",
			name: "titMsg",
			rawName: "TIT_MSG",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		imgUrl: {
			nullable: false,
			isPk: false,
			description: "图片地址",
			name: "imgUrl",
			rawName: "IMG_URL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		state: {
			nullable: false,
			isPk: false,
			description: "状态",
			name: "state",
			rawName: "STATE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		scrUrl: {
			nullable: true,
			isPk: false,
			description: "图片链接",
			name: "scrUrl",
			rawName: "SCR_URL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		sort: {
			nullable: false,
			isPk: false,
			description: "排序",
			name: "sort",
			rawName: "SORT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		pageNo: {
			nullable: false,
			isPk: false,
			description: "页面编号",
			name: "pageNo",
			rawName: "PAGE_NO",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	},
	description: "滚动头列表"
};

