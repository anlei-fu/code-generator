let sysSystemDictionary = {
  name: "sysSystemDictionary",
  description: "",
  columns: {
    dicid: {
      name: "dicid",
      description: "瀛楀吀Id",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: 20
      }
    },
    enumName: {
      name: "enumName",
      description: "",
      nullable: true,
      type: {
        name: "varchar",
        length: 225
      }
    },
    enumType: {
      name: "enumType",
      description: "鏋氫妇绫诲瀷",
      nullable: false,
      type: {
        name: "varchar",
        length: 32
      }
    },
    sortId: {
      name: "sortId",
      description: "鎺掑簭",
      nullable: false,
      type: {
        name: "int",
        length: 2
      }
    },
    status: {
      name: "status",
      description: "鐘舵€?0-鍚敤,1-绂佺敤",
      nullable: false,
      type: {
        name: "int",
        length: 2
      }
    },
    systemId: {
      name: "systemId",
      description: "浣跨敤绯荤粺",
      nullable: true,
      type: {
        name: "int",
        length: 2
      }
    },
    text: {
      name: "text",
      description: "鏋氫妇椤瑰叿浣撳悕瀛?",
      nullable: false,
      type: {
        name: "varchar",
        length: 32
      }
    },
    value: {
      name: "value",
      description: "鏋氫妇value",
      nullable: false,
      type: {
        name: "varchar",
        length: 32
      }
    }
  }
};

let columnsArray = [
  "dicid",
  "enumName",
  "enumType",
  "sortId",
  "status",
  "systemId",
  "text",
  "value"
];

function create() {
  return {
  dicid: 559,
  enumName: "755",
  enumType: "鏋氫妇绫诲瀷939",
  sortId: 526,
  status: 258,
  systemId: 545,
  text: "鏋氫妇椤瑰叿浣撳悕瀛?849",
  value: "鏋氫妇value562"
};
}

sysSystemDictionary.columnsArray=columnsArray;
sysSystemDictionary.create=create;
module.exports=sysSystemDictionary;