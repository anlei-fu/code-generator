let trackDivisionInfo = {
  name: "trackDivisionInfo",
  description: "工务段信息",
  columns: {
    bureauId: {
      name: "bureauId",
      description: "铁路局编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
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
      description: "工务段名称",
      nullable: false,
      type: {
        name: "varchar",
        length: 128
      }
    },
    id: {
      name: "id",
      description: "编号",
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
      description: "工务段简称",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    updateTime: {
      name: "updateTime",
      description: "更新时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    }
  }
};

let columnsArray = [
  "bureauId",
  "createTime",
  "fullName",
  "id",
  "inputCode",
  "isDelete",
  "operator",
  "shortName",
  "updateTime"
];

function create() {
  return {
  bureauId: 216,
  createTime: "2019-12-25 1::37",
  fullName: "工务段名称896",
  id: 627,
  inputCode: "输入代码978",
  isDelete: 131,
  operator: 878,
  shortName: "工务段简称687",
  updateTime: "2019-12-18 1::37"
};
}

trackDivisionInfo.columnsArray=columnsArray;
trackDivisionInfo.create=create;
module.exports=trackDivisionInfo;