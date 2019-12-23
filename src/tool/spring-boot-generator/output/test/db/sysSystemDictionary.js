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
        length: null
      }
    },
    enumName: {
      name: "enumName",
      description: "",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    enumType: {
      name: "enumType",
      description: "鏋氫妇绫诲瀷",
      nullable: false,
      type: {
        name: "varchar",
        length: null
      }
    },
    text: {
      name: "text",
      description: "鏋氫妇椤瑰叿浣撳悕瀛?",
      nullable: false,
      type: {
        name: "varchar",
        length: null
      }
    },
    value: {
      name: "value",
      description: "鏋氫妇value",
      nullable: false,
      type: {
        name: "varchar",
        length: null
      }
    },
    sortId: {
      name: "sortId",
      description: "鎺掑簭",
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    status: {
      name: "status",
      description: "鐘舵€?0-鍚敤,1-绂佺敤",
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    systemId: {
      name: "systemId",
      description: "浣跨敤绯荤粺",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    }
  }
};

let columnsArray = [
  "dicid",
  "enumName",
  "enumType",
  "text",
  "value",
  "sortId",
  "status",
  "systemId"
];

function create() {
  return {
  dicid: 806,
  enumName: "142",
  enumType: "鏋氫妇绫诲瀷163",
  text: "鏋氫妇椤瑰叿浣撳悕瀛?303",
  value: "鏋氫妇value14",
  sortId: 553,
  status: 401,
  systemId: 947
};
}

sysSystemDictionary.columnsArray=columnsArray;
sysSystemDictionary.create=create;
module.exports=sysSystemDictionary;