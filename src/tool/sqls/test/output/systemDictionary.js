let systemDictionary = {
  name: "systemDictionary",
  columns: {
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
    type: {
      name: "type",
      description: "字典类型",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    value: {
      name: "value",
      description: "字典值",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    sortNum: {
      name: "sortNum",
      description: "字典排序",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    remark: {
      name: "remark",
      description: "字典备注",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
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
  id: 913,
  type: "字典类型757",
  value: "字典值337",
  sortNum: 417,
  remark: "字典备注887"
};
}

systemDictionary.columnsArray=columnsArray;
systemDictionary.create=create;
module.exports=systemDictionary;