let detectStaffInfoCopy = {
  name: "detectStaffInfoCopy",
  description: "探伤人员",
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
        name: "int",
        length: 11
      }
    },
    id: {
      name: "id",
      description: "探伤人员编号",
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
      description: "探伤工区编号",
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
  birthday: "2019-12-25 1::37",
  contact: "联系电话414",
  createTime: "2020-1-18 1::37",
  eduDegree: 315,
  gender: 92,
  gradeGainDate: "2019-11-18 1::37",
  gradeId: 515,
  id: 771,
  idCardNo: "身份证821",
  isDelete: 761,
  name: "姓名839",
  operator: 73,
  positionId: 369,
  qualificationAuditDate: "2019-12-25 1::37",
  qualificationGainDate: "2019-12-18 1::37",
  qualificationGrade: 991,
  qualificationInvalidDate: "2019-12-25 1::37",
  qualificationValidTime: 408,
  remark: "备注971",
  status: 426,
  tecCategory: 61,
  updateTime: "2020-1-18 1::37",
  workareaId: 253
};
}

detectStaffInfoCopy.columnsArray=columnsArray;
detectStaffInfoCopy.create=create;
module.exports=detectStaffInfoCopy;