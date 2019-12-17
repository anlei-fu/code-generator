let workareaInfo = {
  name: "workareaInfo",
  description: "线路工区",
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
      description: "工区名称",
      nullable: false,
      type: {
        name: "varchar",
        length: 64
      }
    },
    id: {
      name: "id",
      description: "工区编号",
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
      description: "工区简称",
      nullable: false,
      type: {
        name: "varchar",
        length: 32
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
    workshopId: {
      name: "workshopId",
      description: "线路车间编号",
      nullable: false,
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
  "operator",
  "shortName",
  "updateTime",
  "workshopId"
];

function create() {
  return {
  createTime: "2019-12-16 2:3:19",
  fullName: "工区名称152",
  id: 651,
  inputCode: "输入代码379",
  isDelete: 692,
  operator: 876,
  shortName: "工区简称885",
  updateTime: "2020-1-17 2:3:19",
  workshopId: 31
};
}

workareaInfo.columnsArray=columnsArray;
workareaInfo.create=create;
module.exports=workareaInfo;