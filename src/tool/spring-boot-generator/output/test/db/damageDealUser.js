let damageDealUser = {
  name: "damageDealUser",
  description: "伤损处理人员",
  columns: {
    birthday: {
      name: "birthday",
      description: "出生日期",
      nullable: true,
      type: {
        name: "date"
      }
    },
    contact: {
      name: "contact",
      description: "联系电话",
      nullable: true,
      type: {
        name: "varchar",
        length: null
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
    dealType: {
      name: "dealType",
      description: "处理类别",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    eduDegree: {
      name: "eduDegree",
      description: "文化程度",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    gender: {
      name: "gender",
      description: "性别",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    gradeGainDate: {
      name: "gradeGainDate",
      description: "职称获得时间",
      nullable: true,
      type: {
        name: "date"
      }
    },
    gradeId: {
      name: "gradeId",
      description: "职称编号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    id: {
      name: "id",
      description: "人员编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    idCardNo: {
      name: "idCardNo",
      description: "身份证",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    isDelete: {
      name: "isDelete",
      description: "删除标记",
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    name: {
      name: "name",
      description: "姓名",
      nullable: true,
      type: {
        name: "varchar",
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
    positionId: {
      name: "positionId",
      description: "职位编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    qualificationAuditDate: {
      name: "qualificationAuditDate",
      description: "探伤资质复审日期",
      nullable: true,
      type: {
        name: "date"
      }
    },
    qualificationGainDate: {
      name: "qualificationGainDate",
      description: "探伤资质发证日期",
      nullable: true,
      type: {
        name: "date"
      }
    },
    qualificationGrade: {
      name: "qualificationGrade",
      description: "探伤资质等级",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    qualificationInvalidDate: {
      name: "qualificationInvalidDate",
      description: "探伤资质截止日期",
      nullable: true,
      type: {
        name: "date"
      }
    },
    qualificationValidTime: {
      name: "qualificationValidTime",
      description: "探伤资质有效期",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
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
    tecCategory: {
      name: "tecCategory",
      description: "技术类别",
      nullable: true,
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
    },
    workareaId: {
      name: "workareaId",
      description: "工区编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    }
  }
};

let columnsArray = [
  "birthday",
  "contact",
  "createTime",
  "dealType",
  "eduDegree",
  "gender",
  "gradeGainDate",
  "gradeId",
  "id",
  "idCardNo",
  "isDelete",
  "name",
  "operator",
  "positionId",
  "qualificationAuditDate",
  "qualificationGainDate",
  "qualificationGrade",
  "qualificationInvalidDate",
  "qualificationValidTime",
  "remark",
  "status",
  "tecCategory",
  "updateTime",
  "workareaId"
];

function create() {
  return {
  birthday: "2020-1-19 1:4:50",
  contact: "联系电话259",
  createTime: "2019-12-18 1:4:50",
  dealType: 838,
  eduDegree: 217,
  gender: 813,
  gradeGainDate: "2019-12-18 1:4:50",
  gradeId: "职称编号321",
  id: 70,
  idCardNo: "身份证279",
  isDelete: 363,
  name: "姓名875",
  operator: 895,
  positionId: 704,
  qualificationAuditDate: "2019-12-18 1:4:50",
  qualificationGainDate: "2019-11-19 1:4:50",
  qualificationGrade: 966,
  qualificationInvalidDate: "2019-12-26 1:4:50",
  qualificationValidTime: 2,
  remark: "备注802",
  status: 142,
  tecCategory: 885,
  updateTime: "2019-12-19 1:4:50",
  workareaId: 478
};
}

damageDealUser.columnsArray=columnsArray;
damageDealUser.create=create;
module.exports=damageDealUser;