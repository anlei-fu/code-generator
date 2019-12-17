let domainInfo = {
  name: "domainInfo",
  description: "domain信息",
  columns: {
    domain: {
      name: "domain",
      description: "网站名字",
      nullable: true,
      type: {
        name: "varchar",
        length: 45
      }
    },
    domainId: {
      name: "domainId",
      description: "网站id",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    encoding: {
      name: "encoding",
      description: "编码",
      nullable: true,
      type: {
        name: "varchar",
        length: 10
      }
    },
    httpProtocal: {
      name: "httpProtocal",
      description: "协议类型",
      nullable: true,
      type: {
        name: "varchar",
        length: 10
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
    maxSpeed: {
      name: "maxSpeed",
      description: "最大速度",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    needCookie: {
      name: "needCookie",
      description: "需要cookie",
      nullable: false,
      type: {
        name: "smallint",
        length: 1
      }
    },
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
        length: 100
      }
    },
    type: {
      name: "type",
      description: "网站类型",
      nullable: true,
      type: {
        name: "varchar",
        length: 10
      }
    }
  }
};

let columnsArray = [
  "domain",
  "domainId",
  "encoding",
  "httpProtocal",
  "id",
  "maxSpeed",
  "needCookie",
  "remark",
  "type"
];

function create() {
  return {
  domain: "网站名字224",
  domainId: 875,
  encoding: "编码639",
  httpProtocal: "协议类型878",
  id: 913,
  maxSpeed: 452,
  needCookie: 288,
  remark: "备注154",
  type: "网站类型961"
};
}

domainInfo.columnsArray=columnsArray;
domainInfo.create=create;
module.exports=domainInfo;