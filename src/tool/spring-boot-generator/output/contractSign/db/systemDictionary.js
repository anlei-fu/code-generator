let systemDictionary = {
  name: "systemDictionary",
  description: "",
  columns: {
    id: {
      name: "id",
      description: "编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    type: {
      name: "type",
      description: "字典类型",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    value: {
      name: "value",
      description: "字典值",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    sortNum: {
      name: "sortNum",
      description: "字典排序",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    remark: {
      name: "remark",
      description: "字典备注",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    }
  }
};

let columnsArray = [
  "id",
  "type",
  "value",
  "sortNum",
  "remark"
];

function create() {
  return {
  id: 325,
  type: "字典类型276",
  value: "字典值298",
  sortNum: 391,
  remark: "字典备注952"
};
}

systemDictionary.columnsArray=columnsArray;
systemDictionary.create=create;
module.exports=systemDictionary;