let detectStaffInfoCopy = {
  name: "detectStaffInfoCopy",
  description: "探伤人员",
  columns: {
    id: {
      name: "id",
      description: "探伤人员编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    workareaId: {
      name: "workareaId",
      description: "探伤工区编号",
      nullable: true,
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
    positionId: {
      name: "positionId",
      description: "职位编号",
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
    idCardNo: {
      name: "idCardNo",
      description: "身份证",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    birthday: {
      name: "birthday",
      description: "出生日期",
      nullable: true,
      type: {
        name: "date"
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
    tecCategory: {
      name: "tecCategory",
      description: "技术类别",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    gradeId: {
      name: "gradeId",
      description: "职称编号",
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
    qualificationGrade: {
      name: "qualificationGrade",
      description: "探伤资质等级",
      nullable: true,
      type: {
        name: "int",
        length: null
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
    qualificationAuditDate: {
      name: "qualificationAuditDate",
      description: "探伤资质复审日期",
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
    qualificationInvalidDate: {
      name: "qualificationInvalidDate",
      description: "探伤资质截止日期",
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
    isDelete: {
      name: "isDelete",
      description: "删除标记",
      nullable: false,
      type: {
        name: "int",
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
    updateTime: {
      name: "updateTime",
      description: "更新时间",
      nullable: true,
      type: {
        name: "datetime"
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
    }
  }
};

let columnsArray = [
  "id",
  "workareaId",
  "name",
  "positionId",
  "gender",
  "idCardNo",
  "birthday",
  "eduDegree",
  "tecCategory",
  "gradeId",
  "gradeGainDate",
  "qualificationGrade",
  "qualificationGainDate",
  "qualificationAuditDate",
  "qualificationValidTime",
  "qualificationInvalidDate",
  "contact",
  "remark",
  "status",
  "isDelete",
  "createTime",
  "updateTime",
  "operator"
];

function create() {
  return {
  id: 815,
  workareaId: 513,
  name: "姓名437",
  positionId: 462,
  gender: 752,
  idCardNo: "身份证930",
  birthday: "2019-12-22 1:3:35",
  eduDegree: 681,
  tecCategory: 660,
  gradeId: 114,
  gradeGainDate: "2019-11-23 1:3:35",
  qualificationGrade: 37,
  qualificationGainDate: "2019-11-23 1:3:35",
  qualificationAuditDate: "2019-11-23 1:3:35",
  qualificationValidTime: 378,
  qualificationInvalidDate: "2019-12-23 1:3:35",
  contact: "联系电话327",
  remark: "备注495",
  status: 729,
  isDelete: 878,
  createTime: "2019-12-30 1:3:35",
  updateTime: "2019-12-23 1:3:35",
  operator: 146
};
}

detectStaffInfoCopy.columnsArray=columnsArray;
detectStaffInfoCopy.create=create;
module.exports=detectStaffInfoCopy;