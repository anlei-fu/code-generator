let detectStaffInfo = {
  name: "detectStaffInfo",
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
  birthday: "2019-12-17 :3:35",
  contact: "联系电话778",
  createTime: "2019-11-17 :3:35",
  eduDegree: 719,
  gender: 158,
  gradeGainDate: "2019-12-24 :3:35",
  gradeId: 791,
  id: 347,
  idCardNo: "身份证323",
  isDelete: 299,
  name: "姓名683",
  operator: 449,
  positionId: 13,
  qualificationAuditDate: "2019-12-17 :3:35",
  qualificationGainDate: "2019-12-24 :3:35",
  qualificationGrade: 255,
  qualificationInvalidDate: "2019-11-17 :3:35",
  qualificationValidTime: 885,
  remark: "备注325",
  status: 379,
  tecCategory: 44,
  updateTime: "2019-12-16 :3:35",
  workareaId: 211
};
}

detectStaffInfo.columnsArray=columnsArray;
detectStaffInfo.create=create;
module.exports=detectStaffInfo;