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
        length: null
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
        length: null
      }
    },
    inputCode: {
      name: "inputCode",
      description: "输入代码",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    isDelete: {
      name: "isDelete",
      description: "删除标记",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    jobType: {
      name: "jobType",
      description: "技术作业别",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    operator: {
      name: "operator",
      description: "操作人",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    shortName: {
      name: "shortName",
      description: "车站简称",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    stationCode: {
      name: "stationCode",
      description: "车站编码",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    stationGrade: {
      name: "stationGrade",
      description: "车站等级",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    stationType: {
      name: "stationType",
      description: "车站类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    status: {
      name: "status",
      description: "状态",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    ternoutNum: {
      name: "ternoutNum",
      description: "岔道数量",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    thighTrackNum: {
      name: "thighTrackNum",
      description: "股道数量",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    trackDivisionId: {
      name: "trackDivisionId",
      description: "公务段编号",
      nullable: false,
      type: {
        name: "int",
        length: null
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
  createTime: "2019-12-18 1:4:50",
  fullName: "车站全称613",
  id: 143,
  inputCode: "输入代码446",
  isDelete: 747,
  jobType: 312,
  operator: 257,
  shortName: "车站简称399",
  stationCode: "车站编码429",
  stationGrade: 587,
  stationType: 684,
  status: 903,
  ternoutNum: 665,
  thighTrackNum: 607,
  trackDivisionId: 490,
  updateTime: "2019-11-19 1:4:50"
};
}

stationInfo.columnsArray=columnsArray;
stationInfo.create=create;
module.exports=stationInfo;