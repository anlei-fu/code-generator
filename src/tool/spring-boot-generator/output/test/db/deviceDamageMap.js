let deviceDamageMap = {
  name: "deviceDamageMap",
  description: "设备伤损关系",
  columns: {
    damageId: {
      name: "damageId",
      description: "伤损编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    deivceId: {
      name: "deivceId",
      description: "设备编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    deviceType: {
      name: "deviceType",
      description: "设备类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    id: {
      name: "id",
      description: "关系编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    }
  }
};

let columnsArray = [
  "damageId",
  "deivceId",
  "deviceType",
  "id"
];

function create() {
  return {
  damageId: 739,
  deivceId: 890,
  deviceType: 604,
  id: 259
};
}

deviceDamageMap.columnsArray=columnsArray;
deviceDamageMap.create=create;
module.exports=deviceDamageMap;