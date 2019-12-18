let stationInfo = {
  name: "stationInfo",
  description: "车站信息",
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
      description: "车站全称",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    id: {
      name: "id",
      description: "车站编号",
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
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    jobType: {
      name: "jobType",
      description: "技术作业别",
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
      description: "车站简称",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    stationCode: {
      name: "stationCode",
      description: "车站编码",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    stationGrade: {
      name: "stationGrade",
      description: "车站等级",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    stationType: {
      name: "stationType",
      description: "车站类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    status: {
      name: "status",
      description: "状态",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    ternoutNum: {
      name: "ternoutNum",
      description: "岔道数量",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    thighTrackNum: {
      name: "thighTrackNum",
      description: "股道数量",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    trackDivisionId: {
      name: "trackDivisionId",
      description: "公务段编号",
      nullable: false,
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
    }
  }
};

let columnsArray = [
  "createTime",
  "fullName",
  "id",
  "inputCode",
  "isDelete",
  "jobType",
  "operator",
  "shortName",
  "stationCode",
  "stationGrade",
  "stationType",
  "status",
  "ternoutNum",
  "thighTrackNum",
  "trackDivisionId",
  "updateTime"
];

function create() {
  return {
  createTime: "2019-12-18 1::37",
  fullName: "车站全称407",
  id: 397,
  inputCode: "输入代码9",
  isDelete: 239,
  jobType: 995,
  operator: 815,
  shortName: "车站简称883",
  stationCode: "车站编码772",
  stationGrade: 195,
  stationType: 797,
  status: 223,
  ternoutNum: 193,
  thighTrackNum: 259,
  trackDivisionId: 446,
  updateTime: "2019-11-18 1::37"
};
}

stationInfo.columnsArray=columnsArray;
stationInfo.create=create;
module.exports=stationInfo;