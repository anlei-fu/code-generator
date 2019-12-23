let deviceDamageMap = {
  name: "deviceDamageMap",
  description: "设备伤损关系",
  columns: {
    id: {
      name: "id",
      description: "关系编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    deviceType: {
      name: "deviceType",
      description: "设备类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    deivceId: {
      name: "deivceId",
      description: "设备编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    damageId: {
      name: "damageId",
      description: "伤损编号",
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
  "deviceType",
  "deivceId",
  "damageId"
];

function create() {
  return {
  id: 470,
  deviceType: 782,
  deivceId: 105,
  damageId: 495
};
}

deviceDamageMap.columnsArray=columnsArray;
deviceDamageMap.create=create;
module.exports=deviceDamageMap;