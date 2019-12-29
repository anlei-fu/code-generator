let userCompanyInfo = {
  name: "userCompanyInfo",
  columns: {
    id: {
      name: "id",
      description: "企业编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    userId: {
      name: "userId",
      description: "用户编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    companyName: {
      name: "companyName",
      description: "企业名称",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    contactAddress: {
      name: "contactAddress",
      description: "企业地址",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    licenseNo: {
      name: "licenseNo",
      description: "营业执照号",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    legalPerson: {
      name: "legalPerson",
      description: "企业法人",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    contactPhone: {
      name: "contactPhone",
      description: "法人联系电话",
      nullable: true,
      type: {
        name: "varchar",
        length: 24
      }
    },
    idCardNo: {
      name: "idCardNo",
      description: "法人身份证号",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    idCardPicFront: {
      name: "idCardPicFront",
      description: "法人身份证国徽照",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    idCardPicBack: {
      name: "idCardPicBack",
      description: "法人身份证人像照",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    licensePicFront: {
      name: "licensePicFront",
      description: "企业营业执照",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    verifyState: {
      name: "verifyState",
      description: "认证状态",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
        length: 32
      }
    },
    authIdNo: {
      name: "authIdNo",
      description: "授权人身份证号",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    authFile: {
      name: "authFile",
      description: "授权文件",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
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
  id: 240,
  userId: 755,
  companyName: "企业名称479",
  contactAddress: "企业地址867",
  licenseNo: "营业执照号439",
  legalPerson: "企业法人314",
  contactPhone: "法人联系电话376",
  idCardNo: "法人身份证号335",
  idCardPicFront: "法人身份证国徽照274",
  idCardPicBack: "法人身份证人像照62",
  licensePicFront: "企业营业执照564",
  verifyState: 519,
  verifyStartTime: "2019-11-22 1:5:48",
  verifyEndTime: "2019-11-15 1:5:48",
  authorizer: "授权签署人402",
  authIdNo: "授权人身份证号298",
  authFile: "授权文件755",
  createTime: "2019-12-15 1:5:48"
};
}

userCompanyInfo.columnsArray=columnsArray;
userCompanyInfo.create=create;
module.exports=userCompanyInfo;