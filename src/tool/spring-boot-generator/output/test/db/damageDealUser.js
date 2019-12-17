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
        length: 16
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
        length: 11
      }
    },
    eduDegree: {
      name: "eduDegree",
      description: "文化程度",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    gender: {
      name: "gender",
      description: "性别",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
        length: 225
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
        length: 11
      }
    },
    idCardNo: {
      name: "idCardNo",
      description: "身份证",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
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
    name: {
      name: "name",
      description: "姓名",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
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
    positionId: {
      name: "positionId",
      description: "职位编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
        length: 11
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
        length: 11
      }
    },
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
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
    tecCategory: {
      name: "tecCategory",
      description: "技术类别",
      nullable: true,
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
    },
    workareaId: {
      name: "workareaId",
      description: "工区编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
  birthday: "2019-12-17 :3:35",
  contact: "联系电话501",
  createTime: "2019-11-17 :3:35",
  dealType: 848,
  eduDegree: 559,
  gender: 140,
  gradeGainDate: "2019-12-24 :3:35",
  gradeId: "职称编号395",
  id: 891,
  idCardNo: "身份证630",
  isDelete: 251,
  name: "姓名184",
  operator: 528,
  positionId: 666,
  qualificationAuditDate: "2019-11-17 :3:35",
  qualificationGainDate: "2019-11-17 :3:35",
  qualificationGrade: 665,
  qualificationInvalidDate: "2019-12-24 :3:35",
  qualificationValidTime: 258,
  remark: "备注325",
  status: 467,
  tecCategory: 325,
  updateTime: "2020-1-17 :3:35",
  workareaId: 662
};
}

damageDealUser.columnsArray=columnsArray;
damageDealUser.create=create;
module.exports=damageDealUser;