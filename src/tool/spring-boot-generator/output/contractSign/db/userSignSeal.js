let userSignSeal = {
  name: "userSignSeal",
  description: "",
  columns: {
    id: {
      name: "id",
      description: "编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    userId: {
      name: "userId",
      description: "创建人编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    belongType: {
      name: "belongType",
      description: "签章归属类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    belongId: {
      name: "belongId",
      description: "签章归属编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    signName: {
      name: "signName",
      description: "签章名称",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    signPic: {
      name: "signPic",
      description: "签章图片",
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
  "belongType",
  "belongId",
  "signName",
  "signPic",
  "createTime"
];

function create() {
  return {
  id: 919,
  userId: 396,
  belongType: 390,
  belongId: 414,
  signName: "签章名称253",
  signPic: "签章图片132",
  createTime: "2019-11-23 1:2:20"
};
}

userSignSeal.columnsArray=columnsArray;
userSignSeal.create=create;
module.exports=userSignSeal;