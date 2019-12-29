let userSignSeal = {
  name: "userSignSeal",
  columns: {
    id: {
      name: "id",
      description: "编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    userId: {
      name: "userId",
      description: "创建人编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    belongType: {
      name: "belongType",
      description: "签章归属类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    belongId: {
      name: "belongId",
      description: "签章归属编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    signName: {
      name: "signName",
      description: "签章名称",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    signPic: {
      name: "signPic",
      description: "签章图片",
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
  "belongType",
  "belongId",
  "signName",
  "signPic",
  "createTime"
];

function create() {
  return {
  id: 895,
  userId: 409,
  belongType: 186,
  belongId: 550,
  signName: "签章名称39",
  signPic: "签章图片252",
  createTime: "2019-11-22 1:5:48"
};
}

userSignSeal.columnsArray=columnsArray;
userSignSeal.create=create;
module.exports=userSignSeal;