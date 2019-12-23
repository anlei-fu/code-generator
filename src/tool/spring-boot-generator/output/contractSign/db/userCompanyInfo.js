let userCompanyInfo = {
  name: "userCompanyInfo",
  description: "",
  columns: {
    id: {
      name: "id",
      description: "企业编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    userId: {
      name: "userId",
      description: "用户编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    companyName: {
      name: "companyName",
      description: "企业名称",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    contactAddress: {
      name: "contactAddress",
      description: "企业地址",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    licenseNo: {
      name: "licenseNo",
      description: "营业执照号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    legalPerson: {
      name: "legalPerson",
      description: "企业法人",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    contactPhone: {
      name: "contactPhone",
      description: "法人联系电话",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    idCardNo: {
      name: "idCardNo",
      description: "法人身份证号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    idCardPicFront: {
      name: "idCardPicFront",
      description: "法人身份证国徽照",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    idCardPicBack: {
      name: "idCardPicBack",
      description: "法人身份证人像照",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    licensePicFront: {
      name: "licensePicFront",
      description: "企业营业执照",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    verifyState: {
      name: "verifyState",
      description: "认证状态",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    verifyStartTime: {
      name: "verifyStartTime",
      description: "认证开始时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    verifyEndTime: {
      name: "verifyEndTime",
      description: "认证完成时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    authorizer: {
      name: "authorizer",
      description: "授权签署人",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    authIdNo: {
      name: "authIdNo",
      description: "授权人身份证号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    authFile: {
      name: "authFile",
      description: "授权文件",
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
    }
  }
};

let columnsArray = [
  "id",
  "userId",
  "companyName",
  "contactAddress",
  "licenseNo",
  "legalPerson",
  "contactPhone",
  "idCardNo",
  "idCardPicFront",
  "idCardPicBack",
  "licensePicFront",
  "verifyState",
  "verifyStartTime",
  "verifyEndTime",
  "authorizer",
  "authIdNo",
  "authFile",
  "createTime"
];

function create() {
  return {
  id: 444,
  userId: 581,
  companyName: "企业名称950",
  contactAddress: "企业地址241",
  licenseNo: "营业执照号853",
  legalPerson: "企业法人259",
  contactPhone: "法人联系电话575",
  idCardNo: "法人身份证号954",
  idCardPicFront: "法人身份证国徽照376",
  idCardPicBack: "法人身份证人像照681",
  licensePicFront: "企业营业执照291",
  verifyState: 529,
  verifyStartTime: "2019-12-22 1:2:20",
  verifyEndTime: "2019-11-23 1:2:20",
  authorizer: "授权签署人163",
  authIdNo: "授权人身份证号157",
  authFile: "授权文件190",
  createTime: "2019-12-23 1:2:20"
};
}

userCompanyInfo.columnsArray=columnsArray;
userCompanyInfo.create=create;
module.exports=userCompanyInfo;