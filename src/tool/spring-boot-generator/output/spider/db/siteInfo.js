let siteInfo = {
  name: "siteInfo",
  description: "网站信息",
  columns: {
    description: {
      name: "description",
      description: "描述",
      nullable: true,
      type: {
        name: "varchar",
        length: 45
      }
    },
    id: {
      name: "id",
      description: "编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    mainDomain: {
      name: "mainDomain",
      description: "主站",
      nullable: true,
      type: {
        name: "varchar",
        length: 45
      }
    },
    type: {
      name: "type",
      description: "网站类型",
      nullable: true,
      type: {
        name: "varchar",
        length: 30
      }
    }
  }
};

let columnsArray = [
  "description",
  "id",
  "mainDomain",
  "type"
];

function create() {
  return {
  description: "描述260",
  id: 114,
  mainDomain: "主站594",
  type: "网站类型147"
};
}

siteInfo.columnsArray=columnsArray;
siteInfo.create=create;
module.exports=siteInfo;