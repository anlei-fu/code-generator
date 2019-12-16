let workshopInfo = {
  name: "workshopInfo",
  description: "线路车间信息",
  columns: {
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    fullName: {
      name: "fullName",
      description: "车间名称",
      nullable: false,
      type: {
        name: "varchar",
        length: 64
      }
    },
    id: {
      name: "id",
      description: "车间编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    inputCode: {
      name: "inputCode",
      description: "输入代码",
      nullable: true,
      type: {
        name: "varchar",
        length: 16
      }
    },
    isDelete: {
      name: "isDelete",
      description: "删除标记",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    lineId: {
      name: "lineId",
      description: "线路编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    operator: {
      name: "operator",
      description: "操作人",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    shortName: {
      name: "shortName",
      description: "车间简称",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    trackDivisionId: {
      name: "trackDivisionId",
      description: "工务段编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    updateTime: {
      name: "updateTime",
      description: "更新时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    workshopType: {
      name: "workshopType",
      description: "车间类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    }
  }
};

let columnsArray = [
  "createTime",
  "fullName",
  "id",
  "inputCode",
  "isDelete",
  "lineId",
  "operator",
  "shortName",
  "trackDivisionId",
  "updateTime",
  "workshopType"
];

function create() {
  return {
  createTime: "2019-12-23 2:3:41",
  fullName: "车间名称916",
  id: 524,
  inputCode: "输入代码593",
  isDelete: 388,
  lineId: 222,
  operator: 750,
  shortName: "车间简称680",
  trackDivisionId: 11,
  updateTime: "2020-1-16 2:3:41",
  workshopType: 183
};
}

workshopInfo.columnsArray=columnsArray;
workshopInfo.create=create;
module.exports=workshopInfo;