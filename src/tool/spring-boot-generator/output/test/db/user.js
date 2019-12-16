let user = {
  name: "user",
  description: "",
  columns: {
    id: {
      name: "id",
      description: "",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    name: {
      name: "name",
      description: "",
      nullable: true,
      type: {
        name: "varchar",
        length: 45
      }
    },
    salary: {
      name: "salary",
      description: "",
      nullable: true,
      type: {
        name: "bigint",
        length: 8
      }
    }
  }
};

let columnsArray = [
  "id",
  "name",
  "salary"
];

function create() {
  return {
  id: 585,
  name: "700",
  salary: 287
};
}

user.columnsArray=columnsArray;
user.create=create;
module.exports=user;